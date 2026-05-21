"use client";

import { processSteps } from "@/lib/data";
import { MotionCard, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

export function HowItWorks() {
  return (
    <section className="section-glow relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quick start"
          title="Explore how Design1123 works"
          description="From picking your industry to sharing on WhatsApp—three steps between you and scroll-stopping creatives."
        />

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
          {processSteps.map((item, i) => (
            <StaggerItem key={item.step}>
              <MotionCard className="card-shine group relative h-full overflow-hidden rounded-2xl border border-brand-plum/10 bg-gradient-to-br from-white via-white to-brand-plum/[0.06] p-8 shadow-sm">
                <div
                  className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 blur-2xl"
                  style={{
                    background: i === 0 ? "#f5ac11" : i === 1 ? "#e33e0f" : "#640a5c",
                  }}
                />
                <span className="relative text-5xl font-black gradient-text">{item.step}</span>
                <h3 className="relative mt-4 text-xl font-bold text-brand-ink">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-brand-ink/65">
                  {item.description}
                </p>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
