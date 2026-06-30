"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Award, Paintbrush, Sparkles, Layers } from "lucide-react";

export function AboutSection() {
  const points = [
    {
      icon: Paintbrush,
      title: "No Design Skills Needed",
      desc: "Simply choose a template, replace text, upload photos, and you're done. Anyone can design.",
    },
    {
      icon: Layers,
      title: "Ready-To-Use Templates",
      desc: "Thousands of pre-made templates crafted by professional graphic designers for every occasion.",
    },
    {
      icon: Sparkles,
      title: "Complete Personalization",
      desc: "Easily add your logo, address, contact info, and custom branding fonts in seconds.",
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-[#101010] border-b border-border-glass overflow-hidden relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Animated Illustration Graphic */}
          <div className="relative h-[480px] w-full flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-brand-pink to-brand-purple blur-[80px] opacity-20 rounded-full" />
            
            {/* Graphic Stack Container */}
            <div className="relative w-[340px] h-[340px]">
              
              {/* Card 1: Bottom Base Template */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30, rotate: -6 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-[#171717] rounded-3xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <img src="/logo.png" alt="App Logo" className="h-10 w-auto object-contain" />
                  <div className="w-16 h-3 bg-white/10 rounded" />
                </div>
                <div className="space-y-3">
                  <div className="w-full h-4 bg-white/10 rounded" />
                  <div className="w-2/3 h-4 bg-white/10 rounded" />
                </div>
                <div className="w-full h-32 bg-gradient-to-tr from-brand-orange/20 to-brand-pink/20 rounded-2xl" />
              </motion.div>

              {/* Card 2: Mid Customizer overlay */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20, rotate: 6 }}
                whileInView={{ opacity: 1, x: 20, y: -20, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 bg-[#222226]/90 backdrop-blur-md rounded-3xl border border-brand-pink/30 shadow-2xl p-6 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-pink/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-brand-pink" />
                  </div>
                  <div className="w-24 h-3 bg-white/20 rounded" />
                </div>
                <div className="w-full h-36 bg-gradient-to-tr from-brand-pink/30 to-brand-purple/30 rounded-2xl flex items-center justify-center">
                  <span className="text-xs font-bold text-white tracking-widest uppercase">Tap to Customize</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-12 h-6 bg-brand-purple/35 rounded-full" />
                  <div className="w-12 h-6 bg-brand-pink rounded-full flex items-center justify-center text-[10px] font-bold">Apply</div>
                </div>
              </motion.div>

              {/* Float Element: Text Layer */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute left-6 bottom-4 bg-[#171717] border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-3 z-30"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-white">Logo Auto-Applied</span>
              </motion.div>

              {/* Float Element: Photo Swap */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -50 }}
                whileInView={{ scale: 1, opacity: 1, y: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute right-4 top-10 bg-brand-orange border border-brand-orange/20 rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-2.5 z-30"
              >
                <span className="text-xs font-bold text-white">1-Click Swap Photo</span>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Professional Designing Made Simple</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight text-white">
                Create Stunning Banners <br />
                <span className="text-gradient">Without Design Skills.</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Design 1123 bridges the gap between complex graphic software and quick, high-quality results. Whether you're promoting a retail business, leading an election campaign, or sharing birthday wishes, get pixel-perfect exports ready to post immediately.
              </p>
            </div>

            <div className="space-y-6">
              {points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <pt.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{pt.title}</h3>
                    <p className="text-sm text-text-secondary mt-1">{pt.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
