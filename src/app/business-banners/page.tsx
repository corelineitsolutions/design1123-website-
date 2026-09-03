"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BusinessBanners() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-bg-dark text-white">
      <Navbar />

      <div className="w-full relative pt-32 pb-20 overflow-hidden border-b border-border-glass bg-bg-section/50">
        <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center min-h-[40vh] justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 leading-tight">
              Business <span className="text-gradient">Banners</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8">
              Coming Soon. Explore professional templates for your business and enterprise needs.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
