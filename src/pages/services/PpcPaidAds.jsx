// src/pages/services/PpcPaidAds.jsx
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  BadgeDollarSign,
  Filter,
  Workflow,
} from "lucide-react";
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
  "Follow-up Filter support",
];

const fitItems = [
  "Businesses spending on ads without consistent lead quality",
  "Companies with strong services but weak landing pages",
  "Teams that want a cleaner sales path from click to inquiry",
];

const positioning = [
  {
    icon: MousePointerClick,
    title: "Traffic needs a destination",
    text: "Good ads still fail when the landing page does not support trust and action.",
  },
  {
    icon: Filter,
    title: "Built around conversion flow",
    text: "The page should reduce friction, clarify the offer, and make inquiry easier.",
  },
  {
    icon: BadgeDollarSign,
    title: "Protects ad spend",
    text: "Cleaner landing paths help reduce wasted clicks and improve campaign efficiency.",
  },
];

const process = [
  "We identify where the click path is leaking trust, clarity, or action.",
  "SDL sharpens the offer, page structure, and CTA flow around conversion.",
  "Then tracking and follow-up support can be layered in more cleanly.",
];

export default function PpcPaidAds() {
  return (
    <>
      <section className="bg-[#0a0a0f] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              PPC / Paid Ads
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Paid ads that send traffic to pages built to convert
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              Good ads without the right landing experience waste money. This service is built around
              clearer offers, stronger landing paths, and conversion-focused structure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                  "PPC / Paid Ads"
                )}&source=service-ppc-hero`}
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
            {positioning.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/8 bg-[#111118] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h2 className="mt-5 text-base font-medium text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {fitItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/8 bg-[#111118] p-6 text-white/65"
              >
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
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  What this actually does
                </p>
                <ul className="mt-6 space-y-4">
                  {outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
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
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/8 bg-[#111118] p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-blue-400" />
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  How PPC projects usually improve
                </p>
              </div>

              <ul className="mt-6 space-y-4">
                {process.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Best next step</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Running ads or planning to?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Make sure the destination page is built to support the spend before you push more
                traffic into a weak Filter.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                    "PPC / Paid Ads"
                  )}&source=service-ppc-final`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#0a0a0f] transition hover:bg-white/90"
                >
                  Start a PPC Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                    "Website Design & Development"
                  )}&source=service-ppc-crosssell`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  Need a Landing Page Too?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Running ads or planning to?"
        description="Use Start Project so SDL gets the PPC service context, business objective, and next-step needs up front."
        buttonText="Start a PPC Project"
        buttonHref={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
          "PPC / Paid Ads"
        )}&source=service-ppc-cta`}
        secondaryText="Explore Packages"
        secondaryHref={createPageUrl("Packages")}
      />
    </>
  );
}