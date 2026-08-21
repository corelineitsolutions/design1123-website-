"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const downloadSection = document.getElementById("download");
      if (downloadSection) {
        const rect = downloadSection.getBoundingClientRect();
        // Hide sticky button when the download card is visible in the viewport
        if (rect.top < window.innerHeight - 80 && rect.bottom > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run an initial check after components mount/render
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 120, 
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 xl:hidden w-[90%] max-w-[340px]"
    >
      <a
        href="#download"
        className="flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full text-white font-bold uppercase tracking-wider text-sm shadow-[0_8px_30px_rgb(255,106,0,0.4)] border border-white/10 relative overflow-hidden animated-gradient-bg"
      >
        <Download className="w-4 h-4 animate-bounce" />
        <span>Download Application</span>
      </a>
    </motion.div>
  );
}
