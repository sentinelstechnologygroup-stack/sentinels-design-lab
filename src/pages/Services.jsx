// src/pages/Services.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, Search, MousePointerClick, Palette } from "lucide-react";
import { createPageUrl } from "@/utils";
import CTASection from "@/components/shared/CTASection";

const services = [
  {
    title: "Website Design & Development",
    slug: "services/website-design-development",
    icon: Layers3,
    summary:
      "Modern websites built to support trust, lead generation, SEO structure, and future upgrades.",
    bestFor: "Businesses with an outdated site, weak conversion flow, or no real digital foundation.",
    included: [
      "Custom page structure",
      "Conversion-first layouts",
      "Mobile-first implementation",
      "SEO-ready foundations",
      "Lead capture setup",
      "Launch support",
    ],
  },
  {
    title: "SEO Services",
    slug: "services/seo-services",
    icon: Search,
    summary:
      "Search-focused structure and expansion planning for businesses that need stronger visibility.",
    bestFor: "Businesses that are hard to find or poorly structured for service and location relevance.",
    included: [
      "Keyword and intent mapping",
      "Service page strategy",
      "Location targeting direction",
      "Technical priorities",
      "Internal linking direction",
      "Expansion roadmap",
    ],
  },
  {
    title: "PPC / Paid Ads",
    slug: "services/ppc-paid-ads",
    icon: MousePointerClick,
    summary:
      "Landing-path strategy built to help paid traffic convert instead of leaking away.",
    bestFor: "Businesses running ads, planning ads, or needing cleaner click-to-inquiry paths.",
    included: [
      "Offer alignment review",
      "Landing page direction",
      "CTA hierarchy",
      "Form friction reduction",
      "Trust section guidance",
      "Tracking-readiness direction",
    ],
  },
  {
    title: "Branding & Identity",
    slug: "services/branding-identity",
    icon: Palette,
    summary:
      "Visual and messaging alignment that makes the business feel cleaner, more credible, and more established.",
    bestFor: "Businesses with dated branding, inconsistent visuals, or a site redesign in progress.",
    included: [
      "Brand direction guidance",
      "Identity refinement",
      "Color and typography alignment",
      "Messaging support",
      "Website visual cohesion",
      "Cross-touchpoint consistency",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-[#0a0a0f] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Services built around growth, not guesswork
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/50">
              Every core SDL service should make the business stronger, clearer, and easier to act on.
              These pages are built to explain what is included, what it actually does, and how the next step works.
            </p>
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

                      <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-white/50 leading-relaxed">
                        {service.summary}
                      </p>

                      <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">Best for</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/65">{service.bestFor}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/35">What’s included</p>
                      <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                          href={createPageUrl(service.slug)}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0f] transition hover:bg-white/90"
                        >
                          View Service Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                          href={`${createPageUrl("Contact")}?service=${encodeURIComponent(service.title)}&source=services-hub`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:text-white"
                        >
                          Start This Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-3xl border border-white/8 bg-white/[0.03] p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Advanced / custom</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Need ecommerce, app builds, or a more custom system?
                </h3>
                <p className="mt-4 max-w-2xl text-white/50 leading-relaxed">
                  Those offers can still live inside SDL, but the first pass should focus on your highest-clarity,
                  easiest-to-sell money pages. We can layer the custom offers in next.
                </p>
              </div>

              <Link
                href={`${createPageUrl("Contact")}?source=services-advanced`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a0f] transition hover:bg-white/90"
              >
                Discuss a Custom Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a clearer path before you commit?"
        description="Tell us what you are trying to build, improve, or fix, and we’ll point you toward the right service or package."
        buttonText="Start Your Project"
        buttonPage="Contact"
      />
    </>
  );
}