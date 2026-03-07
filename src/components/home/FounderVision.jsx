"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { text: "The future isn't coming.", delay: 0 },
  { text: "It's already here.", delay: 0.15, accent: true },
];

const pillars = [
  "The tools exist.",
  "The technology exists.",
  "The opportunity exists.",
];

export default function FounderVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden bg-[#04040c]">
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Deep glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-blue-500/[0.06] rounded-full blur-[120px]" />
      </div>

      {/* Horizontal rule top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3) 50%, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="h-px w-12 bg-blue-500/30" />
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-blue-400/50">
            Founder Vision
          </span>
          <div className="h-px w-12 bg-blue-500/30" />
        </motion.div>

        {/* Hero lines */}
        <div className="mb-16 space-y-2">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 + line.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${
                line.accent
                  ? "bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 mb-16"
        >
          {pillars.map((p, i) => (
            <React.Fragment key={p}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="px-6 py-3 text-base md:text-lg text-white/50 font-light"
              >
                {p}
              </motion.div>
              {i < pillars.length - 1 && (
                <div className="hidden sm:block w-px h-4 bg-white/10" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="h-px max-w-xs mx-auto mb-16"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,179,255,0.25), transparent)" }}
        />

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed"
        >
          The only limitation left is imagination.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-4 text-base text-white/25 font-light"
        >
          — Sentinels Design Lab
        </motion.p>
      </div>

      {/* Horizontal rule bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.15) 50%, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
      />
    </section>
  );
}