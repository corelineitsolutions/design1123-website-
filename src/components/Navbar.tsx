"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Categories", href: "#categories" },
    { name: "Templates", href: "#showcases" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-[#09090b]/80 backdrop-blur-xl border-b border-border-glass" : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Design 1123 Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="relative font-heading font-black text-2xl tracking-tighter text-white">
            Design <span className="text-gradient">1123</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-orange to-brand-pink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden xl:block">
          <a href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="md">
              Download App
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden fixed inset-0 top-[72px] bg-bg-dark/95 backdrop-blur-xl z-40 flex flex-col p-6 gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-white border-b border-border-glass pb-4"
            >
              {link.name}
            </a>
          ))}
          <a href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN" target="_blank" rel="noopener noreferrer" className="w-full mt-8 block">
            <Button variant="primary" size="lg" className="w-full">
              Download App
            </Button>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
