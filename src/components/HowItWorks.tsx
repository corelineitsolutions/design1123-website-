"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { ListFilter, LayoutGrid, Sliders, DownloadCloud } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Category",
      desc: "Open the app and select your template niche (business, festival, political, personal wishes).",
      icon: ListFilter,
      color: "from-brand-orange to-brand-deep-orange"
    },
    {
      step: "02",
      title: "Select Template",
      desc: "Browse through thousands of pre-made layouts designed by graphic design experts.",
      icon: LayoutGrid,
      color: "from-[#F44336] to-[#E91E63]"
    },
    {
      step: "03",
      title: "Customize & Personalize",
      desc: "Enter your brand logo, name, addresses, and images. The smart editor handles layout constraints.",
      icon: Sliders,
      color: "from-[#C2185B] to-[#9C27B0]"
    },
    {
      step: "04",
      title: "Download & Share",
      desc: "Export instantly in crisp HD quality and publish directly on all social media platforms.",
      icon: DownloadCloud,
      color: "from-[#9C27B0] to-[#7B1FA2]"
    }
  ];

  return (
    <SectionWrapper id="how-it-works" className="bg-[#101010] border-b border-border-glass relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-purple/15 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-pink">Section 10</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
            Simple 4-Step <span className="text-gradient">Design Workflow</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Get your customized high-fidelity graphics ready in less than 2 minutes. No design skills required.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Connector Line for Desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple -translate-y-1/2 hidden lg:block z-0 opacity-20" />
          
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col items-center text-center space-y-6 z-10 group"
            >
              {/* Step indicator circle */}
              <div className="relative">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${item.color} p-0.5 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center text-white">
                    <item.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                {/* Floating number badge */}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-pink border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  {item.step}
                </span>
              </div>

              <div className="space-y-2 max-w-xs">
                <h3 className="text-xl font-heading font-black text-white group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
