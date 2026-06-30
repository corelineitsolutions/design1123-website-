"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      quote: "Design 1123 has completely solved my marketing graphic needs. As a medical store owner, I can customize product offers and festival greetings in less than 2 minutes. The auto-applied footer keeps my store info consistent.",
      author: "Rajesh Kumar",
      role: "Pharmacy Owner, New Delhi",
      rating: 5
    },
    {
      quote: "I use this platform daily to deploy political posters, leader congratulations banners, and public meeting alerts for my constituency. The templates look highly professional and take zero design skills to adjust.",
      author: "Vikram Patil",
      role: "Political Leader, Maharashtra",
      rating: 5
    },
    {
      quote: "As a student coordinator, creating greetings, volunteer drives, and event invitations used to take hours. Now, with Design 1123, I select a template, add details, and export instantly. Highly recommend!",
      author: "Aditi Sharma",
      role: "University Student, Bangalore",
      rating: 5
    },
    {
      quote: "This is a lifesaver for small retail business owners. I run a mobile shop and now launch discount flyer ads in minutes. My sales inquiries have grown since using these professional templates.",
      author: "Sanjay Mehta",
      role: "Mobile Junction, Gujarat",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="testimonials" className="bg-[#101010] border-b border-border-glass relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-pink/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Section 12</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
            Trusted by <span className="text-gradient">Thousands of Users</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Read stories from local shop owners, regional leaders, students, and businesses growing their presence.
          </p>
        </div>

        {/* Testimonial slider view */}
        <div className="max-w-4xl mx-auto min-h-[250px] relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <GlassCard className="p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <Quote className="absolute right-8 top-8 w-16 h-16 text-white/5 pointer-events-none" />
                
                <div className="flex flex-col gap-6">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                      <span key={i} className="text-brand-orange text-lg">★</span>
                    ))}
                  </div>

                  {/* Feedback text */}
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic">
                    "{reviews[currentIndex].quote}"
                  </p>

                  <div className="h-px bg-white/10 w-full" />

                  {/* Profile info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-orange to-brand-pink flex items-center justify-center font-heading font-black text-white shadow-lg">
                      {reviews[currentIndex].author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-white text-base">{reviews[currentIndex].author}</h4>
                      <p className="text-xs text-text-secondary mt-0.5">{reviews[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-brand-orange w-8 shadow-[0_0_10px_#FF8A00]" : "bg-white/10 hover:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
