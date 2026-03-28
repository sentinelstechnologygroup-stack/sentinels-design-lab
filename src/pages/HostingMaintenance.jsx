// src/pages/HostingMaintenance.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Wrench, Activity } from "lucide-react";

const included = [
  "Managed hosting guidance or setup",
  "Core update support",
  "Uptime and issue monitoring",
  "Small change support structure",
  "Backup and stability guidance",
  "Performance and maintenance checks",
];

const outcomes = [
  "Protects the site after launch",
  "Reduces risk from neglect, breakage, or outdated components",
  "Gives clients a support path instead of a dead handoff",
  "Creates a cleaner long-term ownership experience",
];

const fitItems = [
  "Businesses that do not want to manage technical upkeep themselves",
  "Clients who want post-launch support without confusion",
  "Sites that need a stable maintenance and change-request path",
];

export default function HostingMaintenancePage() {
  return (
    <section className="bg-[#0a0a0f] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Hosting &amp; Maintenance
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl leading-tight">
            Hosting and maintenance that keeps the site stable, updated, and supported
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
            A launch is not the finish line. This service gives clients a clean support path for
            upkeep, monitoring, stability, and reasonable ongoing changes after the site goes live.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/start-project?service=Hosting%20%26%20Maintenance&source=hosting-maintenance"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
            >
              Start a Support Plan
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact?source=hosting-maintenance"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
            >
              Ask a Question
            </Link>
          </div>
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
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-blue-400" />
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">What’s included</p>
            </div>

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
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-blue-400" />
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  What this actually does
                </p>
              </div>

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
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-blue-400" />
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  Best paired with
                </p>
              </div>

              <ul className="mt-6 space-y-4">
                {[
                  "Website Design & Development",
                  "SEO page expansions",
                  "Landing page updates",
                  "Ongoing design and conversion improvements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/8 bg-[#111118] p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400">Next step</p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                Need a support path after launch?
              </h2>
              <p className="mt-4 max-w-2xl text-white/50 leading-relaxed">
                Start the conversation with context so we know whether you need light maintenance,
                active support, or a stronger long-term growth relationship.
              </p>
            </div>

            <Link
              href="/start-project?service=Hosting%20%26%20Maintenance&source=hosting-maintenance-final-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
            >
              Start Your Support Plan
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}