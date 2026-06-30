"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  UserCheck, Megaphone, Vote, Users, Flag, 
  Smile, Award, HeartHandshake, ClipboardList, Target 
} from "lucide-react";

export function PoliticalShowcase() {
  const cards = [
    { title: "Warm Birthday Wishes", subtitle: "To Our Leader", category: "Leader Birthday", gradient: "from-[#FF8A00] to-[#F44336]", icon: UserCheck },
    { title: "Public Meeting Agenda", subtitle: "Join us this Friday", category: "Public Meetings", gradient: "from-[#9C27B0] to-[#E91E63]", icon: Megaphone },
    { title: "Vote For Development", subtitle: "Elect Candidate", category: "Election Templates", gradient: "from-[#FF6A00] to-[#7B1FA2]", icon: Vote },
    { title: "Meet Your MLA", subtitle: "Introduction Banner", category: "Leader Introduction", gradient: "from-[#C2185B] to-[#9C27B0]", icon: Users },
    { title: "Happy Independence Day", subtitle: "Festival Greetings", category: "Festival Greetings", gradient: "from-[#FF8A00] to-[#7B1FA2]", icon: Flag },
    { title: "Key Achievements & Goals", subtitle: "Platform Report", category: "Achievement Posters", gradient: "from-[#E91E63] to-[#FF6A00]", icon: Award },
    { title: "Join The Volunteer Wave", subtitle: "Membership Drive", category: "Volunteer Campaign", gradient: "from-[#F44336] to-[#7B1FA2]", icon: HeartHandshake },
    { title: "Digital Campaign Launch", subtitle: "Press Conference", category: "Press Meet", gradient: "from-[#9C27B0] to-[#FF8A00]", icon: ClipboardList },
    { title: "Government Welfare Scheme", subtitle: "Public Awareness", category: "Government Scheme", gradient: "from-[#C2185B] to-[#F44336]", icon: Target }
  ];

  return (
    <SectionWrapper id="political-templates" className="bg-bg-dark border-b border-border-glass relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Section 7</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
            Political <span className="text-gradient">Template Showcase</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Empower your political campaigns, public gatherings, leadership updates, and community scheme posters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-purple/30 transition-all duration-300"
            >
              {/* Fake template preview body */}
              <div className={`w-full aspect-[16/10] bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between relative`}>
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300" />
                
                {/* Header elements inside template */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[9px] bg-black/55 px-2.5 py-0.5 rounded-full text-white font-bold tracking-wider flex items-center gap-1.5">
                    <item.icon className="w-3 h-3 text-brand-orange" />
                    CAMPAIGN
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-white text-xs">
                    ★
                  </div>
                </div>
                
                {/* Template main text */}
                <div className="space-y-1 z-10">
                  <p className="text-xs uppercase font-bold text-white/80 tracking-widest">{item.subtitle}</p>
                  <h3 className="text-white font-heading font-black text-xl md:text-2xl leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Footer simulation */}
                <div className="flex justify-between items-center text-[10px] text-white/95 z-10 pt-2 border-t border-white/15">
                  <span>✊ Candidate Campaign Drive</span>
                  <span>🗳️ Support Progress</span>
                </div>
              </div>

              {/* Card info header */}
              <div className="p-4 bg-bg-card/90 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-white">{item.category}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">Editable template</p>
                </div>
                <span className="text-xs text-brand-purple font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Configure →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
