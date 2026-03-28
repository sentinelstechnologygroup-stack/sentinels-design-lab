// src/pages/services/WebsiteDesignDevelopment.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const included = [
  "Strategic site planning and page structure",
  "Custom design direction aligned with brand positioning",
  "Responsive mobile-first implementation",
  "Conversion-focused layouts and CTA placement",
  "Core trust-building sections and messaging structure",
  "Lead form setup",
  "Technical launch support",
  "Basic on-page SEO foundations",
  "Clean content layout for future expansion",
];

const outcomes = [
  "Improves first impressions and trust",
  "Gives paid traffic a stronger chance to convert",
  "Creates a foundation for SEO and service-area growth",
  "Reduces confusion and makes the next step obvious",
  "Makes future upgrades easier instead of forcing a rebuild later",
];

const addOns = [
  "Service area SEO pages",
  "PPC landing pages",
  "Review / reputation integration",
  "Hosting & maintenance",
  "Conversion tracking and analytics setup",
];

export default function WebsiteDesignDevelopment() {
  return (
    <>
      <section className="bg-[#0a0a0f] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Website Design & Development
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Website design and development for businesses that need more than a pretty site
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              We build websites that support credibility, lead generation, SEO structure, and future growth.
              Every build is designed to be clean, strategic, and ready to work as part of a real business system.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("Contact")}?service=Website%20Design%20%26%20Development&source=service-website-design`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Start a Website Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href={createPageUrl("Packages")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
              >
                Explore Packages
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              "Service businesses with an outdated or underperforming website",
              "Companies running ads without a conversion-ready destination",
              "Businesses that need stronger online credibility before growth campaigns",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/8 bg-[#111118] p-6 text-white/65">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/8 bg-[#111118] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">What’s included</p>
              <ul className="mt-6 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">What this actually does</p>
                <ul className="mt-6 space-y-4">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Common add-ons</p>
                <ul className="mt-6 space-y-4">
                  {addOns.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a better site foundation before you push harder on growth?"
        description="Start with the website build, then layer in SEO pages, paid traffic paths, and ongoing support the right way."
        buttonText="Start a Website Project"
        buttonPage="Contact"
      />
    </>
  );
}