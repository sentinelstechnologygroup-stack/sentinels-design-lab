"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Wrench, Layers } from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Websites",
    description: "Modern, high-performance websites built with Next.js, React, and Tailwind — optimized for SEO, PPC, and mobile.",
    accent: "#3b82f6",
    tags: ["SEO-Optimized", "Sub-1s Load", "Mobile-First"],
  },
  {
    icon: Wrench,
    title: "Operational Tools",
    description: "Service area maps, quoting calculators, booking flows, dashboards, and lead capture systems — websites as business tools.",
    accent: "#8b5cf6",
    tags: ["Lead Capture", "Dashboards", "Booking Flows"],
  },
  {
    icon: Layers,
    title: "Vertical Platforms",
    description: "Industry-specific web platforms that scale across clients — reusable infrastructure with customized branding for 50+ trades.",
    accent: "#06b6d4",
    tags: ["50+ Industries", "White-Label", "Scalable"],
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-32 bg-[#04040c] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_50%,#04040c_100%)]" />

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
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/50">What We Build</span>
            <div className="h-px w-8 bg-blue-500/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Digital infrastructure for real businesses
          </h2>
          <p className="mt-5 text-white/30 max-w-lg mx-auto text-base leading-relaxed font-light">
            We don't build brochure websites. We build platforms that drive operations, generate leads, and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
              style={{ background: "linear-gradient(160deg, #0a0a14 0%, #07070f 100%)" }}
            >
              {/* Top line accent */}
              <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}50, transparent)` }} />

              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${item.accent}12` }}
              />

              <div className="p-8">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
                  style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}20` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed mb-7 font-light">{item.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                      style={{ color: `${item.accent}99`, borderColor: `${item.accent}20`, background: `${item.accent}08` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}