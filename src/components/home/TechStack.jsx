"use client";

import React from "react";
import { motion } from "framer-motion";

const techs = [
  { name: "React", desc: "Component UI", color: "#61dafb" },
  { name: "Next.js", desc: "Full-stack framework", color: "#ffffff" },
  { name: "Tailwind", desc: "Utility CSS", color: "#38bdf8" },
  { name: "Vercel", desc: "Edge deployment", color: "#ffffff" },
  { name: "TypeScript", desc: "Type-safe code", color: "#3178c6" },
  { name: "Node.js", desc: "Server runtime", color: "#68a063" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#05050d] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,179,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/60 block mb-4">
            // TECH_STACK
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Modern stack, built to last
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative text-center p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.12] transition-all duration-400 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0d0d18 0%, #080810 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${tech.color}08 0%, transparent 70%)` }}
              />
              {/* Top accent */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `${tech.color}80` }}
              />
              <div className="relative text-base font-semibold text-white mb-1" style={{ textShadow: `0 0 20px ${tech.color}40` }}>
                {tech.name}
              </div>
              <div className="relative text-[10px] font-mono text-white/25 uppercase tracking-wider">{tech.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}