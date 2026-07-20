"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/data";
import {
  MessageSquareHeart,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function FeedbackPage() {
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden bg-bg-dark text-white">
      <Navbar />

      <div className="w-full relative pt-32 pb-16 overflow-hidden border-b border-border-glass bg-bg-section/50">
        <div className="absolute inset-0 noise-bg opacity-35 mix-blend-overlay pointer-events-none" />
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <MessageSquareHeart className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                Share Your Thoughts
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white mb-6 leading-tight">
              User <span className="text-gradient">Feedback</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              Tell us what you loved, what we can improve, or which templates you need next.
              Your feedback helps us make Design 1123 better for everyone.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-16 lg:py-24 relative">
        <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-5xl mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4 space-y-5"
            >
              <div className="glass-card p-6 border border-white/5 space-y-4">
                <h2 className="font-heading font-black text-xl">Need direct help?</h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  For urgent support, call or email us from the contact page.
                </p>
                <div className="space-y-3 text-sm">
                  <a
                    href="tel:+918261090881"
                    className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    8261090881
                  </a>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center gap-3 text-text-secondary hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-brand-orange" />
                    {BRAND.email}
                  </a>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:underline pt-2"
                >
                  Go to Contact Page
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="glass-card p-6 border border-white/5">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-3">
                  What to share
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Template ideas & category requests</li>
                  <li>• App bugs or feature suggestions</li>
                  <li>• Design quality feedback</li>
                  <li>• Business or campaign use cases</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="glass-card p-6 sm:p-8 md:p-10 border border-white/10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-black mb-2">
                    Submit Feedback
                  </h2>
                  <p className="text-text-secondary text-sm">
                    Fill in the form below. We read every message carefully.
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
                        <span className="text-white">{BRAND.email}</span>.
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
                      rows={8}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Write your feedback here..."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/30 transition-colors resize-y min-h-[180px]"
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
