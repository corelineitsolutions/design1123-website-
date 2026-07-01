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
    { 
      title: "Mobile Zone - Festive Deals", 
      category: "Mobile Shop", 
      gradient: "from-[#FF8A00] to-[#E91E63]", 
      icon: Smartphone,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Health First Pharmacy", 
      category: "Medical Store", 
      gradient: "from-[#9C27B0] to-[#7B1FA2]", 
      icon: Pill,
      imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Spicy Bistro Gourmet", 
      category: "Restaurant", 
      gradient: "from-[#FF6A00] to-[#F44336]", 
      icon: Utensils,
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Grand Palace & Spa", 
      category: "Hotel", 
      gradient: "from-[#C2185B] to-[#9C27B0]", 
      icon: Hotel,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Glow & Carats Jewellers", 
      category: "Jewellery", 
      gradient: "from-[#FF8A00] to-[#7B1FA2]", 
      icon: Gem,
      imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Prime Tech Electronics", 
      category: "Electronics", 
      gradient: "from-[#E91E63] to-[#C2185B]", 
      icon: Cpu,
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "NextGen Computer Services", 
      category: "Computer Shop", 
      gradient: "from-[#FF6A00] to-[#9C27B0]", 
      icon: Monitor,
      imageUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Urban Fit Apparel Store", 
      category: "Fashion", 
      gradient: "from-[#F44336] to-[#E91E63]", 
      icon: Shirt,
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Mega Mart Supermarket", 
      category: "Super Market", 
      gradient: "from-[#FF8A00] to-[#FF6A00]", 
      icon: ShoppingCart,
      imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Builders Hardwares & Tools", 
      category: "Hardware", 
      gradient: "from-[#9C27B0] to-[#7B1FA2]", 
      icon: Wrench,
      imageUrl: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Apex Creative Agency", 
      category: "Agency", 
      gradient: "from-[#E91E63] to-[#FF8A00]", 
      icon: Briefcase,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Care Plus Family Clinic", 
      category: "Clinic / Hospital", 
      gradient: "from-[#F44336] to-[#C2185B]", 
      icon: HeartPulse,
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80"
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

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
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
              <div className="w-full aspect-[4/3] p-2.5 sm:p-5 flex flex-col justify-between relative overflow-hidden">
                {/* Background image from internet */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Color tint overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${item.gradient} opacity-30 mix-blend-multiply`} />
                {/* Dark readable overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Logo badge inside template */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-[6px] sm:text-[9px] bg-black/40 px-1 sm:px-2 py-0.5 rounded-full text-white font-bold tracking-wider">OFFER</span>
                </div>
                
                {/* Template main text */}
                <div className="space-y-0.5 sm:space-y-1 z-10">
                  <h3 className="text-white font-heading font-black text-[7px] sm:text-lg md:text-xl leading-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                    {item.title}
                  </h3>
                  <div className="w-6 h-0.5 sm:w-12 sm:h-1 bg-white/60 rounded" />
                </div>

                {/* Footer simulation */}
                <div className="hidden sm:flex justify-between items-center text-[9px] text-white/80 z-10 pt-2 border-t border-white/10">
                  <span>📞 +91 8261090881</span>
                  <span>📍 Main Market Road</span>
                </div>
              </div>

              {/* Card info header */}
              <div className="p-2 sm:p-4 bg-bg-card/90 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-[8px] sm:text-sm text-white truncate max-w-[65px] sm:max-w-none">{item.category}</h4>
                  <p className="hidden sm:block text-xs text-text-secondary mt-0.5">Editable template</p>
                </div>
                <span className="text-[8px] sm:text-xs text-brand-orange font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Edit →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
