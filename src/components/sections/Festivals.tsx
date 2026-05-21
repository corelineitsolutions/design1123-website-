"use client";

import { motion } from "framer-motion";
import { festivals } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

export function Festivals() {
  return (
    <section id="events" className="relative overflow-hidden bg-gradient-to-b from-brand-plum/[0.06] to-white py-24">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-flame/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            center={false}
            title="Festivals"
            description="Discover month-wise celebrations at your fingertips. Get instant alerts and ready-made kits for every important date on the Indian calendar."
          />
          <Reveal delay={0.2}>
            <Button variant="secondary" href="#events">
              View all events
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {festivals.map((name, i) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative overflow-hidden rounded-xl border border-brand-plum/15 bg-white p-4 text-center shadow-sm transition-shadow hover:border-brand-gold hover:shadow-lg hover:shadow-brand-gold/15"
              >
                <motion.div
                  className="mx-auto mb-2 h-10 w-10 rounded-full gradient-brand"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, delay: i * 0.15, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-brand-ink">{name}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
