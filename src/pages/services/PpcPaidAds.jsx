// src/pages/services/PpcPaidAds.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const included = [
  "Offer and landing page alignment review",
  "Campaign direction planning",
  "Landing page messaging structure",
  "CTA hierarchy and lead flow recommendations",
  "Form friction reduction strategy",
  "Page sections built for trust and action",
  "Conversion path review",
  "Tracking readiness recommendations",
];

const outcomes = [
  "Improves the chance that paid clicks become real inquiries",
  "Reduces wasted traffic caused by poor destination pages",
  "Clarifies the offer so prospects know why they should act",
  "Supports better campaign economics over time",
];

const addOns = [
  "PPC landing page builds",
  "Analytics and event tracking",
  "CRM or lead routing improvements",
  "Follow-up funnel support",
];

export default function PpcPaidAds() {
  return (
    <>
      <section className="bg-[#0a0a0f] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              PPC / Paid Ads
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Paid ads that send traffic to pages built to convert
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              Good ads without the right landing experience waste money. This service is built around
              clearer offers, stronger landing paths, and conversion-focused structure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("Contact")}?service=PPC%20%2F%20Paid%20Ads&source=service-ppc`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Start a PPC Project
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
              "Businesses spending on ads without consistent lead quality",
              "Companies with strong services but weak landing pages",
              "Teams that want a cleaner sales path from click to inquiry",
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
        title="Running ads or planning to?"
        description="Make sure the destination page is built to support the spend before you push more traffic into a weak funnel."
        buttonText="Start a PPC Project"
        buttonPage="Contact"
      />
    </>
  );
}