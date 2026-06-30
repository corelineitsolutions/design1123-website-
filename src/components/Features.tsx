"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  MousePointer2, LayoutTemplate, Type, Image as ImageIcon, 
  Layers, Smartphone, Globe, Share2, 
  DownloadCloud, PaintBucket, Lock, Zap 
} from "lucide-react";

const features = [
  { icon: MousePointer2, title: "Drag & Drop", desc: "Intuitively place elements anywhere on the canvas with perfect precision." },
  { icon: LayoutTemplate, title: "1000+ Templates", desc: "Start instantly with professionally designed layouts for any use case." },
  { icon: Type, title: "Custom Typography", desc: "Upload your own fonts or choose from thousands of web fonts." },
  { icon: ImageIcon, title: "Asset Library", desc: "Access millions of royalty-free images, icons, and illustrations." },
  { icon: Layers, title: "Advanced Layering", desc: "Manage complex designs with a Photoshop-like layers panel." },
  { icon: Smartphone, title: "Auto-Responsive", desc: "Designs automatically adapt to mobile, tablet, and desktop screens." },
  { icon: Globe, title: "One-Click Publish", desc: "Host your templates instantly or embed them anywhere." },
  { icon: Share2, title: "Real-time Collab", desc: "Work together with your team simultaneously on the same design." },
  { icon: DownloadCloud, title: "HD Exports", desc: "Export designs in PDF, PNG, JPG, or clean HTML/CSS code." },
  { icon: PaintBucket, title: "Global Colors", desc: "Change one color and see it update across your entire template." },
  { icon: Lock, title: "Brand Assets", desc: "Lock down brand colors, logos, and fonts for team consistency." },
  { icon: Zap, title: "Lightning Fast", desc: "Built on a high-performance rendering engine with zero lag." },
];

export function Features() {
  return (
    <SectionWrapper id="features" className="bg-bg-dark relative">
      <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4"
          >
            Powerful Editor
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black mb-6"
          >
            Design without <span className="text-gradient">Limits</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-2 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-pink transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
