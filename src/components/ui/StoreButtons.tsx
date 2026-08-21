"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const APP_STORE_URL = "https://apps.apple.com/in/app/design-1123/id6798540472";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN";

export function useDownloadLink() {
  const [downloadLink, setDownloadLink] = useState(PLAY_STORE_URL);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.navigator) {
      const userAgent = window.navigator.userAgent || window.navigator.vendor || (window as any).opera;
      // Simple but effective iOS device detection
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        setDownloadLink(APP_STORE_URL);
        setIsIos(true);
      }
    }
  }, []);

  return { downloadLink, isIos };
}

export function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-7 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 px-9 py-6 rounded-3xl transition-colors duration-300 text-left w-full sm:w-auto min-w-[320px] shadow-[0_6px_30px_rgba(0,0,0,0.4)] backdrop-blur-md ${className}`}
    >
      <img src="/app-store-logo.png?v=2" className="w-28 h-28 object-contain" alt="App Store Logo" />
      <div className="flex flex-col">
        <span className="text-[13px] text-text-secondary uppercase tracking-wider font-semibold leading-none">Download on the</span>
        <span className="text-[26px] font-bold text-white font-sans mt-2 leading-none">App Store</span>
      </div>
    </motion.a>
  );
}

export function PlayStoreButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-7 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 px-9 py-6 rounded-3xl transition-colors duration-300 text-left w-full sm:w-auto min-w-[320px] shadow-[0_6px_30px_rgba(0,0,0,0.4)] backdrop-blur-md ${className}`}
    >
      <img src="/google-play-logo.png?v=2" className="w-28 h-28 object-contain" alt="Google Play Logo" />
      <div className="flex flex-col">
        <span className="text-[13px] text-text-secondary uppercase tracking-wider font-semibold leading-none">GET IT ON</span>
        <span className="text-[26px] font-bold text-white font-sans mt-2 leading-none">Google Play</span>
      </div>
    </motion.a>
  );
}
