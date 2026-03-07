"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Premier Kitchens",
    category: "Website Redesign",
    description: "Complete modernization of a legacy kitchen design company — SEO-optimized, fast-loading, conversion-focused.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tag: "WEB_REDESIGN",
    metrics: ["Perf: 99", "TTI: 0.6s"],
    accent: "#3b82f6",
  },
  {
    title: "ELI Land Design",
    category: "Hybrid Platform",
    description: "A hybrid website combining portfolio showcase with operational tools for a premium land design firm.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    tag: "HYBRID_PLATFORM",
    metrics: ["LCP: 1.1s", "Score: 97"],
    accent: "#8b5cf6",
  },
  {
    title: "DriverHub",
    category: "Vertical Platform",
    description: "Industry-specific platform for logistics and transportation businesses — scalable across multiple operators.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tag: "VERT_PLATFORM",
    metrics: ["50+ Operators", "Custom CMS"],
    accent: "#10b981",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 bg-[#080810] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/70 mb-4">
            // FEATURED_WORK
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Projects that set the standard
          </h2>
          <p className="mt-5 text-white/35 max-w-xl mx-auto text-base">
            A selection of recent projects demonstrating our approach to design, engineering, and business-driven development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.14] transition-all duration-500"
              style={{ background: "#0d0d18" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d18] via-[#0d0d18]/20 to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-black/60 border border-white/10 backdrop-blur-sm">
                  <span className="text-[9px] font-mono" style={{ color: project.accent }}>■</span>
                  <span className="text-[9px] font-mono text-white/50 tracking-widest">{project.tag}</span>
                </div>

                {/* Arrow button */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="text-[10px] font-mono text-blue-400/70 uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">{project.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Metrics */}
                <div className="flex gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md border text-white/30 border-white/[0.08] bg-white/[0.02]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href={"/work"}
            className="inline-flex items-center gap-2 text-sm font-mono text-white/30 hover:text-white transition-colors border border-white/[0.06] hover:border-white/20 px-5 py-2.5 rounded-full"
          >
            <span className="text-blue-400/60">→</span> VIEW_ALL_PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
}