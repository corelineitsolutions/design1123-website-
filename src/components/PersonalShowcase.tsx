"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Gift, Heart, Star, Cake, Home, 
  Mail, Calendar, Sparkles, Smile, ShieldAlert 
} from "lucide-react";

export function PersonalShowcase() {
  const cards = [
    { 
      title: "Happy Birthday Rohan!", 
      category: "Birthday Wishes", 
      gradient: "from-[#F44336] to-[#E91E63]", 
      icon: Gift,
      imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Aarav & Meera's Wedding", 
      category: "Wedding Invitation", 
      gradient: "from-[#9C27B0] to-[#C2185B]", 
      icon: Heart,
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "25 Years of Togetherness", 
      category: "Anniversary Greeting", 
      gradient: "from-[#7B1FA2] to-[#FF8A00]", 
      icon: Star,
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Welcome Baby Shower Celebration", 
      category: "Baby Shower Flyer", 
      gradient: "from-[#FF6A00] to-[#E91E63]", 
      icon: Cake,
      imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77ebe?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "New Home Housewarming", 
      category: "Housewarming Invite", 
      gradient: "from-[#FF8A00] to-[#F44336]", 
      icon: Home,
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Special Event Celebration", 
      category: "Invitation Card", 
      gradient: "from-[#9C27B0] to-[#7B1FA2]", 
      icon: Mail,
      imageUrl: "https://images.unsplash.com/photo-1507504038482-7621c5b4dff1?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Vibrant Diwali Greetings", 
      category: "Festival Wishes", 
      gradient: "from-[#FF8A00] to-[#E91E63]", 
      icon: Sparkles,
      imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Gratitude & Thank You", 
      category: "Thank You Note", 
      gradient: "from-[#C2185B] to-[#7B1FA2]", 
      icon: Smile,
      imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=80"
    },
    { 
      title: "Annual Family Gathering", 
      category: "Family Events", 
      gradient: "from-[#FF6A00] to-[#9C27B0]", 
      icon: Calendar,
      imageUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&auto=format&fit=crop&q=80"
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
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-pink/30 transition-all duration-300"
            >
              {/* Fake template preview body */}
              <div className="w-full aspect-[16/10] p-2.5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
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
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-[6px] sm:text-[10px] bg-white/25 px-1 sm:px-2 py-0.5 rounded-full text-white font-bold tracking-wider">CELEBRATE</span>
                </div>
                
                {/* Template main text */}
                <div className="space-y-0.5 sm:space-y-2 z-10">
                  <h3 className="text-white font-heading font-black text-[7px] sm:text-xl md:text-2xl leading-tight text-shadow">
                    {item.title}
                  </h3>
                  <div className="w-6 h-0.5 sm:w-16 sm:h-1 bg-white rounded" />
                </div>

                {/* Footer simulation */}
                <div className="hidden sm:flex justify-between items-center text-[10px] text-white/95 z-10 pt-2 border-t border-white/10 font-bold">
                  <span>📅 Sunday, Dec 20</span>
                  <span>📍 Emerald Banquet Hall</span>
                </div>
              </div>

              {/* Card info header */}
              <div className="p-2 sm:p-4 bg-bg-card/90 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-[8px] sm:text-sm text-white truncate max-w-[65px] sm:max-w-none">{item.category}</h4>
                  <p className="hidden sm:block text-xs text-text-secondary mt-0.5">Editable template</p>
                </div>
                <span className="text-[8px] sm:text-xs text-brand-pink font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Customize →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
