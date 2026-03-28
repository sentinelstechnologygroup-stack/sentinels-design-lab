// src/components/sections/ProcessSteps.jsx
"use client";

import React from "react";

const steps = [
  {
    title: "Evaluate",
    desc: "We assess your current site, goals, and constraints to identify the right direction.",
  },
  {
    title: "Plan",
    desc: "We define structure, content flow, and conversion strategy before writing code.",
  },
  {
    title: "Build",
    desc: "We execute clean, production-ready builds with real deployment in mind.",
  },
  {
    title: "Launch & Support",
    desc: "We deploy, refine, and support ongoing improvements if needed.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-[#04040c] border-t border-white/[0.06]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            A clear, structured process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="text-white/30 text-sm mb-2">
                0{i + 1}
              </div>
              <h3 className="text-white font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}