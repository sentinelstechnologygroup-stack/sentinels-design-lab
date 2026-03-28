// src/pages/services/SeoServices.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

export default function SeoServices() {
  return (
    <>
      <section className="bg-[#0a0a0f] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              SEO Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              SEO services built for visibility, relevance, and qualified traffic
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              Our SEO work focuses on structure, relevance, local intent, and scalable page architecture
              so your website can compete more effectively where it matters.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`${createPageUrl("Contact")}?service=SEO%20Services&source=service-seo`}
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
            {[
              "Businesses that are hard to find in search",
              "Websites with weak structure or thin service targeting",
              "Companies that need location and service relevance built in correctly",
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
        title="Need stronger search visibility before you throw more money at traffic?"
        description="Build the structure first, then expand into service and location depth that has a real chance to rank."
        buttonText="Start an SEO Project"
        buttonPage="Contact"
      />
    </>
  );
}