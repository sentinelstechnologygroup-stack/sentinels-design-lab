// src/components/home/HomePackagesPreview.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";

const packages = [
  {
    name: "Lite",
    emphasis: "Entry point",
    description: "For businesses that need to launch quickly and cleanly.",
  },
  {
    name: "Starter",
    emphasis: "Foundation",
    description: "For businesses that need a real website and a stronger digital baseline.",
  },
  {
    name: "Growth",
    emphasis: "Most popular",
    description: "For businesses that want visibility, lead flow, and an upgrade-ready build.",
    featured: true,
  },
  {
    name: "Authority",
    emphasis: "Scale",
    description: "For businesses ready for a fuller digital system and longer-term growth path.",
  },
];

export default function HomePackagesPreview() {
  return (
    <section className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Packages
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              A 4-tier ladder built to capture the right fit without cheapening the brand
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              Lite captures low-hanging fruit. Growth remains the center of gravity. Authority protects
              the top end.
            </p>
          </div>

          <Link
            href={createPageUrl("Packages")}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
          >
            View Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl border p-7 ${
                pkg.featured
                  ? "border-blue-500/40 bg-blue-500/10"
                  : "border-white/8 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                    pkg.featured ? "bg-blue-500/20 text-blue-200" : "bg-white/6 text-white/50"
                  }`}
                >
                  {pkg.emphasis}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-white/55">{pkg.description}</p>

              <div className="mt-7">
                <Link
                  href={`${createPageUrl("StartProject")}?package=${encodeURIComponent(pkg.name)}&source=home-packages`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-blue-300"
                >
                  Start with {pkg.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}