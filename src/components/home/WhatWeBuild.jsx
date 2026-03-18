// src/components/home/WhatWeBuild.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const offerPoints = [
  "Modern, high-end design",
  "Mobile optimized",
  "SEO-ready foundation",
  "Built to convert visitors into leads",
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="py-32 bg-[#04040c] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_50%,#04040c_100%)]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500/30" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/50">
              Core Offer
            </span>
            <div className="h-px w-8 bg-blue-500/30" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Website Build — Starting at $2,500
          </h2>

          <p className="mt-5 text-white/40 max-w-2xl mx-auto text-base leading-relaxed font-light">
            A clean, modern website built to make your business look credible,
            earn trust quickly, and generate real leads.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {offerPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-white/80 text-sm md:text-base">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}