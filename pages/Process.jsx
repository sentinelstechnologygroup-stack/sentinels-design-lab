"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Target, Paintbrush, Code2, Rocket, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const steps = [
  {
    icon: MessageSquare,
    phase: "01",
    title: "Discovery",
    duration: "Week 1",
    description: "We start by understanding your business, goals, audience, and competitive landscape. This foundational work shapes everything that follows.",
    deliverables: ["Business analysis", "Competitor audit", "User research", "Project brief"],
  },
  {
    icon: Target,
    phase: "02",
    title: "Strategy",
    duration: "Week 2",
    description: "Based on discovery insights, we define the site architecture, content strategy, conversion goals, and technical requirements.",
    deliverables: ["Site architecture", "Content strategy", "Technical spec", "Project timeline"],
  },
  {
    icon: Paintbrush,
    phase: "03",
    title: "Design",
    duration: "Weeks 3–4",
    description: "We create high-fidelity designs that combine visual excellence with conversion-driven UX. Every layout is purposeful.",
    deliverables: ["Wireframes", "UI design", "Design system", "Responsive layouts"],
  },
  {
    icon: Code2,
    phase: "04",
    title: "Engineering",
    duration: "Weeks 5–8",
    description: "Clean, performant code built with modern frameworks. We engineer for speed, SEO, and long-term maintainability.",
    deliverables: ["Frontend build", "CMS integration", "Performance optimization", "Testing"],
  },
  {
    icon: Rocket,
    phase: "05",
    title: "Launch",
    duration: "Week 9",
    description: "Thorough QA, staging review, and deployment to production. We handle DNS, SSL, analytics, and everything needed for go-live.",
    deliverables: ["QA testing", "Staging review", "Production deploy", "Analytics setup"],
  },
  {
    icon: HeartHandshake,
    phase: "06",
    title: "Ongoing Support",
    duration: "Ongoing",
    description: "Post-launch support includes monitoring, updates, content changes, and strategic guidance to keep your platform performing.",
    deliverables: ["Performance monitoring", "Content updates", "Feature additions", "Strategic guidance"],
  },
];

export default function Process() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Process"
            title="How we work"
            description="Every project follows a structured process that reduces risk, ensures quality, and delivers results on time."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-white/10 to-transparent hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative md:flex items-start gap-12 md:py-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-[#0a0a0f] z-10 hidden md:block" />

                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                    <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="text-xs text-white/20 font-mono">{step.phase}</span>
                        <span className="mx-2 text-white/10">·</span>
                        <span className="text-xs text-blue-400/60">{step.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/40 leading-relaxed mb-6 max-w-md inline-block">{step.description}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {step.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-[11px] px-3 py-1 bg-white/5 text-white/30 rounded-full"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start?"
        description="Book a consultation and we'll walk you through exactly how your project would work."
        buttonText="Schedule Consultation"
      />
    </>
  );
}