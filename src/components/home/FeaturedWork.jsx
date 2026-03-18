// src/components/home/FeaturedWork.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const problems = [
  "Outdated design that kills trust",
  "No clear call-to-action",
  "Slow, cluttered pages that lose leads",
];

const fixes = [
  "Modern visual credibility",
  "Clear conversion path",
  "Performance-focused build",
];

export default function FeaturedWork() {
  return (
    <section className="py-32 bg-[#080810] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/70 mb-4">
            Why Most Sites Fail
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Most business websites look fine —
            <br className="hidden md:block" />
            but fail where it matters
          </h2>
          <p className="mt-5 text-white/35 max-w-2xl mx-auto text-base leading-relaxed">
            A website should build trust, make the next step obvious, and help turn
            visitors into leads.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">What’s broken</h3>
            <div className="space-y-4">
              {problems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                  <p className="text-white/55 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">What we fix</h3>
            <div className="space-y-4">
              {fixes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <p className="text-white/75 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-white/50 text-sm leading-relaxed">
              We redesign outdated websites into modern, high-performing sites that
              look credible and help generate business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}