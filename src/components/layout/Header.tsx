"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "border-b border-white/10 bg-brand-ink/95 py-2 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <motion.div whileHover={{ rotate: [-3, 3, 0], scale: 1.05 }} transition={{ duration: 0.4 }}>
            <Image
              src="/logo.png"
              alt={BRAND.name}
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
          </motion.div>
          <span className="text-lg font-bold tracking-tight text-white transition group-hover:text-brand-gold">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={link.href}
                className="relative text-sm font-medium text-white/75 transition hover:text-brand-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-300 group-hover:w-full hover:w-full peer-focus:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          {/* <Button variant="ghost" href="#pricing" className="!px-4 !py-2">
            Log in
          </Button> */}
          <Button href="#download" className="!px-5 !py-2.5">
            Get the app
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-brand-ink lg:hidden"
          >
            <nav className="flex flex-col gap-3 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 transition hover:text-brand-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="#download" className="mt-2 w-full justify-center">
                Get the app
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
