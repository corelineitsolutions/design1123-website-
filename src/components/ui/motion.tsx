"use client";

import {
  motion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { type ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

const viewport = { once: true, margin: "-80px" as const };

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "scaleIn";
  as?: "div" | "section" | "article" | "span";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  as = "div",
}: RevealProps) {
  const Component = motion[as];
  const variants = { fadeUp, fadeIn, scaleIn }[variant];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function Stagger({ children, className = "", stagger = 0.1 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}) {
  const text = light ? "text-white" : "text-brand-ink";
  const muted = light ? "text-white/70" : "text-brand-ink/70";

  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-brand-gold" : "text-brand-plum"
          }`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className={`mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl ${text}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${muted} ${
            center ? "" : "mx-0"
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, delay: 0.35, ease }}
        className={`mx-auto mt-6 h-1 w-24 origin-center rounded-full gradient-brand ${
          center ? "" : "mx-0"
        }`}
      />
    </Reveal>
  );
}

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-brand-gold/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-10 bottom-10 h-80 w-80 rounded-full bg-brand-flame/20 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-plum/30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      aria-hidden
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }}
    />
  );
}

export function ParallaxLogo({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const rotate = useTransform(scrollY, [0, 400], [0, 8]);

  return (
    <motion.div style={{ y, rotate }} className="relative">
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ShimmerBadge({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative inline-flex overflow-hidden rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold"
    >
      <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.span>
  );
}
