"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { PlayStoreButton, AppStoreButton } from "./ui/StoreButtons";

export function DownloadSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 animated-gradient-bg opacity-15" />
      <div className="absolute inset-0 bg-bg-dark/85 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <img src="/logo.png" alt="Branding Logo" className="h-16 w-auto object-contain mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-4">
            Get <span className="text-gradient">Design 1123</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base sm:text-lg">
            Choose your mobile platform below to download the application and start creating professional designs in minutes.
          </p>
        </motion.div>

        {/* Separate platform download cards */}
        <div id="get-app" className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto scroll-mt-28">
          {/* Play Store Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center justify-between min-h-[300px] shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
          >
            <div className="flex flex-col items-center w-full">
              <img src="/google-play-logo.png?v=2" className="w-24 h-24 object-contain mb-6" alt="Google Play Logo" />
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Android Version</h3>
            </div>
            <a 
              href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all font-bold text-white uppercase text-xs tracking-wider text-center"
            >
              Get it on Google Play
            </a>
          </motion.div>

          {/* App Store Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center justify-between min-h-[300px] shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-md"
          >
            <div className="flex flex-col items-center w-full">
              <img src="/app-store-logo.png?v=2" className="w-24 h-24 object-contain mb-6" alt="App Store Logo" />
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">iOS Version</h3>
            </div>
            <a 
              href="https://apps.apple.com/in/app/design-1123/id6798540472"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#007aff]/80 hover:bg-[#007aff] border border-white/10 transition-all font-bold text-white uppercase text-xs tracking-wider shadow-[0_4px_20px_rgba(0,122,255,0.3)] text-center"
            >
              Download on App Store
            </a>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <a href="/contact">
            <Button size="lg" variant="outline" className="px-12 py-3.5 text-base">
              Contact Support
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
