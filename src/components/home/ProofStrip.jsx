// src/components/sections/ProofStrip.jsx
"use client";

import React from "react";
import Link from "next/link";

const projects = [
  {
    name: "ELI Land Design",
    industry: "Landscape Architecture",
    summary: "Full hybrid redesign, structure cleanup, and production deployment stabilization.",
    href: "/projects/eli-land-design",
  },
  {
    name: "My Buddy’s Mobile Detail",
    industry: "Local Service Business",
    summary: "Base44 cleanup, routing fixes, pricing clarity, and live deployment recovery.",
    href: "/projects/mobile-detail",
  },
  {
    name: "Premier Kitchens",
    industry: "Home Remodeling",
    summary: "High-end layout refinement, typography system, and conversion clarity improvements.",
    href: "/projects/premier-kitchens",
  },
];

export default function ProofStrip() {
  return (
    <section className="py-20 bg-black border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Proof in Practice
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            Real projects. Real outcomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              className="group p-6 bg-white/[0.02] border border-white/[0.06] rounded-xl hover:border-white/20 transition"
            >
              <p className="text-sm text-white/40 mb-1">{p.industry}</p>
              <h3 className="text-white font-semibold text-lg">
                {p.name}
              </h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                {p.summary}
              </p>
              <span className="text-sm text-white mt-4 inline-block opacity-70 group-hover:opacity-100">
                View Project →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}