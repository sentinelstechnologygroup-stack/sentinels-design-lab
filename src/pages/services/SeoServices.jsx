// src/pages/services/SeoServices.jsx
"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  MapPinned,
  FileText,
  Workflow,
} from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const included = [
  "SEO opportunity review",
  "Keyword and intent mapping",
  "Page structure recommendations",
  "Metadata and content guidance",
  "Service and location page strategy",
  "Internal linking recommendations",
  "Technical compliance review",
  "Search visibility improvement priorities",
  "Content expansion roadmap",
];

const outcomes = [
  "Improves the site’s ability to rank for target services",
  "Helps search engines understand your offerings and coverage areas",
  "Creates expansion paths for future content and service pages",
  "Supports credibility when prospects compare providers online",
];

const addOns = [
  "SEO page bundles",
  "Content rewrite support",
  "Blog / resource strategy",
  "Analytics and reporting setup",
  "Technical cleanup with redesign work",
];

const fitItems = [
  "Businesses that are hard to find in search",
  "Websites with weak structure or thin service targeting",
  "Companies that need location and service relevance built in correctly",
];

const positioning = [
  {
    icon: Search,
    title: "Built around search intent",
    text: "The goal is to help the site match what people are actually searching for.",
  },
  {
    icon: MapPinned,
    title: "Supports local relevance",
    text: "Service and location structure should help the business compete where it actually operates.",
  },
  {
    icon: FileText,
    title: "Creates expansion paths",
    text: "Good SEO work should make future page growth clearer, not more chaotic.",
  },
];

const process = [
  "We identify visibility gaps, weak structure, and missed intent opportunities.",
  "SDL outlines the highest-priority page and technical improvements first.",
  "Then the site can expand with cleaner service, location, and supporting content depth.",
];

export default function SeoServices() {
  return (
    <>
      <section className="bg-[#0a0a0f] pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              SEO Services
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              SEO services built for visibility, relevance, and qualified traffic
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              SDL SEO work focuses on structure, relevance, local intent, and scalable page
              architecture so the site has a stronger chance to compete where it matters.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                  "SEO Services"
                )}&source=service-seo-hero`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Start an SEO Project
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
                  How SEO usually progresses
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
                Need stronger visibility before you throw more money at traffic?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Build the structure first, then expand into service and location depth that has a
                real chance to rank instead of relying on guesswork.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
                    "SEO Services"
                  )}&source=service-seo-final`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-[#0a0a0f] transition hover:bg-white/90"
                >
                  Start an SEO Project
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
        title="Need stronger search visibility before pushing harder on traffic?"
        description="Use Start Project so SDL receives the SEO service context, business needs, and timeline up front."
        buttonText="Start an SEO Project"
        buttonHref={`${createPageUrl("StartProject")}?service=${encodeURIComponent(
          "SEO Services"
        )}&source=service-seo-cta`}
        secondaryText="Explore Packages"
        secondaryHref={createPageUrl("Packages")}
      />
    </>
  );
}