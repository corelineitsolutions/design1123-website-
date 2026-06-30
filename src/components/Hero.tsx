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
      delay: 0,
      x: "-20%",
      y: "15%",
      rotate: -12,
    },
    {
      title: "FESTIVAL OFFER - 20% OFF",
      category: "Retail Shop",
      color: "from-brand-orange to-brand-pink",
      delay: 1,
      x: "115%",
      y: "25%",
      rotate: 8,
    },
    {
      title: "Sonia & Rahul's Wedding",
      category: "Personal Invitation",
      color: "from-rose-500 to-purple-600",
      delay: 2,
      x: "-10%",
      y: "65%",
      rotate: 15,
    },
    {
      title: "GRAND OPENING CAFE",
      category: "Restaurant Flyer",
      color: "from-amber-500 to-red-600",
      delay: 3,
      x: "110%",
      y: "70%",
      rotate: -8,
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
          <div className="lg:col-span-5 relative flex justify-center items-center h-[550px]">
            {/* Rotating border aura */}
            <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-brand-orange to-brand-purple blur-[80px] opacity-25 rounded-full animate-pulse" />

            {/* Central Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[280px] h-[520px] bg-[#09090b] border-[10px] border-[#1f1f23] rounded-[42px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-20 scale-90 sm:scale-100"
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

                {/* Categories Scroll */}
                <div className="flex gap-2 overflow-x-auto scrollbar-none py-1">
                  {["Political", "Business", "Wishes", "Festival"].map((cat, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold ${i === 0 ? 'bg-brand-orange text-white' : 'bg-white/5 border border-white/10 text-text-secondary'}`}>
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Templates Grid inside Phone */}
                <div className="flex-1 grid grid-cols-2 gap-2 overflow-y-auto pb-4 scrollbar-none">
                  {[
                    { title: "MLA CAMPAIGN", grad: "from-orange-500 to-red-600" },
                    { title: "MEDICAL POSTER", grad: "from-blue-600 to-cyan-500" },
                    { title: "WEDDING INVIT", grad: "from-pink-500 to-rose-600" },
                    { title: "CAFE FLYER", grad: "from-amber-600 to-orange-700" },
                    { title: "RETAIL SALES", grad: "from-purple-600 to-indigo-600" },
                    { title: "GYM ADVERT", grad: "from-red-600 to-purple-800" },
                  ].map((tpl, i) => (
                    <div key={i} className={`aspect-[3/4] bg-gradient-to-br ${tpl.grad} rounded-xl p-2 flex flex-col justify-between shadow-lg`}>
                      <span className="text-[7px] bg-black/40 px-1.5 py-0.5 rounded-full w-max text-white">Template</span>
                      <span className="text-[9px] font-heading font-black leading-tight text-white">{tpl.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Templates Around the Phone */}
            {floatingTemplates.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + item.delay * 0.2 }}
                className={`absolute glass-card p-3 rounded-2xl border-white/15 w-[140px] shadow-2xl z-10 hidden sm:block pointer-events-none`}
                style={{
                  left: item.x,
                  top: item.y,
                  transform: `rotate(${item.rotate}deg)`,
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
                  <div className={`w-full aspect-[4/3] bg-gradient-to-tr ${item.color} rounded-lg mb-2 flex items-center justify-center`}>
                    <span className="text-[10px] font-heading font-black text-white text-center px-2">{item.title}</span>
                  </div>
                  <div className="text-[9px] text-brand-orange font-bold uppercase">{item.category}</div>
                </motion.div>
              </motion.div>
            ))}
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
