"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { termsSections, LEGAL } from "@/lib/legal";
import { ArrowUp, Scale, Calendar, Mail, FileText, ChevronRight } from "lucide-react";

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Handle active section highlighting on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check which section is currently visible
      for (const section of termsSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Show/hide scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-bg-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full relative pt-32 pb-20 overflow-hidden border-b border-border-glass bg-bg-section/50">
        <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
        {/* Glow meshes */}
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <Scale className="w-4 h-4 text-brand-pink" />
              <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">Agreement & Terms</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 leading-tight">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Please read these Terms & Conditions carefully before using the Design 1123 platform, application, and branding studio services.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-text-secondary border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-pink" />
                <span>Last Updated: <strong className="text-white">{LEGAL.lastUpdated}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-purple" />
                <span>Governing Law: <strong className="text-white">India Jurisdiction</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="w-full py-16 lg:py-24 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 lg:block">
              <div className="sticky top-28 bg-bg-card/30 backdrop-blur-md border border-border-glass rounded-[24px] p-6 lg:p-8 space-y-6">
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white border-b border-white/10 pb-4">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {termsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center justify-between text-left px-3 py-2.5 rounded-xl transition-all duration-300 text-xs font-bold uppercase tracking-wider ${
                        activeSection === section.id
                          ? "bg-white/10 text-white border-l-2 border-brand-pink pl-4"
                          : "text-text-secondary hover:text-white hover:bg-white/5 pl-3"
                      }`}
                    >
                      <span className="truncate">{section.title.replace(/^\d+\.\s*/, "")}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeSection === section.id ? "translate-x-0.5 text-brand-pink" : "opacity-0"
                      }`} />
                    </button>
                  ))}
                </nav>
                <div className="pt-4 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-brand-pink/10 to-brand-purple/5 border border-brand-pink/20 text-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-white mb-2">Need Help?</p>
                    <p className="text-[11px] text-text-secondary mb-3 leading-relaxed">
                      If you have any questions or require clarification regarding these terms.
                    </p>
                    <a 
                      href={`mailto:${LEGAL.contactEmail}`}
                      className="inline-flex items-center gap-1.5 text-xs text-brand-pink font-bold uppercase hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Support</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-12">
              {termsSections.map((section, idx) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
                  className="scroll-mt-28 p-8 lg:p-10 rounded-[24px] bg-bg-card/40 border border-white/5 relative hover:border-white/10 transition-colors duration-300 group"
                >
                  {activeSection === section.id && (
                    <div className="absolute inset-0 border border-brand-pink/30 rounded-[24px] pointer-events-none" />
                  )}

                  <h2 className="text-2xl font-heading font-black text-white mb-6 group-hover:text-brand-pink transition-colors duration-300">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base">
                    {section.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {section.list && (
                    <ul className="mt-6 space-y-3.5">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-3 text-text-secondary text-sm md:text-base">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0 shadow-[0_0_8px_#E91E63]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <p className="mt-6 pt-6 border-t border-white/5 text-xs italic text-text-secondary">
                      {section.footer}
                    </p>
                  )}
                </motion.section>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand-pink text-white flex items-center justify-center shadow-lg shadow-brand-pink/30 hover:bg-brand-dark-pink transition-all hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
