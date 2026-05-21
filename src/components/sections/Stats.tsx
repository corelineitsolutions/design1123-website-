"use client";

import { stats } from "@/lib/data";
import { AnimatedStat } from "@/components/ui/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";

export function Stats() {
  return (
    <section className="relative overflow-hidden gradient-brand py-20">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.06%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Because numbers speak for themselves
          </h2>
        </Reveal>
        <Stagger className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <AnimatedStat value={s.value} label={s.label} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
