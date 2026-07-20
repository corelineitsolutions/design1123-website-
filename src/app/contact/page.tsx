"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Building2,
  Headphones,
  ArrowRight,
  MessageSquareHeart,
} from "lucide-react";

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Mobile Number",
      value: "8261090881",
      href: "tel:+918261090881",
      hint: "Tap to call · Mon–Sat, 10 AM – 7 PM IST",
    },
    {
      icon: Mail,
      label: "Email ID",
      value: "info@design1123.com",
      href: "mailto:info@design1123.com",
      hint: "We usually reply within 24 hours",
    },
    {
      icon: Headphones,
      label: "Support",
      value: "App & Template Help",
      href: "https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN",
      hint: "Download issues, billing, template requests",
    },
    {
      icon: MapPin,
      label: "Service Region",
      value: "India (Pan-India)",
      href: undefined,
      hint: "Serving businesses, creators & campaigns nationwide",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-bg-dark text-white">
      <Navbar />

      <div className="w-full relative pt-32 pb-16 overflow-hidden border-b border-border-glass bg-bg-section/50">
        <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <MessageSquare className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 leading-tight">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              Have a question about Design 1123 or need help with templates?
              Reach us anytime — we&apos;re here for businesses, creators, and campaign teams.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-16 lg:py-24 relative">
        <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">
                  Reach Design 1123
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Prefer a call or email? Use the details below. For product suggestions and
                  template requests, visit our feedback page.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? {
                        href: item.href,
                        ...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {}),
                      }
                    : {};

                  return (
                    <Wrapper
                      key={item.label}
                      {...(wrapperProps as any)}
                      className="glass-card p-5 flex gap-4 items-start border border-white/5 hover:border-brand-orange/30 transition-all duration-300 block"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-text-secondary font-bold mb-1">
                          {item.label}
                        </p>
                        <p className="text-white font-heading font-bold text-lg break-all">
                          {item.value}
                        </p>
                        <p className="text-xs text-text-secondary mt-1">{item.hint}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div className="glass-card p-5 border border-white/5 space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-brand-pink" />
                  <h3 className="font-heading font-black text-sm uppercase tracking-wider">
                    Company
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  <span className="text-white font-semibold">Coreline IT Solutions, Pune</span>
                  <br />
                  Parent company of Design 1123 — premium template creation platform for business branding, political campaigns,
                  festivals, and personal greetings.
                </p>
                <div className="flex items-center gap-2 text-xs text-text-secondary pt-2 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 text-brand-purple" />
                  Support hours: Monday – Saturday, 10:00 AM – 7:00 PM IST
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="glass-card p-6 sm:p-8 border border-white/10 h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center mb-5">
                  <MessageSquareHeart className="w-6 h-6 text-brand-orange" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">
                  Share Feedback
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  Have ideas, template requests, or suggestions? Use our dedicated feedback page
                  to send your thoughts to the Design 1123 team.
                </p>
                <a href="/feedback" className="w-full sm:w-auto">
                  <Button size="lg" variant="primary" className="w-full sm:w-auto px-8">
                    Go to Feedback
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
