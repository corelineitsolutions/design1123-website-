"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

export function InfluencerCorner() {
  return (
    <section className="gradient-hero relative overflow-hidden py-24 text-white">
      <GridDots />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              center={false}
              eyebrow="Creator spotlight"
              title="Design1123 Creator Corner"
              description="India's leading creators are building with Design1123—trending layouts, viral reel templates, and festival drops—all in one studio."
            />
          </div>
          <Stagger className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.04, rotate: i % 2 ? 1 : -1 }}
                  className="card-shine flex aspect-[4/5] flex-col justify-end rounded-2xl glass p-4"
                >
                  <motion.div
                    className="h-8 w-8 rounded-full gradient-brand"
                    animate={{ boxShadow: ["0 0 0 0 rgba(245,172,17,0.4)", "0 0 20px 4px rgba(245,172,17,0)"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <p className="mt-3 text-xs font-medium text-white/80">@creator_{i}</p>
                  <p className="text-[10px] text-white/50">{12 + i}.K saves this week</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function GridDots() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-30"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(245,172,17,0.4) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}
