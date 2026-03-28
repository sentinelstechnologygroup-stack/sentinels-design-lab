// src/pages/services/BrandingIdentity.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const included = [
  "Brand direction discovery",
  "Logo / identity guidance or refinement",
  "Color and typography system guidance",
  "Website visual consistency planning",
  "Messaging and tone alignment",
  "Supporting brand usage recommendations",
  "Trust and professionalism improvements across key touchpoints",
];

const outcomes = [
  "Improves perception and credibility",
  "Makes the business feel more established and consistent",
  "Creates stronger continuity across site, ads, and collateral",
  "Helps future marketing look deliberate instead of pieced together",
];

const addOns = [
  "Website redesign integration",
  "Marketing collateral",
  "Ad creative direction",
  "Social / profile alignment support",
];

export default function BrandingIdentity() {
  return (
    <>
      <section className="bg-[#0a0a0f] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Branding & Identity
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Branding and identity that makes the business look aligned, legitimate, and ready to scale
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              Branding is not just a logo. It is the visual and verbal system that helps prospects trust
              what they are seeing and understand who you are.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("Contact")}?service=Branding%20%26%20Identity&source=service-branding`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Start a Branding Project
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
              "Businesses with inconsistent or dated branding",
              "New brands that need a stronger launch identity",
              "Companies redesigning their website and needing visual alignment",
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
        title="Need the business to look more aligned before you scale the site?"
        description="A cleaner identity system makes the whole digital presence feel more deliberate, more credible, and easier to trust."
        buttonText="Start a Branding Project"
        buttonPage="Contact"
      />
    </>
  );
}