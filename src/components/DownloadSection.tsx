"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function DownloadSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 animated-gradient-bg opacity-15" />
      <div className="absolute inset-0 bg-bg-dark/85 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto glass-card p-6 sm:p-12 md:p-20 text-center rounded-3xl sm:rounded-[3rem] border border-white/20 shadow-[0_0_100px_rgba(255,106,0,0.25)]"
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <img src="/logo.png" alt="Branding Logo" className="h-16 w-auto object-contain" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Start Creating Beautiful <br className="hidden md:block" />
            <span className="text-gradient">Designs Today.</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of users creating professional designs with Design 1123. Download now and start branding your vision.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full px-12 py-5 text-lg">
                Download App
              </Button>
            </a>
            <a href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-12 py-5 text-lg">
                Contact Us
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
