"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Hero() {
  const stats = [
    { value: "100+", label: "Categories" },
    { value: "10,000+", label: "Premium Templates" },
    { value: "Millions", label: "Downloads" },
    { value: "Daily New", label: "Templates Added" },
  ];

  const floatingTemplates = [
    {
      title: "VOTE FOR PROGRESS",
      category: "Political Campaign",
      color: "from-blue-600 to-indigo-800",
      glowShadow: "0 0 25px rgba(37,99,235,0.65)",
      delay: 0,
      x: "calc(50% - 320px)",
      y: "10%",
      rotate: -10,
      imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=400&auto=format&fit=crop&q=80"
    },
    {
      title: "FITNESS CLUB OPEN",
      category: "Gym & Fitness",
      color: "from-red-600 to-purple-800",
      glowShadow: "0 0 25px rgba(220,38,38,0.65)",
      delay: 1.2,
      x: "calc(50% - 345px)",
      y: "38%",
      rotate: 8,
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80"
    },
    {
      title: "Sonia & Rahul's Wedding",
      category: "Personal Invitation",
      color: "from-rose-500 to-purple-600",
      glowShadow: "0 0 25px rgba(244,63,94,0.65)",
      delay: 2,
      x: "calc(50% - 305px)",
      y: "66%",
      rotate: -6,
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80"
    },
    {
      title: "FESTIVAL OFFER - 20% OFF",
      category: "Retail Shop",
      color: "from-brand-orange to-brand-pink",
      glowShadow: "0 0 25px rgba(255,138,0,0.65)",
      delay: 0.6,
      x: "calc(50% + 130px)",
      y: "12%",
      rotate: 6,
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&auto=format&fit=crop&q=80"
    },
    {
      title: "HAPPY DIWALI GREETINGS",
      category: "Festival Wishes",
      color: "from-yellow-500 to-red-600",
      glowShadow: "0 0 25px rgba(234,179,8,0.65)",
      delay: 1.8,
      x: "calc(50% + 155px)",
      y: "40%",
      rotate: -8,
      imageUrl: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=400&auto=format&fit=crop&q=80"
    },
    {
      title: "GRAND OPENING CAFE",
      category: "Restaurant Flyer",
      color: "from-amber-500 to-red-600",
      glowShadow: "0 0 25px rgba(245,158,11,0.65)",
      delay: 2.4,
      x: "calc(50% + 115px)",
      y: "68%",
      rotate: 10,
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop&q=80"
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-32 overflow-hidden noise-bg bg-bg-dark">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 via-brand-purple/10 to-brand-deep-purple/20" />
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full filter blur-[150px] mix-blend-screen opacity-30"
          style={{ background: "radial-gradient(circle, #FF8A00 0%, #E91E63 70%, rgba(123, 31, 162, 0) 100%)" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-0 w-[800px] h-[800px] rounded-full filter blur-[180px] mix-blend-screen opacity-20"
          style={{ background: "radial-gradient(circle, #7B1FA2 0%, #C2185B 60%, rgba(0,0,0,0) 100%)" }}
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center py-8">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-left space-y-8">


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-heading font-black leading-[1.05] tracking-tight"
            >
              Create Stunning <br />
              <span className="text-gradient">Designs in Minutes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Access thousands of professionally designed ready-to-use templates for businesses, personal events, and political campaigns—all in one powerful application.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full">
                  Download App
                </Button>
              </a>
              <a href="#categories" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">
                  Explore Templates
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Phone Mockup with floating template elements */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[420px] sm:h-[550px] overflow-visible w-full">
            {/* Scaling container for mobile responsiveness */}
            <div className="relative w-full h-full flex justify-center items-center scale-[0.6] min-[400px]:scale-[0.65] min-[480px]:scale-[0.75] sm:scale-90 md:scale-95 lg:scale-100 origin-center transition-transform duration-300">
              {/* Rotating border aura */}
              <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-brand-orange to-brand-purple blur-[80px] opacity-25 rounded-full animate-pulse -translate-x-[30px]" />

              {/* Central Phone Mockup (shifted slightly to the left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50, x: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: -30 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-[280px] h-[520px] bg-[#09090b] border-[10px] border-[#1f1f23] rounded-[42px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-20"
              >
                {/* Camera Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-[#1f1f23] rounded-b-2xl w-[120px] mx-auto z-50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black mr-2" />
                  <div className="w-12 h-1 bg-[#2f2f35] rounded-full" />
                </div>

                {/* Simulated App Screen */}
                <div className="w-full h-full p-4 pt-10 flex flex-col bg-bg-dark text-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <img src="/logo.png" alt="Mini Logo" className="h-6 w-auto object-contain" />
                      <span className="text-xs font-bold font-heading">Design 1123</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px]">👤</div>
                  </div>
                  
                  {/* Search Bar */}
                  <div className="h-8 bg-white/5 border border-white/10 rounded-full flex items-center px-3 text-[10px] text-text-secondary">
                    🔍 Search 10,000+ templates...
                  </div>

                  {/* Categories Grid inside Phone (4 in one row) */}
                  <div className="grid grid-cols-4 gap-1 w-full text-center py-1">
                    {["Political", "Business", "Wishes", "Festival"].map((cat, i) => (
                      <span key={i} className={`px-1.5 py-1 rounded-full text-[8px] font-bold ${i === 0 ? 'bg-brand-orange text-white' : 'bg-white/5 border border-white/10 text-text-secondary'} truncate`}>
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Templates Grid inside Phone */}
                  <div className="flex-1 grid grid-cols-2 gap-2 overflow-y-auto pb-4 scrollbar-none">
                    {[
                      { title: "MLA CAMPAIGN", grad: "from-orange-500/70 to-red-600/70", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80" },
                      { title: "VOTE FOR PROGRESS", grad: "from-blue-600/70 to-indigo-800/70", imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=300&auto=format&fit=crop&q=80" },
                      { title: "PUBLIC MEETING", grad: "from-purple-600/70 to-pink-600/70", imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&auto=format&fit=crop&q=80" },
                      { title: "CAMPAIGN RALLY", grad: "from-red-500/70 to-orange-600/70", imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&auto=format&fit=crop&q=80" },
                      { title: "LEADER GREETING", grad: "from-orange-600/70 to-yellow-500/70", imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=300&auto=format&fit=crop&q=80" },
                      { title: "VOLUNTEER DRIVE", grad: "from-blue-500/70 to-teal-500/70", imageUrl: "https://images.unsplash.com/photo-1559027615-cd4487a24a0b?w=300&auto=format&fit=crop&q=80" },
                    ].map((tpl, i) => (
                      <div key={i} className="aspect-[3/4] rounded-xl relative overflow-hidden p-2 flex flex-col justify-between shadow-lg">
                        {/* Template Image Background */}
                        <img 
                          src={tpl.imageUrl} 
                          alt={tpl.title} 
                          className="absolute inset-0 w-full h-full object-cover" 
                          loading="lazy"
                        />
                        {/* Tint color blend */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tpl.grad} opacity-30 mix-blend-multiply`} />
                        {/* Text readable overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
                        
                        <span className="text-[7px] bg-black/50 px-1.5 py-0.5 rounded-full w-max text-white relative z-10">Template</span>
                        <span className="text-[9px] font-heading font-black leading-tight text-white relative z-10">{tpl.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Templates Around the Phone */}
              {floatingTemplates.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotate: item.rotate }}
                  whileInView={{ opacity: 0.5, scale: 1, rotate: item.rotate }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 0, 
                    zIndex: 40,
                    opacity: 1,
                    boxShadow: item.glowShadow,
                    borderColor: "rgba(255,255,255,0.3)"
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + item.delay * 0.15 }}
                  className="absolute glass-card p-2.5 rounded-2xl border border-white/5 w-[130px] shadow-2xl z-10 block pointer-events-auto cursor-pointer select-none"
                  style={{
                    left: item.x,
                    top: item.y,
                  }}
                >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                >
                  <div className="w-full aspect-[4/3] rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
                    {/* Background Template Image */}
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-40 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                    
                    <span className="text-[10px] font-heading font-black text-white text-center px-2 relative z-10 leading-tight">{item.title}</span>
                  </div>
                  <div className="text-[9px] text-brand-orange font-bold uppercase">{item.category}</div>
                </motion.div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated statistics Banner at footer of Hero */}
      <div className="border-t border-border-glass bg-bg-card/40 backdrop-blur-md py-6 md:py-8 z-10">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              className="space-y-1"
            >
              <div className="text-2xl md:text-4xl font-heading font-black text-white">{stat.value}</div>
              <div className="text-xs md:text-sm text-text-secondary uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
