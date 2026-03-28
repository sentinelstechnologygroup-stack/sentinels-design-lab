// src/pages/Packages.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const packages = [
  {
    name: "Lite",
    emphasis: "Entry point",
    description: "A controlled intake option for businesses that need to get online quickly without pretending they are buying the full system.",
    idealFor: "New or smaller businesses that need a clean launch point.",
    included: [
      "Simple launch scope",
      "Lean page count",
      "Mobile-ready layout",
      "Basic contact flow",
      "Clean brand presentation",
    ],
  },
  {
    name: "Starter",
    emphasis: "Foundation",
    description: "A real website build for businesses that need stronger credibility and cleaner structure.",
    idealFor: "Businesses with an outdated or underperforming site.",
    included: [
      "Custom site structure",
      "Lead-focused core pages",
      "SEO-ready foundation",
      "Trust-building page sections",
      "Launch-ready setup",
    ],
  },
  {
    name: "Growth",
    emphasis: "Most popular",
    description: "The best-fit package for businesses that want a website built to support visibility, conversion, and future scale.",
    idealFor: "Businesses actively trying to improve leads and positioning.",
    included: [
      "Conversion-focused site structure",
      "Service page depth",
      "SEO expansion path",
      "PPC-ready page strategy",
      "Stronger intake and CTA paths",
      "Upgrade-ready build foundation",
    ],
    featured: true,
  },
  {
    name: "Authority",
    emphasis: "Scale",
    description: "A more complete digital system for businesses ready to build around growth, expansion, and long-term leverage.",
    idealFor: "Businesses ready to invest in a stronger market position.",
    included: [
      "Broader system planning",
      "Multi-page growth architecture",
      "Higher-trust brand presentation",
      "Stronger support for campaigns",
      "Longer-term expansion structure",
    ],
  },
];

export default function Packages() {
  return (
    <>
      <section className="bg-[#0a0a0f] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Packages
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Clear packages for different stages of business growth
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              The goal is not to bury prospects in options. The goal is to create a clear ladder:
              Lite captures low-friction opportunities, Growth remains the center of gravity, and
              Authority preserves your scale path.
            </p>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-4">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl border p-8 ${
                  pkg.featured
                    ? "border-blue-500/40 bg-blue-500/10"
                    : "border-white/8 bg-[#111118]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-white">{pkg.name}</h2>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                      pkg.featured ? "bg-blue-500/20 text-blue-200" : "bg-white/6 text-white/45"
                    }`}
                  >
                    {pkg.emphasis}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-white/55">{pkg.description}</p>

                <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Ideal for</p>
                  <p className="mt-2 text-sm text-white/65">{pkg.idealFor}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={`${createPageUrl("Contact")}?package=${encodeURIComponent(pkg.name)}&source=packages`}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                      pkg.featured
                        ? "bg-white text-[#0a0a0f] hover:bg-white/90"
                        : "border border-white/10 text-white/80 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    Start with {pkg.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/8 bg-white/[0.03] p-8 lg:p-10">
            <h3 className="text-2xl font-semibold text-white">How the ladder is supposed to work</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-white">Lite captures the low-hanging fruit</p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Without forcing you to cheapen the rest of the brand.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Growth is the real sales target</p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  It should be the best-fit package for serious businesses.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Authority protects the top end</p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  So larger clients never feel like SDL only sells entry-level work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which package fits?"
        description="Tell us where the business is now and what you are trying to achieve. We’ll help point you toward the right starting point."
        buttonText="Talk Through the Options"
        buttonPage="Contact"
      />
    </>
  );
}