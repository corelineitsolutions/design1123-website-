"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Building2, Phone, MessageSquare, MapPin, 
  Globe, Mail, QrCode, Share2, ShieldCheck, Sparkles 
} from "lucide-react";

export function CustomFooterFeature() {
  const footerFields = [
    { label: "Business Logo", icon: Building2 },
    { label: "Phone Number", icon: Phone },
    { label: "WhatsApp Chat", icon: MessageSquare },
    { label: "Store Address", icon: MapPin },
    { label: "Website URL", icon: Globe },
    { label: "Email Address", icon: Mail },
    { label: "QR Code Scan", icon: QrCode },
    { label: "Social Handles", icon: Share2 }
  ];

  return (
    <SectionWrapper id="custom-footer" className="bg-[#101010] border-b border-border-glass relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="absolute -left-20 top-1/4 w-[400px] h-[400px] bg-brand-orange/15 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy and Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-pink">Section 8: Unique Feature</span>
              <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight text-white">
                Set It Once. <br />
                <span className="text-gradient">Auto-Applied Everywhere.</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Stop typing your business details every single time you edit a template. Create your professional branding footer once, and Design 1123 will automatically inject it at the bottom of every flyer, invitation, and poster you export.
              </p>
            </div>

            {/* Fields list */}
            <div className="grid grid-cols-2 gap-4">
              {footerFields.map((field, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <field.icon className="w-4 h-4 text-brand-orange" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{field.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-brand-orange font-bold uppercase">
              <ShieldCheck className="w-5 h-5" />
              <span>Perfect brand consistency across all graphics</span>
            </div>
          </div>

          {/* Right Side: Visual Synchronization Animation */}
          <div className="relative h-[480px] w-full flex items-center justify-center bg-bg-card/40 border border-white/5 rounded-3xl p-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-brand-purple/5 opacity-50" />
            
            {/* Stamp Animation visualizer */}
            <div className="flex flex-col gap-6 w-full max-w-[360px] relative">
              
              {/* Footer Source Block */}
              <motion.div 
                className="bg-bg-dark border border-brand-orange/40 rounded-2xl p-4 shadow-xl z-20"
                animate={{
                  boxShadow: ["0 0 15px rgba(255,138,0,0.1)", "0 0 25px rgba(255,138,0,0.3)", "0 0 15px rgba(255,138,0,0.1)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-2">
                  <img src="/logo.png" alt="Logo" className="h-4 w-auto object-contain" />
                  <span className="text-[10px] font-black uppercase text-brand-orange tracking-wider">Your Brand Profile Footer</span>
                </div>
                {/* Simulated fields */}
                <div className="flex justify-between items-center text-[9px] text-white">
                  <span>📞 +91 99999 88888</span>
                  <span>📍 New Delhi, India</span>
                  <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center text-[7px]">QR</div>
                </div>
              </motion.div>

              {/* Syncing lines animation */}
              <div className="flex justify-around relative h-8 w-full">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-gradient-to-b from-brand-orange to-brand-pink"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "100%", opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>

              {/* Multiple Template Previews receiving the footer */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Retail Poster", grad: "from-[#FF8A00] to-[#E91E63]" },
                  { name: "Political Flyer", grad: "from-[#9C27B0] to-[#7B1FA2]" },
                  { name: "Festival Greeting", grad: "from-[#FF6A00] to-[#F44336]" }
                ].map((tpl, i) => (
                  <div key={i} className="glass-card aspect-[3/4] p-2 flex flex-col justify-between overflow-hidden relative group">
                    <div className={`w-full h-[60%] bg-gradient-to-tr ${tpl.grad} rounded-lg flex items-center justify-center`}>
                      <span className="text-[8px] font-heading font-black text-white text-center">{tpl.name}</span>
                    </div>

                    {/* Stamped Brand profile animation */}
                    <motion.div 
                      className="border-t border-brand-orange/30 pt-1.5 mt-2 text-[6px] text-white/90"
                      initial={{ opacity: 0.2, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      animate={{
                        borderColor: ["rgba(255,255,255,0.08)", "rgba(255,138,0,0.5)", "rgba(255,255,255,0.08)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <div className="flex justify-between items-center scale-90">
                        <span>📞 +91 99...</span>
                        <span>📍 Delhi</span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
