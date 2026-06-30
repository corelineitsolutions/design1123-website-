"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  magnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className,
      magnetic = true,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "animated-gradient-bg text-white shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] border-none",
      secondary:
        "bg-white text-bg-dark hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)] border-none",
      outline:
        "bg-transparent border border-border-glass text-white hover:bg-white/5",
      ghost: "bg-transparent text-white hover:bg-white/10 border-none",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold rounded-full",
    };

    const baseStyles =
      "relative overflow-hidden rounded-full transition-all duration-300 ease-out flex items-center justify-center gap-2 cursor-pointer";

    const btnClass = cn(baseStyles, variants[variant], sizes[size], className);

    const Wrapper = magnetic ? motion.button : motion.button;

    return (
      <Wrapper
        ref={ref}
        className={btnClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props as any}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </Wrapper>
    );
  }
);
Button.displayName = "Button";
