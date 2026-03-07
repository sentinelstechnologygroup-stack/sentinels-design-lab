"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, Gauge, Building2, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const values = [
  {
    icon: Sparkles,
    title: "Simplicity",
    description: "Clean layouts, clear messaging, and intentional design. We strip away complexity to focus on what matters.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Fast loading, optimized assets, and minimal overhead. Speed is a feature, not an afterthought.",
  },
  {
    icon: Building2,
    title: "Structure",
    description: "Scalable architecture built with code, not page builders. Every project is designed to grow.",
  },
  {
    icon: Target,
    title: "Longevity",
    description: "Codebases designed to evolve over time. We build for the long term, not just the launch.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "<1s", label: "Average Load Time" },
  { value: "100%", label: "Custom Built" },
  { value: "24/7", label: "Ongoing Support" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
                About SDL
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                We engineer digital platforms for businesses that demand better.
              </h1>
              <p className="text-lg text-white/45 leading-relaxed">
                Sentinels Design Lab (SDL) is a digital design and development studio that builds 
                modern, high-performance websites, applications, and digital infrastructure for small 
                businesses, organizations, and specialized industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0d0d14] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/30">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
                Clean, scalable, high-performance digital platforms
              </h2>
              <p className="text-white/45 leading-relaxed mb-6">
                We exist to create production-grade web experiences for businesses that traditionally 
                receive low-quality solutions. Too many companies are stuck with template websites, 
                page builders, and outdated platforms that don't serve their business goals.
              </p>
              <p className="text-white/45 leading-relaxed">
                SDL combines design discipline, performance engineering, and operational thinking 
                to deliver digital infrastructure that actually works — that generates leads, 
                supports operations, and scales with the business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/5 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                  <p className="text-white/60 text-lg italic leading-relaxed">
                    "Modern development practices, design discipline, and performance-focused engineering — 
                    delivered in a lean, independent studio model."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-32 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Design Philosophy"
            title="Built on principles, not trends"
            description="Every decision we make is guided by these core principles."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#111118] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STG Relationship */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/20 mb-4 block">
              Part of
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Sentinels Technology Group</h2>
            <p className="text-white/40 leading-relaxed max-w-2xl mx-auto mb-8">
              SDL is part of the Sentinels Technology Group ecosystem. Long-term, SDL projects 
              integrate with the Aurora platform, enabling AI-powered business tools, operational 
              automation, analytics, and cross-site infrastructure.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-blue-400/60">
              <span>Learn more about our ecosystem</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}