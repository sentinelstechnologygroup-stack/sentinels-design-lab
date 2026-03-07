"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const categories = ["All", "Business Websites", "Trade Platforms", "Operational Tools", "Custom Apps"];

const projects = [
  {
    title: "Premier Kitchens",
    category: "Business Websites",
    tags: ["Website Redesign", "SEO", "Next.js"],
    description: "Complete modernization of a legacy kitchen design company. Rebuilt from scratch with SEO optimization, fast loading, and conversion-focused design.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    challenge: "Outdated 15-year-old website with poor mobile experience and zero SEO presence.",
    solution: "Modern Next.js build with structured data, optimized images, and clear service pages.",
  },
  {
    title: "ELI Land Design",
    category: "Business Websites",
    tags: ["Hybrid Platform", "Portfolio", "Booking"],
    description: "A hybrid website combining stunning portfolio showcase with operational booking tools for a premium land design firm.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    challenge: "Needed to showcase creative work while also capturing leads and managing consultations.",
    solution: "Built a hybrid platform with visual portfolio grid and integrated scheduling system.",
  },
  {
    title: "DriverHub",
    category: "Trade Platforms",
    tags: ["Vertical Platform", "Logistics", "Dashboard"],
    description: "Industry-specific platform for logistics and transportation businesses — scalable across multiple operators.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    challenge: "Transportation companies needed a modern platform for driver management and dispatch.",
    solution: "Created a vertical platform with real-time dashboards, driver profiles, and route management.",
  },
  {
    title: "PainterPro",
    category: "Trade Platforms",
    tags: ["Vertical Platform", "Quoting", "Trades"],
    description: "Scalable web system for painting contractors with built-in quoting calculator and service area mapping.",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    challenge: "Painting contractors had no professional digital presence or lead capture tools.",
    solution: "Built a trade-specific platform with instant quoting, portfolio galleries, and PPC-ready landing pages.",
  },
  {
    title: "Mobile Dog Groomer",
    category: "Business Websites",
    tags: ["Service Business", "Booking", "Mobile"],
    description: "Clean, conversion-focused website for a mobile pet grooming service with online booking integration.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    challenge: "Sole proprietor with no web presence competing against established grooming businesses.",
    solution: "Built a mobile-first site with service area map, pricing transparency, and one-click booking.",
  },
  {
    title: "Service Dashboard",
    category: "Operational Tools",
    tags: ["Dashboard", "Analytics", "Internal"],
    description: "Internal operational dashboard for tracking service metrics, customer pipelines, and team performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    challenge: "Service business relying on spreadsheets to manage operations across multiple locations.",
    solution: "Custom dashboard with real-time KPIs, automated reporting, and team management tools.",
  },
];

export default function Work() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Work that speaks for itself"
            description="Real projects. Real results. Every build is engineered for performance, conversion, and long-term value."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                  active === cat
                    ? "bg-white text-[#0a0a0f]"
                    : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelected(project)}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-[#111118] border border-white/5 hover:border-white/10 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 text-white/40 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111118] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{selected.title}</h2>
                <p className="text-white/50 leading-relaxed mb-8">{selected.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs text-white/30 uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-white/30 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-8 px-6 py-2 text-sm text-white/50 hover:text-white border border-white/10 rounded-full transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}