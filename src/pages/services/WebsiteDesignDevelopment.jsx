// src/pages/services/WebsiteDesignDevelopment.jsx
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
} from "lucide-react";
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

const fitItems = [
  "Service businesses with an outdated or underperforming website",
  "Companies running ads without a conversion-ready destination",
  "Businesses that need stronger online credibility before growth campaigns",
];

const process = [
  "We define the business goal, scope, and conversion priorities first.",
  "SDL builds a cleaner site structure around trust, clarity, and action.",
  "Once the foundation is in place, SEO, ads, and ongoing support become easier to layer in.",
];

const positioning = [
  {
    icon: Layers3,
    title: "More than a visual refresh",
    text: "A strong website should clarify the offer, improve trust, and support lead generation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Built for real use",
    text: "The site should work across devices and make the next step obvious without friction.",
  },
  {
    icon: ShieldCheck,
    title: "Supports future growth",
    text: "A better foundation prevents expensive rework when the business is ready to scale.",
  },
];

export default function WebsiteDesignDevelopment() {
  return (
    <>
      <section className="bg-[#0a0a0f] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Website Design &amp; Development
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Website design and development for businesses that need more than a pretty site
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              SDL builds websites that support credibility, lead generation, SEO structure, and
              future growth. The goal is a cleaner digital foundation that actually helps the
              business move forward.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                  "Website Design & Development"
                )}&source=service-website-design-hero`}
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
                  How this project usually works
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
                Need the site foundation fixed before pushing harder on growth?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Start with the website build, then layer in SEO pages, paid traffic paths, and
                support the right way instead of stacking tactics on a weak foundation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                    "Website Design & Development"
                  )}&source=service-website-design-final`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#0a0a0f] transition hover:bg-white/90"
                >
                  Start a Website Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={createPageUrl("HostingMaintenance")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  View Hosting &amp; Maintenance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a better site foundation before you push harder on growth?"
        description="Use Start Project so SDL gets the service context, business stage, and scope details up front."
        buttonText="Start a Website Project"
        buttonHref={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
          "Website Design & Development"
        )}&source=service-website-design-cta`}
        secondaryText="Explore Packages"
        secondaryHref={createPageUrl("Packages")}
      />
    </>
  );
}