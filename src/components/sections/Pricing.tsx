"use client";

import { motion } from "framer-motion";
import { featureRows, pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { MotionCard, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

function featureValue(val: string | boolean): string {
  if (val === true) return "✓";
  if (val === false) return "—";
  return String(val);
}

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-brand-ink py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-brand-plum/30 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Affordable plans, powerful features"
          description="Start free, upgrade anytime. Plans shaped for how Indian businesses actually create."
        />

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <MotionCard
                className={`relative flex h-full flex-col rounded-2xl ${
                  plan.highlight ? "gradient-brand p-px shadow-xl shadow-brand-gold/20" : ""
                }`}
              >
                <div
                  className={`flex h-full flex-col rounded-[14px] p-6 ${
                    plan.highlight ? "bg-brand-ink" : "border border-white/15 bg-white/5"
                  }`}
                >
                  {plan.badge && (
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-3 inline-block w-fit rounded-full bg-brand-gold px-3 py-0.5 text-[10px] font-bold uppercase text-brand-ink"
                    >
                      {plan.badge}
                    </motion.span>
                  )}
                  {plan.savings && (
                    <span className="text-xs font-semibold text-brand-gold">{plan.savings}</span>
                  )}
                  <h3 className="mt-2 text-lg font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                    {plan.original && (
                      <span className="text-sm text-white/40 line-through">{plan.original}</span>
                    )}
                  </div>
                  <p className="text-xs text-white/50">{plan.perUnit}</p>
                  <ul className="mt-6 flex-1 space-y-2 text-xs text-white/75">
                    <li>Validity: {plan.features.validity}</li>
                    <li>Credits: {plan.features.credits}</li>
                    <li>Frames: {plan.features.frames}</li>
                  </ul>
                  <Button
                    href="#download"
                    variant={plan.highlight ? "primary" : "outline"}
                    className="mt-6 w-full justify-center"
                  >
                    Buy now
                  </Button>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-16">
          <div className="overflow-x-auto rounded-2xl border border-white/10 backdrop-blur-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-semibold">What you get</th>
                  {pricingPlans.map((p) => (
                    <th key={p.name} className="p-4 font-semibold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, i) => (
                  <motion.tr
                    key={row}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-white/5 transition hover:bg-white/5"
                  >
                    <td className="p-4 text-white/70">{row}</td>
                    {pricingPlans.map((plan) => {
                      const keys = Object.keys(plan.features) as (keyof typeof plan.features)[];
                      const val = plan.features[keys[i] as keyof typeof plan.features];
                      return (
                        <td key={plan.name + row} className="p-4">
                          {featureValue(val as string | boolean)}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
