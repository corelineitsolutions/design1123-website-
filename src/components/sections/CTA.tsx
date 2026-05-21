"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { FloatingOrbs, Reveal, SectionHeading } from "@/components/ui/motion";

export function TrustedCTA() {
  return (
    <section className="gradient-hero relative overflow-hidden py-28 text-center text-white">
      <FloatingOrbs />
      <div className="relative mx-auto max-w-3xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-brand-gold"
        >
          Trusted by {BRAND.users} users and businesses
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-3xl font-bold sm:text-5xl lg:text-6xl"
        >
          Make your brand shine with{" "}
          <span className="gradient-text">Design1123</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10"
        >
          <Button href="#download">Join us today</Button>
        </motion.div>
      </div>
    </section>
  );
}

export function SupportCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="scaleIn">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-light relative overflow-hidden rounded-3xl p-10 text-center shadow-xl lg:p-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl" />
            <SectionHeading
              title="Need a branding guide for your questions?"
              description="The Design1123 support team is here for you—365 days a year, happy to help from 8 AM to 10 PM IST."
            />
            <motion.a
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-block text-2xl font-bold gradient-text sm:text-3xl"
            >
              {BRAND.phone}
            </motion.a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-brand-plum py-24 text-white">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #f5ac11 0%, transparent 50%), radial-gradient(circle at 80% 50%, #e33e0f 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Download our app"
          description="Supercharge your business social branding and unlock phenomenal growth—on Android and iOS."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {["Google Play", "App Store"].map((store, i) => (
            <motion.a
              key={store}
              href="#"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl bg-black/30 px-8 py-4 font-semibold ring-1 ring-white/25 hover:ring-brand-gold hover:shadow-lg hover:shadow-brand-gold/20"
            >
              {store}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
