"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Search, Shield, Globe, Server, Eye } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const pillars = [
  {
    icon: Zap,
    title: "Performance Architecture",
    description: "Every site is built for speed. Static generation, edge caching, optimized assets, and minimal JavaScript overhead deliver sub-second load times.",
    details: [
      "Server-side rendering & static generation",
      "Image optimization with next-gen formats",
      "Code splitting & lazy loading",
      "CDN-first deployment strategy",
    ],
  },
  {
    icon: Search,
    title: "SEO + PPC Readiness",
    description: "Structured for search engines and advertising platforms from the ground up — not bolted on as an afterthought.",
    details: [
      "Semantic HTML & structured data",
      "Optimized meta architecture",
      "PPC landing page infrastructure",
      "Core Web Vitals compliance",
    ],
  },
  {
    icon: Eye,
    title: "AI Crawler Compatibility",
    description: "As AI-powered search evolves, our sites are built to be properly indexed and represented by AI systems.",
    details: [
      "Clean, parseable content structure",
      "Schema markup for rich results",
      "Accessible content hierarchy",
      "Machine-readable data formats",
    ],
  },
  {
    icon: Server,
    title: "Deployment Infrastructure",
    description: "Production-grade deployment on Vercel's edge network ensures global availability, instant rollbacks, and zero-downtime updates.",
    details: [
      "Edge network deployment",
      "Automatic HTTPS & SSL",
      "Preview deployments for review",
      "Git-based continuous deployment",
    ],
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description: "Modern security practices built into every layer — from authentication to content delivery.",
    details: [
      "DDoS protection at the edge",
      "Secure headers & CSP policies",
      "Environment-based secrets management",
      "Regular dependency auditing",
    ],
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description: "Codebases designed to evolve. Component-driven development means features can be added without rebuilding.",
    details: [
      "Component-driven architecture",
      "API-first data patterns",
      "Modular feature development",
      "Long-term maintainability",
    ],
  },
];

const techStack = [
  { name: "Next.js", role: "Framework", desc: "Full-stack React framework for production-grade applications." },
  { name: "React", role: "UI Library", desc: "Component-driven user interfaces with declarative rendering." },
  { name: "Tailwind CSS", role: "Styling", desc: "Utility-first CSS for rapid, consistent UI development." },
  { name: "TypeScript", role: "Language", desc: "Type-safe development for reliability and maintainability." },
  { name: "Vercel", role: "Platform", desc: "Edge deployment with global CDN and automatic scaling." },
  { name: "Node.js", role: "Runtime", desc: "Server-side JavaScript for API routes and backend logic." },
];

export default function Platform() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Platform"
            title="The engineering behind the experience"
            description="We don't just design websites — we engineer digital infrastructure. Here's what powers every SDL project."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-[#111118] border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((d) => (
                    <li key={d} className="text-xs text-white/30 flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-400/50 rounded-full" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <SectionHeading
            label="Technology Stack"
            title="Built with the best"
            description="We choose technologies based on performance, reliability, and developer experience — not trends."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">{tech.name}</h4>
                  <span className="text-[10px] px-2 py-1 bg-white/5 text-white/30 rounded-full">{tech.role}</span>
                </div>
                <p className="text-sm text-white/35 leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}