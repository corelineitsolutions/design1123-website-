"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function MobileStickyButton() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 xl:hidden w-[90%] max-w-[340px]"
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-full text-white font-bold uppercase tracking-wider text-sm shadow-[0_8px_30px_rgb(255,106,0,0.4)] border border-white/10 relative overflow-hidden animated-gradient-bg"
      >
        <Download className="w-4 h-4 animate-bounce" />
        <span>Download Application</span>
      </a>
    </motion.div>
  );
}
