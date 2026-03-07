"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Hammer, TreePine, Truck, Briefcase } from "lucide-react";

const industries = [
  { icon: Home, label: "Home Services" },
  { icon: Hammer, label: "Contractors" },
  { icon: TreePine, label: "Land Design" },
  { icon: Truck, label: "Logistics" },
  { icon: Briefcase, label: "Professional Services" },
];

export default function IndustriesStrip() {
  return (
    <section className="py-24 bg-[#04040c] border-y border-white/[0.04] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500/30" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/50">Industries</span>
            <div className="h-px w-8 bg-blue-500/30" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Built for businesses that build
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-white/[0.06] hover:border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
            >
              <ind.icon className="w-3.5 h-3.5 text-blue-400/50" />
              <span className="text-sm text-white/40 hover:text-white/60 transition-colors font-light">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}