"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Smartphone, Pill, Utensils, Hotel, Gem, 
  Cpu, Monitor, Shirt, ShoppingCart, Wrench, 
  Briefcase, HeartPulse 
} from "lucide-react";

export function BusinessShowcase() {
  const cards = [
    { title: "Mobile Zone - Festive Deals", category: "Mobile Shop", gradient: "from-[#FF8A00] to-[#E91E63]", icon: Smartphone },
    { title: "Health First Pharmacy", category: "Medical Store", gradient: "from-[#9C27B0] to-[#7B1FA2]", icon: Pill },
    { title: "Spicy Bistro Gourmet", category: "Restaurant", gradient: "from-[#FF6A00] to-[#F44336]", icon: Utensils },
    { title: "Grand Palace & Spa", category: "Hotel", gradient: "from-[#C2185B] to-[#9C27B0]", icon: Hotel },
    { title: "Glow & Carats Jewellers", category: "Jewellery", gradient: "from-[#FF8A00] to-[#7B1FA2]", icon: Gem },
    { title: "Prime Tech Electronics", category: "Electronics", gradient: "from-[#E91E63] to-[#C2185B]", icon: Cpu },
    { title: "NextGen Computer Services", category: "Computer Shop", gradient: "from-[#FF6A00] to-[#9C27B0]", icon: Monitor },
    { title: "Urban Fit Apparel Store", category: "Fashion", gradient: "from-[#F44336] to-[#E91E63]", icon: Shirt },
    { title: "Mega Mart Supermarket", category: "Super Market", gradient: "from-[#FF8A00] to-[#FF6A00]", icon: ShoppingCart },
    { title: "Builders Hardwares & Tools", category: "Hardware", gradient: "from-[#9C27B0] to-[#7B1FA2]", icon: Wrench },
    { title: "Apex Creative Agency", category: "Agency", gradient: "from-[#E91E63] to-[#FF8A00]", icon: Briefcase },
    { title: "Care Plus Family Clinic", category: "Clinic / Hospital", gradient: "from-[#F44336] to-[#C2185B]", icon: HeartPulse }
  ];

  return (
    <SectionWrapper id="business-templates" className="bg-bg-dark border-b border-border-glass relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Section 5</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
            Business <span className="text-gradient">Template Showcase</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Boost your sales and professional digital presence with ready-to-use retail, service, and brand templates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-orange/30 transition-all duration-300"
            >
              {/* Fake template preview body */}
              <div className={`w-full aspect-[4/3] bg-gradient-to-tr ${item.gradient} p-5 flex flex-col justify-between relative`}>
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                
                {/* Logo badge inside template */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[9px] bg-black/40 px-2 py-0.5 rounded-full text-white font-bold tracking-wider">OFFER</span>
                </div>
                
                {/* Template main text */}
                <div className="space-y-1 z-10">
                  <h3 className="text-white font-heading font-black text-lg md:text-xl leading-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-white/60 rounded" />
                </div>

                {/* Footer simulation */}
                <div className="flex justify-between items-center text-[9px] text-white/80 z-10 pt-2 border-t border-white/10">
                  <span>📞 +91 98765 43210</span>
                  <span>📍 Main Market Road</span>
                </div>
              </div>

              {/* Card info header */}
              <div className="p-4 bg-bg-card/90 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-white">{item.category}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">Editable template</p>
                </div>
                <span className="text-xs text-brand-orange font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Edit →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
