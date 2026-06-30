"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { 
  Sparkles, Sliders, Zap, Download, 
  Fingerprint, Flame, CalendarPlus, Layout, 
  RefreshCw, Smile 
} from "lucide-react";

export function WhyChoose() {
  const points = [
    { icon: Sparkles, title: "Professional Templates", desc: "Expert layouts designed from the ground up for maximum visual impact." },
    { icon: Sliders, title: "Easy Customization", desc: "Drag, drop, rotate, resize, and edit colors with seamless controls." },
    { icon: Zap, title: "One Click Editing", desc: "Replace photos, logo, and text instantly with single-tap controls." },
    { icon: Download, title: "HD Download", desc: "Export designs in high-resolution suitable for print and social media." },
    { icon: Fingerprint, title: "Custom Branding", desc: "Save your brand logo, name, phone and handle once to auto-inject." },
    { icon: Flame, title: "Fast Performance", desc: "Lightning fast rendering engine guarantees zero waiting time." },
    { icon: CalendarPlus, title: "Daily New Templates", desc: "Never run out of inspiration with brand new templates added daily." },
    { icon: Layout, title: "Modern Interface", desc: "Elegant, clutter-free workspace optimized for quick workflows." },
    { icon: RefreshCw, title: "Regular Updates", desc: "Enjoy new tools, categories, layouts, and feature enhancements weekly." },
    { icon: Smile, title: "Easy To Use", desc: "Built with simplicity at core. Designed for both pros and complete beginners." }
  ];

  return (
    <SectionWrapper id="features" className="bg-bg-dark relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4"
          >
            Core Benefits
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black mb-6"
          >
            Why Choose <span className="text-gradient">Design 1123</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary"
          >
            We take graphic design completely out of the equation, letting you focus on branding.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col items-start gap-4 p-6">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-1 group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-pink group-hover:text-white transition-all duration-300">
                  <pt.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-pink transition-all">
                  {pt.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pt.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
