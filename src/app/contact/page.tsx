"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/data";
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Building2,
  Send,
  CheckCircle2,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !feedback.trim()) return;

    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Subject: ${subject.trim() || "Website Feedback"}`,
      "",
      "Feedback:",
      feedback.trim(),
    ].join("\n");

    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      subject.trim() || "Design 1123 Website Feedback"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setFeedback("");
  };

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

      {/* Hero */}
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
              Have a question about Design 1123, need help with templates, or want to share feedback?
              Reach us anytime — we&apos;re here to help businesses, creators, and campaign teams.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full py-16 lg:py-24 relative">
        <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">
                  Reach Design 1123
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Prefer a call or email? Use the details below. For product suggestions and
                  template requests, use the feedback form.
                </p>
              </div>

              <div className="space-y-4">
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

            {/* Feedback form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="glass-card p-6 sm:p-8 md:p-10 border border-white/10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-black mb-2">
                    Send Feedback
                  </h2>
                  <p className="text-text-secondary text-sm">
                    Tell us what you loved, what we can improve, or which templates you need next.
                    Your message helps us build a better Design 1123.
                  </p>
                </div>

                {submitted ? (
                  <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-6 flex gap-4 items-start mb-6">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-white mb-1">
                        Thanks for your feedback!
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Your email app should open so you can send the message to{" "}
                        <span className="text-white">{BRAND.email}</span>. You can also send another
                        message below.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-3 text-sm font-bold text-brand-orange hover:underline"
                      >
                        Write another message
                      </button>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Template request, bug report, suggestion..."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="feedback" className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">
                      Feedback *
                    </label>
                    <textarea
                      id="feedback"
                      required
                      rows={6}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Write your feedback here..."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-colors resize-y min-h-[140px]"
                    />
                  </div>

                  <Button type="submit" size="lg" variant="primary" className="w-full sm:w-auto px-10">
                    <Send className="w-4 h-4" />
                    Submit Feedback
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
