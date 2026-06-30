"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { 
  Building, User, ShieldAlert, Sparkles, GraduationCap, 
  HeartPulse, Store, Utensils, Hotel, Pill, 
  Smartphone, Gem, Shirt, Car, Cpu, 
  Home, Scissors, Dumbbell, Coffee, Croissant, 
  Hammer, Camera, Landmark, Compass, ShieldCheck, 
  Printer, Megaphone, Flag, Users, Briefcase, 
  Award, FileText, Globe, Layers, BookOpen, 
  Plus
} from "lucide-react";

export function TemplateCategories() {
  const allCategories = [
    { name: "Business", icon: Building, group: "Core" },
    { name: "Personal", icon: User, group: "Core" },
    { name: "Political", icon: ShieldAlert, group: "Core" },
    { name: "Festival", icon: Sparkles, group: "Core" },
    
    { name: "Education", icon: GraduationCap, group: "Sectors" },
    { name: "Healthcare", icon: HeartPulse, group: "Sectors" },
    { name: "Retail", icon: Store, group: "Sectors" },
    { name: "Restaurants", icon: Utensils, group: "Sectors" },
    { name: "Hotels", icon: Hotel, group: "Sectors" },
    
    { name: "Medical Stores", icon: Pill, group: "Shops" },
    { name: "Mobile Shops", icon: Smartphone, group: "Shops" },
    { name: "Jewellery", icon: Gem, group: "Shops" },
    { name: "Fashion", icon: Shirt, group: "Shops" },
    { name: "Automobile", icon: Car, group: "Shops" },
    { name: "Electronics", icon: Cpu, group: "Shops" },
    
    { name: "Real Estate", icon: Services },
    { name: "Salon", icon: Scissors },
    { name: "Gym", icon: Dumbbell },
    { name: "Cafe", icon: Coffee },
    { name: "Bakery", icon: Croissant },
    { name: "Construction", icon: Hammer },
    { name: "Photography", icon: Camera },
    { name: "Finance", icon: Landmark },
    { name: "Travel", icon: Compass },
    { name: "Insurance", icon: ShieldCheck },
    
    { name: "Schools", icon: GraduationCap },
    { name: "Colleges", icon: BookOpen },
    { name: "Coaching", icon: Award },
    { name: "Printing", icon: Printer },
    { name: "Digital Marketing", icon: Megaphone },
    { name: "Government", icon: Flag },
    { name: "NGOs", icon: Users },
    { name: "Services", icon: Briefcase },
    { name: "Freelancers", icon: User },
    { name: "Corporate", icon: Building },
  ];

  // Map icons safely
  function Services(props: any) {
    return <Briefcase {...props} />;
  }

  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const tabs = ["All", "Business", "Personal", "Political", "Festival"];

  const filteredCategories = allCategories.filter((cat) => {
    if (activeTab === "All") return true;
    if (activeTab === "Business") {
      return !["Personal", "Political", "Festival"].includes(cat.name);
    }
    return cat.name.toLowerCase() === activeTab.toLowerCase() || cat.group?.toLowerCase() === activeTab.toLowerCase();
  });

  const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 15);

  return (
    <SectionWrapper id="categories" className="bg-[#101010] border-b border-border-glass relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4"
          >
            Explore Library
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black mb-6"
          >
            100+ Template <span className="text-gradient">Categories Available</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary"
          >
            Choose from a wide variety of industries, personal milestones, political drives, and festivals.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeTab === tab 
                  ? "bg-brand-orange text-white border-brand-orange shadow-[0_0_15px_rgba(255,138,0,0.3)]" 
                  : "bg-white/5 text-text-secondary border-white/10 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer group hover:bg-white/5 transition-colors">
                  <cat.icon size={28} className="text-text-secondary group-hover:text-brand-pink transition-colors duration-300" />
                  <span className="font-bold text-xs uppercase tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-purple">
                    {cat.name}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {filteredCategories.length > 15 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
            >
              <Plus size={16} className={`transition-transform duration-300 ${showAll ? 'rotate-45' : ''}`} />
              {showAll ? "Show Less" : "View All Categories"}
            </button>
          </div>
        )}

      </div>
    </SectionWrapper>
  );
}
