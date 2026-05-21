"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BRAND } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import {
  FloatingOrbs,
  GridPattern,
  ParallaxLogo,
  ShimmerBadge,
} from "@/components/ui/motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="gradient-hero relative min-h-[92vh] overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <FloatingOrbs />
      <GridPattern />

      <motion.div
        className="pointer-events-none absolute right-[15%] top-[20%] h-32 w-32 rounded-full border border-brand-gold/20"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
      />
      <motion.div
        className="pointer-events-none absolute left-[10%] bottom-[25%] h-20 w-20 rounded-full border border-brand-flame/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <ShimmerBadge>Trusted by {BRAND.users} businesses</ShimmerBadge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="gradient-text">{BRAND.name}</span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white"
            >
              {BRAND.tagline}
            </motion.span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Join millions of entrepreneurs on Design1123—India&apos;s flagship poster
            studio for festival creatives, branded WhatsApp assets, AI reels, and
            campaigns that look agency-made. Stunning designs in minutes. No designer
            on payroll.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#download">Download free</Button>
            <Button variant="outline" href="#pricing">
              View plans
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            {["Google Play", "App Store"].map((store, i) => (
              <motion.a
                key={store}
                href="#download"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-black/40 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:ring-brand-gold/60 hover:shadow-lg hover:shadow-brand-gold/10"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <span className="text-brand-gold">{i === 0 ? "▶" : ""}</span>
                {store}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <ParallaxLogo>
            <motion.div
              className="animate-float relative"
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 rounded-3xl gradient-brand opacity-50 blur-3xl animate-pulse-glow" />
              <motion.div
                className="relative rounded-3xl glass glow-ring p-8 sm:p-10"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/logo.png"
                    alt="Design1123 logo"
                    width={320}
                    height={320}
                    className="mx-auto h-48 w-48 object-contain sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                    priority
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-6 text-center text-sm font-medium text-white/60"
                >
                  Brush-stroke bold. Brand-ready in seconds.
                </motion.p>
              </motion.div>
            </motion.div>
          </ParallaxLogo>
        </div>
      </div>
    </section>
  );
}
