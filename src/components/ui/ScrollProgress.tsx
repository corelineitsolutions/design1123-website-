"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-orange via-brand-pink to-brand-deep-purple z-[100] origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
