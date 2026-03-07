"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Hammer, TreePine, Truck, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const industries = [
  {
    icon: Home,
    title: "Home Services",
    description: "HVAC, plumbing, electrical, cleaning, and pest control businesses need more than a basic website. We build lead-generating platforms with service area maps, quoting tools, and booking systems.",
    problems: [
      "Outdated websites losing leads to competitors",
      "No online booking or quoting capability",
      "Poor local SEO presence",
    ],
    solutions: [
      "Conversion-optimized service pages",
      "Integrated scheduling and quoting",
      "Local SEO architecture with structured data",
    ],
  },
  {
    icon: Hammer,
    title: "Contractors",
    description: "General contractors, roofers, painters, and remodelers need a professional digital presence that builds trust and captures leads from both organic search and paid campaigns.",
    problems: [
      "No portfolio showcase for completed work",
      "Websites don't support PPC landing pages",
      "Difficult to update content and pricing",
    ],
    solutions: [
      "Project gallery with before/after views",
      "PPC-ready landing page infrastructure",
      "Easy content management system",
    ],
  },
  {
    icon: TreePine,
    title: "Land Design & Architecture",
    description: "Landscape architects, land designers, and outdoor living specialists need websites that showcase creative work while also managing client inquiries and project consultations.",
    problems: [
      "Creative work not properly showcased online",
      "No workflow for managing consultations",
      "Website doesn't reflect brand quality",
    ],
    solutions: [
      "Visual portfolio with high-res galleries",
      "Consultation booking integration",
      "Premium design matching brand standards",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "Freight companies, courier services, and fleet operators need operational platforms — not just websites. We build systems with driver management, route tracking, and client portals.",
    problems: [
      "Relying on outdated systems for dispatch",
      "No client-facing tracking capability",
      "Manual processes slowing operations",
    ],
    solutions: [
      "Real-time operational dashboards",
      "Client portal with tracking",
      "Automated workflow tools",
    ],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Consultants, legal firms, financial advisors, and agencies need authority-building websites that establish credibility and generate qualified leads.",
    problems: [
      "Generic templates undermining credibility",
      "No content strategy for thought leadership",
      "Poor conversion on contact forms",
    ],
    solutions: [
      "Custom authority-building design",
      "Blog and insights infrastructure",
      "Optimized lead capture flows",
    ],
  },
];

export default function Industries() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Industries"
            title="Specialized solutions for real industries"
            description="We understand the specific challenges businesses face in each vertical. Our solutions are tailored to solve real problems."
          />

          <div className="space-y-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-[#111118] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <ind.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{ind.title}</h3>
                      <p className="text-white/45 leading-relaxed max-w-2xl">{ind.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pl-0 md:pl-[72px]">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-red-400/70 font-medium mb-4">Typical Problems</h4>
                      <ul className="space-y-3">
                        {ind.problems.map((p) => (
                          <li key={p} className="text-sm text-white/40 flex items-start gap-2">
                            <span className="w-1 h-1 bg-red-400/50 rounded-full mt-2 flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-blue-400/70 font-medium mb-4">Our Solutions</h4>
                      <ul className="space-y-3">
                        {ind.solutions.map((s) => (
                          <li key={s} className="text-sm text-white/40 flex items-start gap-2">
                            <span className="w-1 h-1 bg-blue-400/50 rounded-full mt-2 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={createPageUrl("StartProject")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0f] font-medium rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}