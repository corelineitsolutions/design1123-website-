"use client";

import { industries } from "@/lib/data";
import { MotionCard, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

export function Industries() {
  const doubled = [...industries, ...industries];

  return (
    <section id="industries" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Built for your industry"
          description="Whether you run a clinic, café, or coaching center—templates, captions, and festival kits tuned to how you sell."
        />

        <Stagger className="mt-14 hidden grid-cols-2 gap-3 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industries.map((name) => (
            <StaggerItem key={name}>
              <IndustryPill name={name} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="relative mt-12 overflow-hidden sm:hidden">
          <div className="absolute left-0 z-10 h-full w-16 bg-gradient-to-r from-[#faf8fc] to-transparent" />
          <div className="absolute right-0 z-10 h-full w-16 bg-gradient-to-l from-[#faf8fc] to-transparent" />
          <div className="flex w-max animate-marquee gap-3">
            {doubled.map((name, i) => (
              <IndustryPill key={`${name}-${i}`} name={name} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryPill({ name, compact }: { name: string; compact?: boolean }) {
  return (
    <MotionCard
      className={`hover-lift rounded-xl border border-brand-plum/10 bg-white text-center font-medium text-brand-ink shadow-sm transition hover:border-brand-gold hover:text-brand-plum ${
        compact ? "shrink-0 px-4 py-3 text-sm whitespace-nowrap" : "px-3 py-4 text-sm"
      }`}
    >
      <a href="#">{name}</a>
    </MotionCard>
  );
}
