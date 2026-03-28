// src/components/home/HomeFinalCTA.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function HomeFinalCTA() {
  return (
    <section className="bg-[#0d0d14] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/8 bg-[#111118] p-10 text-center md:p-14">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Start the right conversation
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Know what you need — or need help deciding?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            Tell us what kind of project you are considering and we’ll point you toward the right path,
            package, or next step.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`${createPageUrl("StartProject")}?source=home-final-cta`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href={`${createPageUrl("Contact")}?source=home-final-cta`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-8 py-4 font-medium text-white/80 transition hover:border-white/20 hover:text-white"
            >
              General Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}