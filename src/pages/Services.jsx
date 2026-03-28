// src/pages/Services.jsx
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Search,
  MousePointerClick,
  Palette,
  Briefcase,
  Route,
  ShieldCheck,
} from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const services = [
  {
    title: "Website Design & Development",
    slug: "services/website-design-development",
    icon: Layers3,
    summary:
      "Modern websites built to support trust, lead generation, SEO structure, and future upgrades.",
    bestFor:
      "Businesses with an outdated site, weak conversion flow, or no real digital foundation.",
    included: [
      "Custom page structure",
      "Conversion-first layouts",
      "Mobile-first implementation",
      "SEO-ready foundations",
      "Lead capture setup",
      "Launch support",
    ],
    source: "services-hub-website",
  },
  {
    title: "SEO Services",
    slug: "services/seo-services",
    icon: Search,
    summary:
      "Search-focused structure and expansion planning for businesses that need stronger visibility.",
    bestFor:
      "Businesses that are hard to find or poorly structured for service and location relevance.",
    included: [
      "Keyword and intent mapping",
      "Service page strategy",
      "Location targeting direction",
      "Technical priorities",
      "Internal linking direction",
      "Expansion roadmap",
    ],
    source: "services-hub-seo",
  },
  {
    title: "PPC / Paid Ads",
    slug: "services/ppc-paid-ads",
    icon: MousePointerClick,
    summary:
      "Landing-path strategy built to help paid traffic convert instead of leaking away.",
    bestFor:
      "Businesses running ads, planning ads, or needing cleaner click-to-inquiry paths.",
    included: [
      "Offer alignment review",
      "Landing page direction",
      "CTA hierarchy",
      "Form friction reduction",
      "Trust section guidance",
      "Tracking-readiness direction",
    ],
    source: "services-hub-ppc",
  },
  {
    title: "Branding & Identity",
    slug: "services/branding-identity",
    icon: Palette,
    summary:
      "Visual and messaging alignment that makes the business feel cleaner, more credible, and more established.",
    bestFor:
      "Businesses with dated branding, inconsistent visuals, or a site redesign in progress.",
    included: [
      "Brand direction guidance",
      "Identity refinement",
      "Color and typography alignment",
      "Messaging support",
      "Website visual cohesion",
      "Cross-touchpoint consistency",
    ],
    source: "services-hub-branding",
  },
];

const whyThisPageWorks = [
  {
    icon: Briefcase,
    title: "Explains the service clearly",
    text: "Each offer should show what it includes, what it actually does, and who it is for.",
  },
  {
    icon: Route,
    title: "Moves visitors toward action",
    text: "Every service should route to Start Project with hidden context instead of dumping people into a generic contact path.",
  },
  {
    icon: ShieldCheck,
    title: "Builds trust without fluff",
    text: "Clean positioning, scoped deliverables, and a clear next step convert better than vague agency language.",
  },
];

const selectionNotes = [
  "Start with Website Design & Development if the business lacks a strong digital foundation.",
  "Start with SEO Services if the site exists but structure and visibility are weak.",
  "Start with PPC / Paid Ads if traffic quality and conversion path are the main problem.",
  "Start with Branding & Identity if the business looks inconsistent, dated, or under-positioned.",
];

export default function Services() {
  return (
    <>
      <section className="bg-[#0a0a0f] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Services
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Core services built to strengthen visibility, trust, and conversion
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              These are the highest-clarity SDL offers. Each one is designed to solve a real business
              problem, create a cleaner digital path, and move the prospect toward a more qualified
              project inquiry.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("StartProject")}?source=services-hero`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Start Your Project
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
            {whyThisPageWorks.map((item) => {
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

          <div className="mt-14 grid gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/8 bg-[#111118] p-8 lg:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                        <Icon className="h-6 w-6 text-white/75" />
                      </div>

                      <h2 className="text-2xl font-semibold text-white md:text-3xl">
                        {service.title}
                      </h2>

                      <p className="mt-4 leading-relaxed text-white/50">
                        {service.summary}
                      </p>

                      <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                          Best for
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-white/65">
                          {service.bestFor}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                        What’s included
                      </p>

                      <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        {service.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-white/65"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                          href={createPageUrl(service.slug)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                        >
                          View Service Details
                        </Link>

                        <Link
                          href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                            service.title
                          )}&source=${service.source}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0f] transition hover:bg-white/90"
                        >
                          Start This Project
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/8 bg-[#111118] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                How to choose the right starting point
              </p>

              <ul className="mt-6 space-y-4">
                {selectionNotes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Custom scope</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Need a more custom system or mixed-scope project?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                That still belongs in the same intake path. Use Start Project and explain the mix of
                services, priorities, and timeline so SDL can frame the right recommendation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${createPageUrl("StartProject")}?source=services-custom`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#0a0a0f] transition hover:bg-white/90"
                >
                  Discuss a Custom Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={createPageUrl("Packages")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                >
                  Compare Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need help choosing the right service?"
        description="Tell SDL what the business needs to improve and the intake form will carry the right context into the next conversation."
        buttonText="Start Your Project"
        buttonHref={`${createPageUrl("StartProject")}?source=services-cta`}
        secondaryText="Explore Packages"
        secondaryHref={createPageUrl("Packages")}
      />
    </>
  );
}