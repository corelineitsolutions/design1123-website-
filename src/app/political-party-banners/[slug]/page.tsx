"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppStoreButton, PlayStoreButton } from "@/components/ui/StoreButtons";
import { ChevronRight, Download, Share2, FileVideo, Music, Image as ImageIcon, MessageCircle, Hash } from "lucide-react";
import { notFound } from "next/navigation";

// Party Data
const partyDetails = {
  "bjp": { name: "Bharatiya Janata Party (BJP)", shortName: "BJP", image: "/images/politics/bjp.png", color: "text-orange-500", bg: "bg-orange-500", gradient: "from-orange-500/20 to-transparent" },
  "inc": { name: "Indian National Congress (INC)", shortName: "Congress", image: "/images/politics/congress.png", color: "text-blue-500", bg: "bg-blue-500", gradient: "from-blue-500/20 to-transparent" },
  "shiv-sena": { name: "Shiv Sena", shortName: "Shiv Sena", image: "/images/politics/shiv sena eknath shinde.png", color: "text-orange-600", bg: "bg-orange-600", gradient: "from-orange-600/20 to-transparent" },
  "shiv-sena-ubt": { name: "Shiv Sena (UBT)", shortName: "Shiv Sena (UBT)", image: "/images/politics/shivsena ubt.png", color: "text-orange-600", bg: "bg-orange-600", gradient: "from-orange-600/20 to-transparent" },
  "ncp": { name: "Nationalist Congress Party (NCP)", shortName: "NCP", image: "/images/politics/ajit pawar ncp.png", color: "text-blue-500", bg: "bg-blue-500", gradient: "from-blue-500/20 to-transparent" },
  "ncp-sp": { name: "NCP – Sharadchandra Pawar", shortName: "NCP-SP", image: "/images/politics/ncp ajit pawar.png", color: "text-cyan-500", bg: "bg-cyan-500", gradient: "from-cyan-500/20 to-transparent" }, // fallback
  "mns": { name: "Maharashtra Navnirman Sena (MNS)", shortName: "MNS", image: "/images/politics/manase.png", color: "text-yellow-500", bg: "bg-yellow-500", gradient: "from-yellow-500/20 to-transparent" },
  "aap": { name: "Aam Aadmi Party (AAP)", shortName: "AAP", image: "/images/politics/aam admi party.png", color: "text-blue-400", bg: "bg-blue-400", gradient: "from-blue-400/20 to-transparent" },
  "bsp": { name: "Bahujan Samaj Party (BSP)", shortName: "BSP", image: "/images/politics/bahujan samaj party.png", color: "text-blue-800", bg: "bg-blue-800", gradient: "from-blue-800/20 to-transparent" },
  "sp": { name: "Samajwadi Party (SP)", shortName: "SP", image: "/images/politics/aam admi party.png", color: "text-red-500", bg: "bg-red-500", gradient: "from-red-500/20 to-transparent" }, // fallback
};

const features = [
  { text: "Party Post", icon: <ImageIcon className="w-5 h-5" /> },
  { text: "Party Special Videos", icon: <FileVideo className="w-5 h-5" /> },
  { text: "Animated Videos", icon: <FileVideo className="w-5 h-5" /> },
  { text: "Event Special Caption & Hashtags", icon: <Hash className="w-5 h-5" /> },
  { text: "Special Election Branding Posts", icon: <ImageIcon className="w-5 h-5" /> },
];

import { use } from "react";

export default function PartyDetails({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const party = partyDetails[unwrappedParams.slug as keyof typeof partyDetails];

  if (!party) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-bg-dark text-white">
      <Navbar />

      <div className={`w-full relative pt-20 pb-24 overflow-hidden border-b border-border-glass bg-gradient-to-b ${party.gradient}`}>
        <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-4 space-y-8 relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-5xl font-heading font-black tracking-tight text-white leading-tight mb-6">
                  Create <span className={party.color}>{party.shortName}</span> posters & videos now
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Top trending posters and videos with personalized texts and images using the Design 1123 app for the {party.name} in these elections.
                </p>
                
                <div className="flex flex-col gap-4">
                  <a href="/#get-app" className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-deep-orange text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,138,0,0.3)] w-max">
                    <Download className="w-5 h-5" />
                    Download Free Posters Now
                  </a>
                  <div className="flex flex-row gap-2 mt-4">
                    <div className="scale-[0.55] origin-top-left w-[176px] h-[60px]">
                      <AppStoreButton className="!min-w-[320px] shadow-none" />
                    </div>
                    <div className="scale-[0.55] origin-top-left w-[176px] h-[60px]">
                      <PlayStoreButton className="!min-w-[320px] shadow-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Phone Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Glow behind phone */}
                <div className={`absolute inset-0 blur-[100px] ${party.bg} opacity-20 rounded-full`} />
                
                {/* Image without phone wrapper */}
                <div className="relative z-10 w-[450px] max-w-full drop-shadow-2xl flex justify-center">
                  <img 
                    src={party.image} 
                    alt={`${party.shortName} Banners`} 
                    className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    onError={(e) => {
                      e.currentTarget.src = "/logo.png";
                      e.currentTarget.className = "w-full h-auto object-contain p-12";
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Features */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 group cursor-default"
                  >
                    <div className={`${party.color} bg-white/5 p-2 rounded-xl group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                      {feature.text}
                    </span>
                    <ChevronRight className={`ml-auto w-5 h-5 ${party.color} opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0`} />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
