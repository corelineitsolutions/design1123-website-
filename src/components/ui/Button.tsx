"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "gradient-brand text-white shadow-lg shadow-brand-plum/40 hover:shadow-xl hover:shadow-brand-gold/30",
  secondary:
    "bg-brand-plum text-white hover:bg-brand-plum-deep shadow-md shadow-brand-plum/30",
  outline:
    "border-2 border-brand-gold/60 text-brand-gold hover:bg-brand-gold/15 hover:border-brand-gold",
  ghost: "text-white/90 hover:bg-white/10",
};

const motionProps = {
  whileHover: { scale: 1.04, y: -2 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 500, damping: 28 },
};

interface ButtonProps {
  variant?: Variant;
  href?: string;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  href,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
