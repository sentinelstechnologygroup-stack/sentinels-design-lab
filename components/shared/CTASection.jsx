import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTASection({
  eyebrow = "Start a Project",
  title = "Let’s build something that performs.",
  description = "Modern websites, operational tools, and vertical platforms engineered for performance, conversion, and long-term growth.",
  primaryLabel = "Start a Project",
  primaryHref = "/start-project",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
}) {
  return (
    <section className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              {eyebrow}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
              {title}
            </h2>

            <p className="text-base md:text-lg text-white/45 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0a0a0f] hover:bg-white/90 px-6 py-3"
              >
                <Link href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="inline-flex items-center justify-center rounded-full border-white/15 bg-transparent text-white hover:bg-white/5 px-6 py-3"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}