"use client";

import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#04040c]">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette over grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#04040c_100%)]" />

      {/* Center glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-violet-700/[0.05] rounded-full blur-[100px] pointer-events-none" />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,179,255,0.15) 50%, transparent)" }}
        animate={{ top: ["15%", "85%", "15%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner brackets */}
      <div className="absolute top-28 left-6 md:left-12 w-12 h-12 border-l border-t border-blue-400/15" />
      <div className="absolute top-28 right-6 md:right-12 w-12 h-12 border-r border-t border-blue-400/15" />
      <div className="absolute bottom-12 left-6 md:left-12 w-12 h-12 border-l border-b border-blue-400/15" />
      <div className="absolute bottom-12 right-6 md:right-12 w-12 h-12 border-r border-b border-blue-400/15" />

      {/* Side floating stats */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-6 xl:left-16 hidden xl:block"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="flex flex-col gap-3">
          {[
            { label: "PERF", value: "99" },
            { label: "TTI", value: "0.8s" },
            { label: "UPTIME", value: "99.9%" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className="w-1 h-1 rounded-full bg-blue-400/60 animate-pulse" />
              <span className="text-[9px] font-mono text-white/25 tracking-widest">{s.label}</span>
              <span className="text-[9px] font-mono text-blue-300/70 ml-auto">{s.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center pt-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-950/30 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-300/60">
              Sentinels Design Lab
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-[1.05] text-white"
        >
          We build digital platforms
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              that perform.
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,210,255,0.5), transparent)" }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.2, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 text-lg md:text-xl text-white/30 max-w-xl mx-auto leading-relaxed font-light"
        >
          Modern websites, operational tools, and vertical platforms — engineered
          for performance, conversion, and long-term growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={createPageUrl("StartProject")}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-sm text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              boxShadow: "0 0 30px rgba(59,130,246,0.25), 0 0 60px rgba(59,130,246,0.08)",
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 40px rgba(59,130,246,0.45), 0 0 80px rgba(59,130,246,0.15)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 30px rgba(59,130,246,0.25), 0 0 60px rgba(59,130,246,0.08)"}
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href={createPageUrl("Work")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white/50 border border-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Metric row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-20 inline-flex items-center divide-x divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {[
            { val: "< 1s", label: "Load Time" },
            { val: "99", label: "Perf Score" },
            { val: "50+", label: "Projects" },
          ].map((m) => (
            <div key={m.label} className="px-8 py-4 text-center bg-white/[0.02]">
              <div className="text-lg font-bold text-white">{m.val}</div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-white/20 mt-0.5">{m.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-16"
        >
          <ArrowDown className="w-4 h-4 text-white/10 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}