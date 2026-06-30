"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function GlassCard({
  children,
  className,
  glowOnHover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-6 md:p-8 relative overflow-hidden group",
        glowOnHover && "glow-border",
        className
      )}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props as any}
    >
      <div className="relative z-10">{children}</div>
      {/* Subtle inner gradient for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-[inherit]" />
    </motion.div>
  );
}
