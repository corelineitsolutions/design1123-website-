"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Smartphone, Pill, Utensils, Gem, 
  Cpu, Shirt, ShoppingCart, Wrench, 
  HeartPulse 
} from "lucide-react";

export function BusinessShowcase() {
  const cards = [
    { 
      title: "Mobile Zone - Festive Deals", 
      category: "Mobile Shop", 
      icon: Smartphone,
      imageUrl: "/templates/business/mobile-shop.jpeg"
    },
    { 
      title: "Health First Pharmacy", 
      category: "Medical Store", 
      icon: Pill,
      imageUrl: "/templates/business/medical-store.jpeg"
    },
    { 
      title: "Spicy Bistro Gourmet", 
      category: "Restaurant", 
      icon: Utensils,
      imageUrl: "/templates/business/restaurant.jpeg"
    },
    { 
      title: "Glow & Carats Jewellers", 
      category: "Jewellery", 
      icon: Gem,
      imageUrl: "/templates/business/jewellery.jpeg"
    },
    { 
      title: "Prime Tech Electronics", 
      category: "Electronics", 
      icon: Cpu,
      imageUrl: "/templates/business/electronics.jpeg"
    },
    { 
      title: "Urban Fit Apparel Store", 
      category: "Fashion", 
      icon: Shirt,
      imageUrl: "/templates/business/clothing.jpeg"
    },
    { 
      title: "Mega Mart Supermarket", 
      category: "Super Market", 
      icon: ShoppingCart,
      imageUrl: "/templates/business/supermarket.jpeg"
    },
    { 
      title: "Builders Hardwares & Tools", 
      category: "Hardware", 
      icon: Wrench,
      imageUrl: "/templates/business/hardware.jpeg"
    },
    { 
      title: "Care Plus Family Clinic", 
      category: "Clinic / Hospital", 
      icon: HeartPulse,
      imageUrl: "/templates/business/hospital.jpeg"
    }
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

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {cards.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-orange/30 transition-all duration-300"
            >
              {/* Real app template screenshot */}
              <div className="w-full aspect-[4/3] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card info header */}
              <div className="p-2 sm:p-4 bg-bg-card/90 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="hidden sm:flex w-7 h-7 rounded-full bg-white/10 items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[8px] sm:text-sm text-white truncate">{item.category}</h4>
                    <p className="hidden sm:block text-xs text-text-secondary mt-0.5 truncate">{item.title}</p>
                  </div>
                </div>
                <span className="text-[8px] sm:text-xs text-brand-orange font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">Edit →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
