"use client";

import { motion } from "framer-motion";
import { blogs } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { MotionCard, Reveal, SectionHeading, Stagger, StaggerItem } from "@/components/ui/motion";

export function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-gradient-to-b from-brand-plum/[0.05] to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <SectionHeading center={false} title="Featured blogs" />
          <Reveal>
            <Button variant="secondary" href="#blog">
              Explore more
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          {blogs.map((post, i) => (
            <StaggerItem key={post.title}>
              <MotionCard className="hover-lift group overflow-hidden rounded-2xl bg-white shadow-md">
                <div className="relative h-44 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 gradient-brand"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span
                    className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-plum"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {post.date}
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-ink transition group-hover:text-brand-plum">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">{post.excerpt}</p>
                  <motion.span
                    className="mt-4 inline-block text-sm font-semibold text-brand-flame"
                    whileHover={{ x: 6 }}
                  >
                    Read more →
                  </motion.span>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
