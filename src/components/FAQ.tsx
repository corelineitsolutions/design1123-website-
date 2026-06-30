"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "./ui/SectionWrapper";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "What is Design 1123?",
      a: "Design 1123 is a professional template creation application built for business owners, political leaders, and individuals. It provides thousands of ready-to-use marketing graphics, festival greetings, campaign posters, and banners that you can customize in minutes."
    },
    {
      q: "Do I need any graphic design experience?",
      a: "No, none at all. Our templates are created by expert designers. All you have to do is select a design, fill in your text details, swap images if needed, and export. The layout adjusts automatically."
    },
    {
      q: "How does the Custom Footer Feature work?",
      a: "Inside the app settings, you can save your business details (logo, contact number, address, website, tagline, etc.) once. The app will automatically inject and format this brand profile header/footer at the bottom of every template you load, saving you repetitive work."
    },
    {
      q: "Are new templates added regularly?",
      a: "Yes, our creative design team publishes brand new layouts, trending political posters, daily festival greetings, and hot retail offers every single day."
    },
    {
      q: "What formats can I export my graphics in?",
      a: "You can download all your customized templates in crisp, ultra-high-definition (HD) image formats (PNG/JPG) perfect for print banners and digital sharing on WhatsApp, Facebook, or Instagram."
    },
    {
      q: "Is Design 1123 free to download?",
      a: "Yes! The Design 1123 application is free to download. We offer a generous range of free templates alongside our premium packages for professional campaigns and corporate branding."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq" className="bg-bg-dark border-b border-border-glass relative">
      <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Section 13</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mt-2 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about the Design 1123 application and layout builder.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="glass-card overflow-hidden border border-white/5 shadow-lg rounded-2xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-heading font-black text-white text-base md:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-orange transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-text-secondary text-sm md:text-base leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
