"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  const isRating = value.includes("★");
  const match = value.match(/^([0-9.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 18 });

  useEffect(() => {
    if (!inView || isRating) return;
    const unsub = spring.on("change", (v) => {
      const formatted =
        suffix.startsWith("M") || value.includes(".")
          ? v.toFixed(1)
          : String(Math.round(v));
      setDisplay(`${formatted}${suffix}`);
    });
    motionVal.set(target);
    return unsub;
  }, [inView, isRating, motionVal, spring, suffix, target, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <p className="text-4xl font-extrabold text-white sm:text-5xl tabular-nums">
        {isRating ? value : display}
      </p>
      <p className="mt-2 text-sm font-medium text-white/85">{label}</p>
    </motion.div>
  );
}
