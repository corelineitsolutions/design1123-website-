"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal, SectionHeading } from "@/components/ui/motion";

export function QRFeature() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scaleIn">
          <div className="overflow-hidden rounded-3xl gradient-brand p-px shadow-2xl shadow-brand-plum/30">
            <div className="grid items-center gap-10 rounded-[calc(1.5rem-1px)] bg-brand-ink p-8 lg:grid-cols-2 lg:p-14">
              <div className="text-white">
                <SectionHeading
                  light
                  center={false}
                  title="Go digital with branded QR codes"
                  description="Make your online presence bigger and sharper with Design1123 QR branding—menus, catalogs, offers, and reviews in one scannable experience."
                />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Button href="#download" className="mt-8">
                    Try it now
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="flex justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  whileHover={{ rotate: 2, scale: 1.05 }}
                  className="rounded-2xl bg-white p-8 shadow-2xl"
                >
                  <div className="grid h-44 w-44 grid-cols-7 gap-1.5">
                    {Array.from({ length: 49 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 7) * 0.02 + Math.floor(i / 7) * 0.03 }}
                        className={`rounded-sm ${
                          (i + Math.floor(i / 7)) % 3 === 0
                            ? "bg-brand-plum"
                            : (i + Math.floor(i / 7)) % 3 === 1
                              ? "bg-brand-ink"
                              : "bg-brand-gold"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-center text-sm font-bold text-brand-plum">
                    Your brand. One scan away.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
