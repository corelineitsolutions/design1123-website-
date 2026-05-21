"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { MotionCard, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

const iconMap: Record<string, string> = {
  calendar: "📅",
  layers: "📐",
  message: "💬",
  video: "🎬",
  sparkle: "✨",
  card: "💳",
  qr: "⬛",
  audio: "🔊",
};

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-plum/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Discover the Design1123 experience"
          description="From product ads to WhatsApp stickers, GIFs, and AI reels—everything your business needs to look premium, packaged in one creative studio."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <StaggerItem key={f.title}>
              <MotionCard className="hover-lift group h-full rounded-2xl border border-brand-plum/10 bg-gradient-to-b from-white to-brand-plum/[0.03] p-6">
                <motion.span
                  className="inline-flex text-3xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {iconMap[f.icon] ?? "◆"}
                </motion.span>
                <h3 className="mt-4 font-bold text-brand-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">{f.description}</p>
                <div
                  className="mt-4 h-0.5 w-0 rounded-full gradient-brand transition-all duration-500 group-hover:w-full"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
