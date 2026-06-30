"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";

export function ProductShowcase() {
  return (
    <SectionWrapper id="solutions" className="bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4"
          >
            Seamless Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black mb-6"
          >
            Design on <span className="text-gradient">Every Device</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-light"
          >
            Create, edit, and publish templates from your Phone, Tablet, Laptop, or Desktop.
          </motion.p>
        </div>

        <div className="relative h-[600px] md:h-[800px] flex items-center justify-center">
          {/* Desktop/Laptop Mockup (Center/Back) */}
          <motion.div
            className="absolute top-0 w-full max-w-4xl aspect-[16/10] bg-gray-900 rounded-2xl border-4 border-gray-800 shadow-2xl z-10 overflow-hidden"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="h-6 bg-gray-800 w-full flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="w-full h-[calc(100%-24px)] bg-gradient-to-br from-bg-dark to-brand-purple/20 p-8 relative noise-bg">
               {/* UI Mockup Details for Builder */}
               <div className="h-full border border-white/10 rounded-xl bg-bg-card/50 backdrop-blur flex">
                 <div className="w-16 border-r border-white/10 p-4 space-y-4 flex flex-col items-center">
                   {[1,2,3,4,5].map(i => <div key={i} className="h-6 w-6 bg-white/5 rounded" />)}
                 </div>
                 <div className="flex-1 p-6 flex items-center justify-center relative">
                   <div className="w-64 h-80 bg-white shadow-2xl rounded rotate-3 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-purple/20" />
                      <div className="w-32 h-4 bg-gray-200 rounded" />
                   </div>
                   <div className="w-64 h-80 bg-white shadow-2xl rounded -rotate-6 -ml-10 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/20 to-brand-orange/20" />
                      <div className="w-20 h-20 bg-gray-200 rounded-full" />
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Tablet Mockup (Left/Middle) */}
          <motion.div
            className="absolute left-0 md:left-[10%] bottom-32 md:bottom-20 w-48 md:w-80 aspect-[3/4] bg-gray-900 rounded-3xl border-[8px] border-gray-800 shadow-2xl z-20 overflow-hidden"
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            whileHover={{ y: -20, rotate: 0 }}
          >
            <div className="w-full h-full bg-gradient-to-tr from-brand-orange to-brand-pink p-4 noise-bg">
              <div className="h-full w-full bg-bg-dark/90 rounded-xl border border-white/20 p-4 flex flex-col items-center justify-center">
                <div className="w-3/4 aspect-square bg-white rounded-lg shadow-xl rotate-6" />
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup (Right/Front) */}
          <motion.div
            className="absolute right-0 md:right-[15%] bottom-10 md:bottom-0 w-40 md:w-64 aspect-[9/19] bg-gray-900 rounded-[2.5rem] border-[10px] border-gray-800 shadow-2xl z-30 overflow-hidden"
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            whileHover={{ y: -20, rotate: 0 }}
          >
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-2xl w-1/2 mx-auto z-10" />
            <div className="w-full h-full bg-bg-dark relative overflow-hidden noise-bg">
              <div className="absolute inset-0 animated-gradient-bg opacity-30" />
              <div className="relative z-10 p-4 pt-12 space-y-4 flex flex-col items-center h-full">
                <div className="w-full h-3/4 bg-white rounded-xl shadow-2xl" />
                <div className="flex gap-2 w-full justify-center">
                   <div className="w-8 h-8 rounded-full bg-white/20" />
                   <div className="w-8 h-8 rounded-full bg-white/20" />
                   <div className="w-8 h-8 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
