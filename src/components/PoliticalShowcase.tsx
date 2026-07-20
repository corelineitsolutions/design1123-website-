"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { 
  Cake, Users, Vote, Building2, 
  HeartPulse, Flag, UserPlus, Trophy, Layers 
} from "lucide-react";

export function PoliticalShowcase() {
  const cards = [
    { 
      title: "Leader Birthday Wishes", 
      category: "Leader Birthday", 
      icon: Cake,
      imageUrl: "/templates/politics/leader-birthday.jpeg"
    },
    { 
      title: "Meeting & Gathering", 
      category: "Meeting Gathering", 
      icon: Users,
      imageUrl: "/templates/politics/meeting-gathering.jpeg"
    },
    { 
      title: "Election Campaigning", 
      category: "Election Campaigning", 
      icon: Vote,
      imageUrl: "/templates/politics/election-campaigning.jpeg"
    },
    { 
      title: "Development Works", 
      category: "Development Works", 
      icon: Building2,
      imageUrl: "/templates/politics/development-works.jpeg"
    },
    { 
      title: "Blood Donation Camp", 
      category: "Blood Donation Camp", 
      icon: HeartPulse,
      imageUrl: "/templates/politics/blood-donation-camp.jpeg"
    },
    { 
      title: "Government Schemes", 
      category: "Government Schemes", 
      icon: Flag,
      imageUrl: "/templates/politics/government-schemes.jpeg"
    },
    { 
      title: "Party Joining Drive", 
      category: "Party Joining", 
      icon: UserPlus,
      imageUrl: "/templates/politics/party-joining.jpeg"
    },
    { 
      title: "Winning Candidate", 
      category: "Winning Candidate", 
      icon: Trophy,
      imageUrl: "/templates/politics/winning-candidate.jpeg"
    },
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

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {cards.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="glass-card overflow-hidden group border border-white/5 hover:border-brand-purple/30 transition-all duration-300"
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
                    <item.icon className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[8px] sm:text-sm text-white truncate">{item.category}</h4>
                    <p className="hidden sm:block text-xs text-text-secondary mt-0.5 truncate">{item.title}</p>
                  </div>
                </div>
                <span className="text-[8px] sm:text-xs text-brand-purple font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform flex-shrink-0">Configure →</span>
              </div>
            </motion.div>
          ))}

          {/* 9th box — And Many More */}
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="glass-card overflow-hidden group border border-dashed border-brand-purple/40 hover:border-brand-purple/70 transition-all duration-300 flex flex-col"
          >
            <div className="w-full aspect-[16/10] relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-brand-purple/20 via-brand-pink/10 to-brand-orange/20 px-3 sm:px-6 text-center">
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-4 h-4 sm:w-7 sm:h-7 text-brand-orange" />
              </div>
              <h3 className="text-white font-heading font-black text-[9px] sm:text-2xl leading-tight">
                And Many More
              </h3>
              <p className="hidden sm:block text-sm text-text-secondary mt-2 max-w-[200px]">
                Hundreds of political campaign templates ready in the app
              </p>
            </div>
            <div className="p-2 sm:p-4 bg-bg-card/90 flex justify-between items-center mt-auto">
              <div>
                <h4 className="font-bold text-[8px] sm:text-sm text-white">Explore All</h4>
                <p className="hidden sm:block text-xs text-text-secondary mt-0.5">Open in app</p>
              </div>
              <span className="text-[8px] sm:text-xs text-brand-orange font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">Download →</span>
            </div>
          </motion.a>
        </div>
      </div>
    </SectionWrapper>
  );
}
