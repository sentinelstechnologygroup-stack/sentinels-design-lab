"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Compass, label: "Strategy", num: "01", description: "Define goals, audience, and competitive positioning." },
  { icon: Paintbrush, label: "Design", num: "02", description: "Clean layouts, clear messaging, conversion-driven UX." },
  { icon: Code2, label: "Engineering", num: "03", description: "Performance-optimized builds with modern frameworks." },
  { icon: Rocket, label: "Launch", num: "04", description: "Deploy, test, optimize, and provide ongoing support." },
];

export default function ApproachSection() {
  return (
    <section className="py-32 bg-[#06060e] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500/30" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/50">Our Approach</span>
            <div className="h-px w-8 bg-blue-500/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Strategy to launch, engineered right
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
              style={{ background: "linear-gradient(160deg, #0a0a14 0%, #070710 100%)" }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[2.2rem] -right-2 w-4 h-px bg-white/[0.06] z-10" />
              )}

              <div className="text-[10px] font-mono text-white/15 tracking-widest mb-5">{step.num}</div>

              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center mb-5">
                <step.icon className="w-4 h-4 text-blue-400/70" />
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{step.label}</h3>
              <p className="text-white/30 text-sm leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}