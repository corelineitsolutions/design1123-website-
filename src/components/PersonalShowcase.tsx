"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Gift, Heart, Star, Cake, Home, 
  Mail, Calendar, Sparkles, Smile, ShieldAlert 
} from "lucide-react";

export function PersonalShowcase() {
  const cards = [
    { title: "Happy Birthday Rohan!", category: "Birthday Wishes", gradient: "from-[#F44336] to-[#E91E63]", icon: Gift },
    { title: "Aarav & Meera's Wedding", category: "Wedding Invitation", gradient: "from-[#9C27B0] to-[#C2185B]", icon: Heart },
    { title: "25 Years of Togetherness", category: "Anniversary Greeting", gradient: "from-[#7B1FA2] to-[#FF8A00]", icon: Star },
    { title: "Welcome Baby Shower Celebration", category: "Baby Shower Flyer", gradient: "from-[#FF6A00] to-[#E91E63]", icon: Cake },
    { title: "New Home Housewarming", category: "Housewarming Invite", gradient: "from-[#FF8A00] to-[#F44336]", icon: Home },
    { title: "Special Event Celebration", category: "Invitation Card", gradient: "from-[#9C27B0] to-[#7B1FA2]", icon: Mail },
    { title: "Vibrant Diwali Greetings", category: "Festival Wishes", gradient: "from-[#FF8A00] to-[#E91E63]", icon: Sparkles },
    { title: "Gratitude & Thank You", category: "Thank You Note", gradient: "from-[#C2185B] to-[#7B1FA2]", icon: Smile },
    { title: "Annual Family Gathering", category: "Family Events", gradient: "from-[#FF6A00] to-[#9C27B0]", icon: Calendar }
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className={`w-full aspect-[16/10] bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between relative`}>
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300" />
                
                {/* Logo badge inside template */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] bg-white/25 px-2 py-0.5 rounded-full text-white font-bold tracking-wider">CELEBRATE</span>
                </div>
                
                {/* Template main text */}
                <div className="space-y-2 z-10">
                  <h3 className="text-white font-heading font-black text-xl md:text-2xl leading-tight text-shadow">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-white rounded" />
                </div>

                {/* Footer simulation */}
                <div className="flex justify-between items-center text-[10px] text-white/95 z-10 pt-2 border-t border-white/10 font-bold">
                  <span>📅 Sunday, Dec 20</span>
                  <span>📍 Emerald Banquet Hall</span>
                </div>
              </div>

              {/* Card info header */}
              <div className="p-4 bg-bg-card/90 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-white">{item.category}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">Editable template</p>
                </div>
                <span className="text-xs text-brand-pink font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Customize →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
