"use client";

import { testimonials } from "@/lib/data";
import { MotionCard, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear our customers speak"
          description="Proud to help every business become self-reliant on its branding journey."
        />

        <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <MotionCard className="hover-lift h-full rounded-2xl border border-brand-plum/10 bg-white p-8 shadow-sm">
                <div className="mb-4 flex gap-1 text-brand-gold">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-brand-ink/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-brand-plum/10 pt-4">
                  <cite className="not-italic font-bold text-brand-ink">{t.name}</cite>
                  <p className="text-sm text-brand-plum">{t.business}</p>
                </footer>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
