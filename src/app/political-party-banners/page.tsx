"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import Link from "next/link";

const parties = [
  { name: "Bharatiya Janata Party (BJP)", marathiName: "भारतीय जनता पार्टी", color: "from-orange-500 to-green-500", slug: "bjp", icon: "/images/party-logos/bjp.png" },
  { name: "Indian National Congress (INC)", marathiName: "भारतीय राष्ट्रीय कांग्रेस", color: "from-blue-500 to-blue-700", slug: "inc", icon: "/images/party-logos/congress.png" },
  { name: "Shiv Sena", marathiName: "शिवसेना", color: "from-orange-500 to-orange-600", slug: "shiv-sena", icon: "/images/party-logos/shiv-sena.png" },
  { name: "Shiv Sena (Uddhav Balasaheb Thackeray)", marathiName: "शिवसेना (उद्धव बाळासाहेब ठाकरे)", color: "from-orange-600 to-orange-800", slug: "shiv-sena-ubt", icon: "/images/party-logos/shiv-sena-ubt.png" },
  { name: "Nationalist Congress Party (NCP)", marathiName: "राष्ट्रवादी कांग्रेस पार्टी", color: "from-blue-400 to-cyan-500", slug: "ncp", icon: "/images/party-logos/ncp-ajit.png" },
  { name: "Nationalist Congress Party – Sharadchandra Pawar (NCP-SP)", marathiName: "राष्ट्रवादी कांग्रेस पार्टी – शरदचंद्र पवार", color: "from-cyan-600 to-cyan-800", slug: "ncp-sp", icon: "/images/party-logos/ncp-sp.png" },
  { name: "Maharashtra Navnirman Sena (MNS)", marathiName: "महाराष्ट्र नवनिर्माण सेना", color: "from-orange-400 to-orange-600", slug: "mns", icon: "/images/party-logos/mns.png" },
  { name: "Aam Aadmi Party (AAP)", marathiName: "आम आदमी पार्टी", color: "from-blue-300 to-blue-500", slug: "aap", icon: "/images/party-logos/aap.png" },
  { name: "Bahujan Samaj Party (BSP)", marathiName: "बहुजन समाज पार्टी", color: "from-blue-700 to-blue-900", slug: "bsp", icon: "/images/party-logos/bahujan-samaj-party.png" },
  { name: "Samajwadi Party (SP)", marathiName: "समाजवादी पार्टी", color: "from-red-500 to-green-600", slug: "sp", icon: "/images/party-logos/samajwadi-party.png" },
];

export default function PoliticalPartyBanners() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-bg-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full relative pt-32 pb-20 overflow-hidden border-b border-border-glass bg-bg-section/50">
        <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 leading-tight">
              Political Party <span className="text-gradient">Banners</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8">
              Select a political party to view and customize high-quality banners for your campaigns in Maharashtra.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="w-full py-16 lg:py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parties.map((party, idx) => (
              <Link href={`/political-party-banners/${party.slug}`} key={party.slug} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                className="group p-8 rounded-[32px] bg-bg-card/40 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${party.color} opacity-10 blur-3xl rounded-full`} />
                </div>
                
                <div className="flex flex-col items-center text-center gap-6 relative z-10">
                  {/* Logo Placeholder */}
                  <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${party.color} flex items-center justify-center shadow-lg shadow-black/30 p-[3px]`}>
                    <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center relative overflow-hidden">
                      {party.icon ? (
                        <img src={party.icon} alt={party.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-br ${party.color} opacity-10`} />
                          <span className="text-3xl font-bold font-heading text-white relative z-10">
                            {party.name.match(/\(([^)]+)\)/)?.[1] || party.name.charAt(0)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Party Names */}
                  <div className="space-y-3">
                    <h3 className="font-heading font-black text-xl md:text-2xl text-white group-hover:text-white transition-colors">
                      {party.name}
                    </h3>
                    <p className="text-text-secondary font-medium text-lg md:text-xl">
                      {party.marathiName}
                    </p>
                  </div>
                  
                  <div className="mt-4 text-sm font-bold uppercase tracking-wider text-brand-orange opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    View Banners →
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
