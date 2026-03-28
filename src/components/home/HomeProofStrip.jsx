// src/components/home/HomeProofStrip.jsx
"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Built for service businesses",
  "SEO and PPC aware page architecture",
  "Clear scope and stronger offer structure",
  "Designed to qualify leads instead of collecting blind inquiries",
];

export default function HomeProofStrip() {
  return (
    <section className="bg-[#0d0d14] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-sm text-white/70"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}