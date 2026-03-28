// src/pages/services/BrandingIdentity.jsx
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  BadgeCheck,
  PenTool,
  Workflow,
} from "lucide-react";
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

const fitItems = [
  "Businesses with inconsistent or dated branding",
  "New brands that need a stronger launch identity",
  "Companies redesigning their website and needing visual alignment",
];

const positioning = [
  {
    icon: Palette,
    title: "More than a logo",
    text: "Branding is the visual and verbal system that helps prospects trust what they are seeing.",
  },
  {
    icon: PenTool,
    title: "Creates consistency",
    text: "A stronger identity keeps the site, marketing, and supporting materials from feeling disconnected.",
  },
  {
    icon: BadgeCheck,
    title: "Improves credibility",
    text: "Cleaner alignment makes the business feel more established and more ready to scale.",
  },
];

const process = [
  "We identify where the business looks inconsistent, dated, or under-positioned.",
  "SDL sharpens the visual and messaging direction around credibility and fit.",
  "Then the website, ads, and collateral can align around a stronger identity system.",
];

export default function BrandingIdentity() {
  return (
    <>
      <section className="bg-[#0a0a0f] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Branding &amp; Identity
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Branding and identity that makes the business look aligned, legitimate, and ready to scale
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              Branding is not just a logo. It is the visual and verbal system that helps prospects
              trust what they are seeing and understand who the business is.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                  "Branding & Identity"
                )}&source=service-branding-hero`}
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
                  How branding projects usually help
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
                Need the business to look more aligned before you scale the site?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                A cleaner identity system makes the whole digital presence feel more deliberate,
                more credible, and easier to trust.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                    "Branding & Identity"
                  )}&source=service-branding-final`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#0a0a0f] transition hover:bg-white/90"
                >
                  Start a Branding Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                    "Website Design & Development"
                  )}&source=service-branding-crosssell`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  Pair With a Website Build
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need the business to look more aligned before you scale the site?"
        description="Use Start Project so SDL gets the branding context, business stage, and scope details before the next conversation."
        buttonText="Start a Branding Project"
        buttonHref={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
          "Branding & Identity"
        )}&source=service-branding-cta`}
        secondaryText="Explore Packages"
        secondaryHref={createPageUrl("Packages")}
      />
    </>
  );
}