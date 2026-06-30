"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "./ui/SectionWrapper";

export function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 100, suffix: "+", label: "Categories" },
    { value: 10000, suffix: "+", label: "Premium Templates" },
    { value: 50000, suffix: "+", label: "Happy Users" },
    { value: 50, suffix: "+ Daily", label: "New Templates" },
    { value: 24, suffix: "/7", label: "Support Desk" },
  ];

  return (
    <SectionWrapper id="stats" className="py-20 bg-[#101010] border-b border-border-glass relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 animated-gradient-bg opacity-5 noise-bg" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl font-heading font-black text-white drop-shadow-[0_0_15px_rgba(255,138,0,0.4)]">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-text-secondary font-bold uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
