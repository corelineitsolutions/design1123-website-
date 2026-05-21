"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

const tools = [
  "Customizable calendars",
  "Interactive digital business cards",
  "Branded audio jingles",
  "AI background removal",
  "Social caption generator",
  "Free logo variations",
  "Multi-format export",
  "Dedicated creator support",
];

export function ProcessFeatures() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-plum/[0.08] via-white to-brand-gold/[0.06] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <SectionHeading
            center={false}
            title="Quick & easy—with flagship features"
            description="Stay organized, network like a pro, and make a lasting impression with digital tools built for Indian SMBs."
          />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-0">
            {tools.map((tool) => (
              <StaggerItem key={tool}>
                <motion.li
                  whileHover={{ x: 6 }}
                  className="glass-light flex list-none items-center gap-3 rounded-xl px-4 py-3.5 shadow-sm"
                >
                  <motion.span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full gradient-brand text-xs font-bold text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-sm font-medium text-brand-ink">{tool}</span>
                </motion.li>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
