// src/pages/Packages.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, BadgeCheck, Briefcase, LineChart, Shield } from "lucide-react";
import CTASection from "@/components/shared/CTASection";
import { createPageUrl } from "@/utils";

const packages = [
  {
    name: "Lite",
    emphasis: "Entry point",
    whoItsFor: "New or smaller businesses that need a clean, credible launch without pretending they need the full system on day one.",
    outcome: "Gets the business online with a cleaner first impression and a real inquiry path.",
    included: [
      "Simple launch scope",
      "Lean page count",
      "Mobile-ready layout",
      "Basic contact flow",
      "Clean brand presentation",
    ],
    source: "packages-lite",
  },
  {
    name: "Starter",
    emphasis: "Foundation",
    whoItsFor: "Businesses with an outdated, weak, or under-structured site that need a stronger baseline before pushing harder on marketing.",
    outcome: "Builds the core structure needed for credibility, clarity, and cleaner next-step conversion.",
    included: [
      "Custom site structure",
      "Lead-focused core pages",
      "SEO-ready foundation",
      "Trust-building page sections",
      "Launch-ready setup",
    ],
    source: "packages-starter",
  },
  {
    name: "Growth",
    emphasis: "Most popular",
    whoItsFor: "Businesses actively trying to improve leads, positioning, and conversion without jumping straight into an oversized engagement.",
    outcome: "Creates the strongest balance of visibility, conversion readiness, and future scale.",
    included: [
      "Conversion-focused site structure",
      "Service page depth",
      "SEO expansion path",
      "PPC-ready page strategy",
      "Stronger intake and CTA paths",
      "Upgrade-ready build foundation",
    ],
    featured: true,
    source: "packages-growth",
  },
  {
    name: "Authority",
    emphasis: "Scale",
    whoItsFor: "Businesses ready to invest in a stronger market position, broader digital structure, and a more complete growth system.",
    outcome: "Supports larger positioning, broader scope, and stronger long-term leverage.",
    included: [
      "Broader system planning",
      "Multi-page growth architecture",
      "Higher-trust brand presentation",
      "Stronger support for campaigns",
      "Longer-term expansion structure",
    ],
    source: "packages-authority",
  },
];

const decisionPoints = [
  {
    icon: Briefcase,
    title: "Need a cleaner launch point",
    text: "Lite or Starter usually fits best when the business mainly needs credibility, structure, and a functioning intake path.",
  },
  {
    icon: LineChart,
    title: "Need leads and growth support",
    text: "Growth is the center-of-gravity package when the site needs to help support SEO, ads, and stronger conversion.",
  },
  {
    icon: Shield,
    title: "Need a stronger long-term system",
    text: "Authority is for businesses that do not want to outgrow the structure too quickly.",
  },
];

const process = [
  "Choose the package that most closely matches your stage, not your ego.",
  "Submit the Start Project form with budget, timeline, and business context.",
  "SDL reviews fit and points you to the cleanest starting path.",
];

export default function Packages() {
  return (
    <>
      <section className="bg-[#0a0a0f] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Packages
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Clear packages for different stages of business growth
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              The goal is not to overwhelm prospects with fake complexity. The goal is to give them
              a clear path to the right starting point, keep Growth as the best-fit offer for serious
              businesses, and preserve room for higher-scope engagements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("StartProject")}?source=packages-hero`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href={createPageUrl("Services")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {decisionPoints.map((item) => {
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

                <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Best for</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{pkg.whoItsFor}</p>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Expected outcome</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{pkg.outcome}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={`${createPageUrl("StartProject")}?package=${encodeURIComponent(pkg.name)}&source=${pkg.source}`}
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

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/8 bg-[#111118] p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-blue-400" />
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  How to choose without overthinking it
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
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">What happens next</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                The package page should lead to a decision, not a dead end
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Once the form comes in, SDL should already know the likely package fit, the service
                context, and how serious the opportunity looks based on budget and timeline. That is
                what makes the next conversation cleaner.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${createPageUrl("StartProject")}?source=packages-final-cta`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#0a0a0f] transition hover:bg-white/90"
                >
                  Start Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={createPageUrl("Contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which package fits?"
        description="Tell us where the business is now, what you are trying to improve, and what kind of timeline you are working with. We’ll point you toward the right starting point."
        buttonText="Start Your Project"
        buttonHref={`${createPageUrl("StartProject")}?source=packages-cta`}
        secondaryText="Talk first"
        secondaryHref={`${createPageUrl("Contact")}?source=packages-cta`}
      />
    </>
  );
}