"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

const outlets = ["TechCrunch India", "YourStory", "Inc42", "Economic Times", "Mint"];

export function MediaAwards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          title="As featured in media & awards"
          description="Recognized for empowering creators and local businesses with design tools that scale."
        />
        <Stagger className="mt-14 flex flex-wrap items-center justify-center gap-6">
          {outlets.map((name) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-xl border border-brand-plum/15 bg-gradient-to-br from-white to-brand-plum/[0.04] px-10 py-5 text-sm font-semibold text-brand-plum/80 shadow-sm"
              >
                {name}
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3} className="mt-10">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-sm font-semibold text-brand-flame underline-offset-4 hover:underline"
          >
            Explore more →
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
