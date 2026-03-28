// src/components/sections/WhyHireSDL.jsx
"use client";

import React from "react";

const items = [
  {
    title: "Production-Ready Builds",
    desc: "We don’t deliver mockups—we deliver clean, deployable, real-world websites that work on day one.",
  },
  {
    title: "Conversion-First Thinking",
    desc: "Every layout, section, and CTA is structured to guide real customer action—not just look good.",
  },
  {
    title: "Cleanup & Rescue Capability",
    desc: "Broken builds, half-finished projects, and messy exports—we fix, normalize, and deploy them properly.",
  },
  {
    title: "Fast, Pragmatic Execution",
    desc: "No bloated agency timelines. We move quickly, with clarity, and without unnecessary process overhead.",
  },
  {
    title: "Built for Real Business Use",
    desc: "Everything is designed for operators—lead flow, credibility, and long-term usability.",
  },
];

export default function WhyHireSDL() {
  return (
    <section className="py-20 bg-[#04040c] border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Why Clients Hire SDL
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            Built for execution, not just design
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}