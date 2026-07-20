"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Gift, Heart, Sun, Moon, Star, 
  Sparkles, Flower2, Quote, Flame 
} from "lucide-react";

export function PersonalShowcase() {
  const cards = [
    { 
      title: "Happy Birthday Wishes", 
      category: "Birthday Wishes", 
      icon: Gift,
      imageUrl: "/templates/personal/birthday-wishes.jpeg"
    },
    { 
      title: "Anniversary Celebration", 
      category: "Anniversary Wishes", 
      icon: Heart,
      imageUrl: "/templates/personal/anniversary-wishes.jpeg"
    },
    { 
      title: "Good Morning Greetings", 
      category: "Good Morning", 
      icon: Sun,
      imageUrl: "/templates/personal/good-morning.jpeg"
    },
    { 
      title: "Good Night Blessings", 
      category: "Good Night", 
      icon: Moon,
      imageUrl: "/templates/personal/good-night.jpeg"
    },
    { 
      title: "Islamic Greeting Card", 
      category: "Islamic", 
      icon: Star,
      imageUrl: "/templates/personal/islamic.jpeg"
    },
    { 
      title: "Mahadev Devotional", 
      category: "Mahadev Devotional", 
      icon: Sparkles,
      imageUrl: "/templates/personal/mahadev-devotional.jpeg"
    },
    { 
      title: "Babasaheb Ambedkar Tribute", 
      category: "Babasaheb Ambedkar", 
      icon: Flower2,
      imageUrl: "/templates/personal/babasaheb-ambedkar.jpeg"
    },
    { 
      title: "Motivational Thoughts", 
      category: "Motivational Thoughts", 
      icon: Quote,
      imageUrl: "/templates/personal/motivational-thoughts.jpeg"
    },
    { 
      title: "Shraddhanjali Remembrance", 
      category: "Shraddhanjali", 
      icon: Flame,
      imageUrl: "/templates/personal/shraddhanjali.jpeg"
    }
  ];

  return (
    <SectionWrapper id="personal-templates" className="bg-[#101010] border-b border-border-glass relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Section 6</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
            Personal <span className="text-gradient">Template Showcase</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Celebrate, invite, and share joy with fully customizable family, wedding, and greeting designs.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {cards.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-pink/30 transition-all duration-300"
            >
              {/* Real app template screenshot */}
              <div className="w-full aspect-[16/10] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
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
                    <item.icon className="w-3.5 h-3.5 text-brand-pink" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[8px] sm:text-sm text-white truncate">{item.category}</h4>
                    <p className="hidden sm:block text-xs text-text-secondary mt-0.5 truncate">{item.title}</p>
                  </div>
                </div>
                <span className="text-[8px] sm:text-xs text-brand-pink font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">Customize →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
