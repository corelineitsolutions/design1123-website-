"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BRAND, footerLinks, industries } from "@/lib/data";
import { Reveal } from "@/components/ui/motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <Reveal>
            <Link href="/" className="flex items-center gap-3">
              <motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
                <Image src="/logo.png" alt={BRAND.name} width={48} height={48} />
              </motion.div>
              <span className="text-xl font-bold text-white">{BRAND.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A social branding studio that helps you create and share stunning visual
              content—with your logo, colors, and voice—across every channel your
              customers use.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h4 className="font-semibold text-white">Useful links</h4>
            <ul className="mt-4 grid gap-2 text-sm">
              {footerLinks.useful.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block transition hover:translate-x-1 hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h4 className="font-semibold text-white">Legal & more</h4>
            <ul className="mt-4 grid gap-2 text-sm">
              {footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-brand-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h4 className="font-semibold text-white">Contact us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="hover:text-brand-gold">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-brand-gold">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-12 border-t border-white/10 pt-8">
          <h4 className="text-sm font-semibold text-white">Industries we serve</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {industries.slice(0, 12).map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(245,172,17,0.5)" }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <span className="hidden text-white/20 sm:inline">|</span>
          <div className="flex gap-4 text-xs">
            <Link href="/privacy" className="text-white/50 hover:text-brand-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-brand-gold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
