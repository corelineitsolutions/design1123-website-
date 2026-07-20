"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

export function Hero() {
  // Play Store Interactive States
  const [currentScreen, setCurrentScreen] = useState<"playstore" | "app">("playstore");
  const [installState, setInstallState] = useState<"idle" | "pending" | "downloading" | "installing" | "installed">("idle");
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  
  // Dynamic stats calculated from base ratings
  const [reviewsCount, setReviewsCount] = useState(5);
  const [ratingScore, setRatingScore] = useState(5.0);

  // App simulated screen state
  const [activeCategory, setActiveCategory] = useState("Political");

  // Install State Machine simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (installState === "pending") {
      timer = setTimeout(() => {
        setInstallState("downloading");
        setDownloadProgress(0);
      }, 1200);
    } else if (installState === "downloading") {
      interval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setInstallState("installing");
            return 100;
          }
          const increment = Math.floor(Math.random() * 15) + 12; // fast downloading
          return Math.min(prev + increment, 100);
        });
      }, 200);
    } else if (installState === "installing") {
      timer = setTimeout(() => {
        setInstallState("installed");
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [installState]);

  const handleInstall = () => {
    if (installState === "idle") {
      window.open("https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN", "_blank");
      setInstallState("pending");
    }
  };

  const handleUninstall = () => {
    setInstallState("idle");
    setDownloadProgress(0);
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    // Base calculation: 5 reviews at 5.0 = 25.0 points total
    const baseTotal = 25.0;
    const newCount = 5 + 1;
    const newTotal = baseTotal + rating;
    const newAvg = parseFloat((newTotal / newCount).toFixed(1));
    setReviewsCount(newCount);
    setRatingScore(newAvg);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) return;
    
    setReviewSubmitted(true);
    // If they haven't rated, set rating to 5 stars by default
    if (userRating === 0) {
      handleRate(5);
    }
    
    setTimeout(() => {
      setShowReviewForm(false);
      setReviewText("");
      setReviewSubmitted(false);
    }, 1800);
  };

  const stats = [
    { value: "100+", label: "Categories" },
    { value: "10,000+", label: "Premium Templates" },
    { value: "Millions", label: "Downloads" },
    { value: "Daily New", label: "Templates Added" },
  ];

  // Categorized mockup templates inside the phone screen
  const appTemplates = [
    // Political (real app template screenshots)
    { title: "LEADER BIRTHDAY", category: "Political", grad: "from-orange-500/70 to-red-600/70", imageUrl: "/templates/politics/leader-birthday.jpeg", appShot: true },
    { title: "MEETING GATHERING", category: "Political", grad: "from-blue-600/70 to-indigo-800/70", imageUrl: "/templates/politics/meeting-gathering.jpeg", appShot: true },
    { title: "ELECTION CAMPAIGN", category: "Political", grad: "from-purple-600/70 to-pink-600/70", imageUrl: "/templates/politics/election-campaigning.jpeg", appShot: true },
    { title: "DEVELOPMENT WORKS", category: "Political", grad: "from-red-500/70 to-orange-600/70", imageUrl: "/templates/politics/development-works.jpeg", appShot: true },
    { title: "BLOOD DONATION", category: "Political", grad: "from-orange-600/70 to-yellow-500/70", imageUrl: "/templates/politics/blood-donation-camp.jpeg", appShot: true },
    { title: "GOVERNMENT SCHEMES", category: "Political", grad: "from-blue-500/70 to-teal-500/70", imageUrl: "/templates/politics/government-schemes.jpeg", appShot: true },
    { title: "PARTY JOINING", category: "Political", grad: "from-indigo-600/70 to-purple-700/70", imageUrl: "/templates/politics/party-joining.jpeg", appShot: true },
    { title: "WINNING CANDIDATE", category: "Political", grad: "from-amber-500/70 to-red-600/70", imageUrl: "/templates/politics/winning-candidate.jpeg", appShot: true },

    // Business (real app template screenshots)
    { title: "MOBILE SHOP DEALS", category: "Business", grad: "from-red-600/70 to-purple-800/70", imageUrl: "/templates/business/mobile-shop.jpeg", appShot: true },
    { title: "RESTAURANT & BAR", category: "Business", grad: "from-amber-500/70 to-red-600/70", imageUrl: "/templates/business/restaurant.jpeg", appShot: true },
    { title: "JEWELLERY LUXURY", category: "Business", grad: "from-brand-orange/70 to-brand-pink/70", imageUrl: "/templates/business/jewellery.jpeg", appShot: true },
    { title: "ELECTRONICS STORE", category: "Business", grad: "from-blue-600/70 to-indigo-800/70", imageUrl: "/templates/business/electronics.jpeg", appShot: true },
    { title: "MEDICAL STORE", category: "Business", grad: "from-teal-500/70 to-green-600/70", imageUrl: "/templates/business/medical-store.jpeg", appShot: true },
    { title: "SUPER MARKET", category: "Business", grad: "from-orange-500/70 to-red-600/70", imageUrl: "/templates/business/supermarket.jpeg", appShot: true },

    // Wishes (real app personal template screenshots)
    { title: "BIRTHDAY WISHES", category: "Wishes", grad: "from-rose-500/70 to-purple-600/70", imageUrl: "/templates/personal/birthday-wishes.jpeg", appShot: true },
    { title: "ANNIVERSARY WISHES", category: "Wishes", grad: "from-blue-500/70 to-teal-500/70", imageUrl: "/templates/personal/anniversary-wishes.jpeg", appShot: true },
    { title: "GOOD MORNING", category: "Wishes", grad: "from-amber-500/70 to-orange-600/70", imageUrl: "/templates/personal/good-morning.jpeg", appShot: true },
    { title: "GOOD NIGHT", category: "Wishes", grad: "from-indigo-600/70 to-purple-800/70", imageUrl: "/templates/personal/good-night.jpeg", appShot: true },
    { title: "ISLAMIC GREETING", category: "Wishes", grad: "from-emerald-500/70 to-teal-700/70", imageUrl: "/templates/personal/islamic.jpeg", appShot: true },
    { title: "MOTIVATIONAL", category: "Wishes", grad: "from-orange-500/70 to-red-600/70", imageUrl: "/templates/personal/motivational-thoughts.jpeg", appShot: true },

    // Festival (personal / devotionals)
    { title: "MAHADEV DEVOTIONAL", category: "Festival", grad: "from-yellow-500/70 to-red-600/70", imageUrl: "/templates/personal/mahadev-devotional.jpeg", appShot: true },
    { title: "BABASAHEB AMBEDKAR", category: "Festival", grad: "from-blue-600/70 to-indigo-800/70", imageUrl: "/templates/personal/babasaheb-ambedkar.jpeg", appShot: true },
    { title: "SHRADDHANJALI", category: "Festival", grad: "from-slate-500/70 to-gray-700/70", imageUrl: "/templates/personal/shraddhanjali.jpeg", appShot: true },
  ];

  const filteredTemplates = appTemplates.filter(
    (tpl) => tpl.category === activeCategory
  );

  const floatingTemplates = [
    {
      title: "ELECTION CAMPAIGN",
      category: "Political Campaign",
      color: "from-blue-600 to-indigo-800",
      glowShadow: "0 0 25px rgba(37,99,235,0.65)",
      delay: 0,
      x: "calc(50% - 320px)",
      y: "10%",
      rotate: -10,
      imageUrl: "/templates/politics/election-campaigning.jpeg",
      appShot: true
    },
    {
      title: "MOBILE SHOP DEALS",
      category: "Mobile Shop",
      color: "from-red-600 to-purple-800",
      glowShadow: "0 0 25px rgba(220,38,38,0.65)",
      delay: 1.2,
      x: "calc(50% - 345px)",
      y: "38%",
      rotate: 8,
      imageUrl: "/templates/business/mobile-shop.jpeg",
      appShot: true
    },
    {
      title: "BIRTHDAY WISHES",
      category: "Personal Greeting",
      color: "from-rose-500 to-purple-600",
      glowShadow: "0 0 25px rgba(244,63,94,0.65)",
      delay: 2,
      x: "calc(50% - 305px)",
      y: "66%",
      rotate: -6,
      imageUrl: "/templates/personal/birthday-wishes.jpeg",
      appShot: true
    },
    {
      title: "JEWELLERY LUXURY",
      category: "Jewellery Store",
      color: "from-brand-orange to-brand-pink",
      glowShadow: "0 0 25px rgba(255,138,0,0.65)",
      delay: 0.6,
      x: "calc(50% + 130px)",
      y: "12%",
      rotate: 6,
      imageUrl: "/templates/business/jewellery.jpeg",
      appShot: true
    },
    {
      title: "MAHADEV DEVOTIONAL",
      category: "Festival Wishes",
      color: "from-yellow-500 to-red-600",
      glowShadow: "0 0 25px rgba(234,179,8,0.65)",
      delay: 1.8,
      x: "calc(50% + 155px)",
      y: "40%",
      rotate: -8,
      imageUrl: "/templates/personal/mahadev-devotional.jpeg",
      appShot: true
    },
    {
      title: "RESTAURANT & BAR",
      category: "Restaurant Flyer",
      color: "from-amber-500 to-red-600",
      glowShadow: "0 0 25px rgba(245,158,11,0.65)",
      delay: 2.4,
      x: "calc(50% + 115px)",
      y: "68%",
      rotate: 10,
      imageUrl: "/templates/business/restaurant.jpeg",
      appShot: true
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
                {/* Switchable Simulated App / Play Store Screen */}
                <AnimatePresence mode="wait">
                  {currentScreen === "playstore" ? (
                    <motion.div
                      key="playstore"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full pt-8 flex flex-col bg-[#131314] text-white overflow-y-auto scrollbar-none text-left select-none"
                    >
                      {/* Play Store Top Bar */}
                      <div className="flex items-center justify-between px-4 py-2 text-white/90">
                        <button className="p-1 hover:bg-white/10 rounded-full transition-colors bg-transparent border-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                          </svg>
                        </button>
                        <div className="flex items-center gap-4">
                          <button className="p-1 hover:bg-white/10 rounded-full transition-colors bg-transparent border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-white/10 rounded-full transition-colors bg-transparent border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* App Header Row */}
                      <div className="flex items-start gap-4 px-4 pt-2">
                        {/* App Icon */}
                        <div className="relative w-16 h-16 rounded-[16px] bg-gradient-to-tr from-[#ff4e00] via-[#ec008c] to-[#7b1fa2] flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
                          <img src="/app-icon.jpeg" className="w-full h-full object-cover rounded-[16px]" alt="App Icon" />
                        </div>
                        {/* App Title & Dev */}
                        <div className="flex flex-col min-w-0">
                          <h2 className="text-[18px] font-semibold font-sans text-white leading-tight truncate">Design 1123</h2>
                          <a 
                            href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[12px] font-medium text-[#8ab4f8] hover:underline mt-0.5"
                          >
                            coreline it solutions
                          </a>
                        </div>
                      </div>

                      {/* Stats Row */}
                      <div className="flex justify-around items-center border-t border-b border-white/5 py-2.5 my-3 mx-4">
                        {/* Rating */}
                        <div className="flex flex-col items-center">
                          <div className="text-[12px] font-bold text-white flex items-center gap-0.5">
                            {ratingScore} <span className="text-[10px]">★</span>
                          </div>
                          <div className="text-[9px] text-[#c4c7c5] mt-0.5 flex items-center gap-0.5">
                            {reviewsCount} reviews <span className="text-[7px]">ⓘ</span>
                          </div>
                        </div>

                        <div className="h-6 w-[1px] bg-white/10" />

                        {/* Content Rating */}
                        <div className="flex flex-col items-center">
                          <div className="text-[9px] font-bold text-white px-1 border border-white/60 rounded-[2px] leading-none py-0.5">
                            3+
                          </div>
                          <div className="text-[9px] text-[#c4c7c5] mt-0.5 flex items-center gap-0.5">
                            Rated for 3+ <span className="text-[7px]">ⓘ</span>
                          </div>
                        </div>

                        <div className="h-6 w-[1px] bg-white/10" />

                        {/* Size */}
                        <div className="flex flex-col items-center">
                          <div className="text-[12px] font-bold text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </div>
                          <div className="text-[9px] text-[#c4c7c5] mt-0.5">
                            36 MB
                          </div>
                        </div>
                      </div>

                      {/* Install Button Container */}
                      <div className="px-4 pb-2">
                        {installState === "idle" && (
                          <button
                            onClick={handleInstall}
                            className="w-full py-1.5 bg-[#8ab4f8] text-[#131314] rounded-full text-xs font-semibold hover:bg-[#9cc3ff] active:scale-[0.98] transition-all text-center cursor-pointer border-none"
                          >
                            Install
                          </button>
                        )}

                        {installState === "pending" && (
                          <div className="w-full py-1.5 bg-[#1f1f23] border border-white/10 rounded-full flex items-center justify-center gap-2 text-xs text-[#c4c7c5] font-semibold animate-pulse">
                            <svg className="animate-spin h-3.5 w-3.5 text-[#8ab4f8]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Pending...
                          </div>
                        )}

                        {installState === "downloading" && (
                          <div className="relative w-full py-1.5 bg-[#1f1f23] border border-white/10 rounded-full overflow-hidden flex items-center justify-between px-4 text-xs font-semibold text-white">
                            {/* Progress Fill */}
                            <div 
                              className="absolute top-0 left-0 bottom-0 bg-[#8ab4f8]/20 transition-all duration-200"
                              style={{ width: `${downloadProgress}%` }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                              <svg className="animate-spin h-3.5 w-3.5 text-[#8ab4f8]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Downloading...
                            </span>
                            <span className="relative z-10 text-[10px] text-[#c4c7c5]">{downloadProgress}%</span>
                          </div>
                        )}

                        {installState === "installing" && (
                          <div className="w-full py-1.5 bg-[#1f1f23] border border-white/10 rounded-full flex items-center justify-center gap-2 text-xs text-[#c4c7c5] font-semibold">
                            <svg className="animate-spin h-3.5 w-3.5 text-[#8ab4f8]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Installing...
                          </div>
                        )}

                        {installState === "installed" && (
                          <div className="flex gap-2 w-full">
                            <button
                              onClick={handleUninstall}
                              className="flex-1 py-1.5 bg-transparent border border-[#5f6368] text-[#8ab4f8] rounded-full text-xs font-semibold hover:bg-white/5 transition-all text-center cursor-pointer"
                            >
                              Uninstall
                            </button>
                            <button
                              onClick={() => setCurrentScreen("app")}
                              className="flex-1 py-1.5 bg-[#8ab4f8] text-[#131314] rounded-full text-xs font-semibold hover:bg-[#9cc3ff] flex items-center justify-center gap-1 transition-all border-none cursor-pointer"
                            >
                              Open
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Rate this App Section */}
                      <div className="px-4 py-3 border-t border-white/5 mt-2">
                        <h3 className="text-[12px] font-medium text-white">Rate this app</h3>
                        <p className="text-[9px] text-[#c4c7c5] mt-0.5">Tell others what you think</p>
                        
                        {/* Interactive Stars */}
                        <div className="flex items-center gap-2.5 my-2">
                          {[1, 2, 3, 4, 5].map((star) => {
                            const isFilled = hoveredStar >= star || userRating >= star;
                            return (
                              <button
                                key={star}
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                onClick={() => handleRate(star)}
                                className="p-0.5 text-gray-500 hover:scale-110 active:scale-95 transition-all bg-transparent border-none cursor-pointer"
                              >
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill={isFilled ? "#8ab4f8" : "none"} 
                                  viewBox="0 0 24 24" 
                                  strokeWidth={1.5} 
                                  stroke={isFilled ? "#8ab4f8" : "currentColor"} 
                                  className="w-[26px] h-[26px]"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.198-.396.772-.396.97 0l2.582 5.253 5.793.842c.439.064.615.608.297.915l-4.193 4.085 1.0 5.765c.076.438-.383.77-.772.564l-5.183-2.727-5.183 2.727c-.389.206-.848-.126-.772-.564l1.0-5.765-4.193-4.085c-.318-.307-.142-.85.297-.915l5.793-.842 2.58-5.253z" />
                                </svg>
                              </button>
                            );
                          })}
                        </div>

                        {/* Interactive Feedback Info */}
                        {userRating > 0 && !showReviewForm && !reviewSubmitted && (
                          <motion.div 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] text-[#8ab4f8] font-medium bg-[#8ab4f8]/5 p-2 rounded-lg border border-[#8ab4f8]/20 flex items-center justify-between"
                          >
                            <span>You rated this app {userRating} ★! Thank you.</span>
                            <button 
                              onClick={() => setShowReviewForm(true)} 
                              className="underline font-bold text-white hover:text-[#8ab4f8] bg-transparent border-none cursor-pointer text-xs"
                            >
                              Edit review
                            </button>
                          </motion.div>
                        )}

                        {/* Review Link */}
                        {userRating === 0 && !showReviewForm && (
                          <button
                            onClick={() => setShowReviewForm(true)}
                            className="text-[11px] font-semibold text-[#8ab4f8] hover:underline mt-1 bg-transparent border-none text-left cursor-pointer"
                          >
                            Write a review
                          </button>
                        )}

                        {/* Write a Review Form */}
                        {showReviewForm && (
                          <motion.form 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            onSubmit={handleReviewSubmit}
                            className="mt-2 space-y-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-left"
                          >
                            <label className="text-[9px] text-[#c4c7c5] block font-medium">Write a Review</label>
                            <textarea
                              value={reviewText}
                              onChange={(e) => setReviewText(e.target.value)}
                              placeholder="Describe your experience with the app..."
                              rows={2}
                              className="w-full bg-[#131314] text-white border border-white/10 rounded-lg p-1.5 text-[10px] focus:outline-none focus:border-[#8ab4f8] resize-none"
                              required
                            />
                            <div className="flex justify-end gap-1.5 text-[9px] font-bold">
                              <button
                                type="button"
                                onClick={() => setShowReviewForm(false)}
                                className="px-2.5 py-1 text-gray-400 hover:text-white rounded bg-transparent border-none cursor-pointer"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                disabled={reviewSubmitted}
                                className="px-2.5 py-1 bg-[#8ab4f8] text-[#131314] rounded hover:bg-[#9cc3ff] flex items-center gap-1 border-none cursor-pointer"
                              >
                                {reviewSubmitted ? "Submitting..." : "Submit"}
                              </button>
                            </div>
                          </motion.form>
                        )}

                        {/* Review Submitted Banner */}
                        {reviewSubmitted && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] text-green-400 bg-green-500/10 border border-green-500/20 p-2 rounded-lg mt-2 font-medium text-center"
                          >
                            Review submitted successfully!
                          </motion.div>
                        )}
                      </div>

                      {/* Developer Details list */}
                      <div className="px-4 py-3 border-t border-white/5 text-[10px] text-gray-400 space-y-2">
                        <div className="flex justify-between">
                          <span>Developer contact</span>
                          <span className="text-[#8ab4f8] cursor-pointer hover:underline">expand ▾</span>
                        </div>
                        <div className="flex justify-between">
                          <span>About this app</span>
                          <span className="text-white hover:underline cursor-pointer">→</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="app"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full pt-8 flex flex-col bg-bg-dark text-white text-left overflow-hidden relative"
                    >
                      {/* App Header Navigation */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-[#09090b]">
                        <button 
                          onClick={() => setCurrentScreen("playstore")}
                          className="flex items-center gap-1 text-[9px] text-[#c4c7c5] hover:text-white font-medium group transition-colors bg-transparent border-none cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-2.5 h-2.5 transition-transform group-hover:-translate-x-0.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                          </svg>
                          Play Store
                        </button>
                        <div className="flex items-center gap-1">
                          <img src="/logo.png" alt="Mini Logo" className="h-4 w-auto object-contain" />
                          <span className="text-[10px] font-bold font-heading truncate max-w-[80px]">Design 1123</span>
                        </div>
                        <button 
                          onClick={() => setCurrentScreen("playstore")}
                          className="w-5 h-5 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[8px] transition-colors border-none cursor-pointer"
                          title="Back to Play Store"
                        >
                          🏪
                        </button>
                      </div>
                      
                      {/* Search Bar inside app */}
                      <div className="p-3 select-none">
                        <div className="h-7.5 bg-white/5 border border-white/10 rounded-full flex items-center px-2.5 text-[9px] text-text-secondary">
                          🔍 Search 10,000+ templates...
                        </div>
                      </div>

                      {/* Interactive Categories Grid inside Phone */}
                      <div className="grid grid-cols-4 gap-1 px-3 pb-2 text-center select-none">
                        {["Political", "Business", "Wishes", "Festival"].map((cat) => {
                          const isActive = activeCategory === cat;
                          return (
                            <button
                              key={cat}
                              onClick={() => setActiveCategory(cat)}
                              className={`px-1.5 py-1 rounded-full text-[8px] font-bold transition-all truncate border cursor-pointer ${
                                isActive 
                                  ? 'bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20 scale-[1.03]' 
                                  : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>

                      {/* Templates Grid inside Phone */}
                      <div className="flex-1 grid grid-cols-2 gap-2 overflow-y-auto px-3 pb-4 scrollbar-none">
                        {filteredTemplates.map((tpl, i) => (
                          <motion.div 
                            key={tpl.title} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className={`aspect-[3/4] rounded-xl relative overflow-hidden shadow-lg border border-white/5 group cursor-pointer ${
                              tpl.appShot ? "bg-black p-0" : "p-2 flex flex-col justify-between"
                            }`}
                          >
                            {/* Template Image Background */}
                            <img 
                              src={tpl.imageUrl} 
                              alt={tpl.title} 
                              className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                                tpl.appShot ? "object-contain" : "object-cover"
                              }`}
                              loading="lazy"
                            />
                            {!tpl.appShot && (
                              <>
                                {/* Tint color blend */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tpl.grad} opacity-20 mix-blend-multiply`} />
                                {/* Text readable overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                                
                                <span className="text-[6px] bg-black/60 px-1 py-0.5 rounded-full w-max text-white relative z-10 border border-white/10">Template</span>
                                <span className="text-[8px] font-heading font-black leading-tight text-white relative z-10 truncate">{tpl.title}</span>
                              </>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                  <div className={`w-full aspect-[4/3] rounded-lg mb-2 relative overflow-hidden flex items-center justify-center ${item.appShot ? "bg-black" : ""}`}>
                    {/* Background Template Image */}
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className={`absolute inset-0 w-full h-full ${item.appShot ? "object-contain" : "object-cover"}`}
                      loading="lazy"
                    />
                    {!item.appShot && (
                      <>
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-40 mix-blend-multiply`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                        <span className="text-[10px] font-heading font-black text-white text-center px-2 relative z-10 leading-tight">{item.title}</span>
                      </>
                    )}
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
