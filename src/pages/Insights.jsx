"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const posts = [
  {
    id: "1",
    title: "Why Most Small Business Websites Fail",
    excerpt: "The fundamental problems with how small businesses approach web development — and how to fix them.",
    category: "strategy",
    cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    created_date: "2025-12-01",
  },
  {
    id: "2",
    title: "Modern SEO Architecture for 2026",
    excerpt: "How to structure your website for search engines, AI crawlers, and paid advertising from the ground up.",
    category: "seo",
    cover_image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    created_date: "2025-11-15",
  },
  {
    id: "3",
    title: "The Case for Website Modernization",
    excerpt: "If your website is more than 5 years old, a rebuild is often more cost-effective than incremental patchwork.",
    category: "strategy",
    cover_image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    created_date: "2025-10-20",
  },
  {
    id: "4",
    title: "Performance Budgets: Why Speed Is a Feature",
    excerpt: "How SDL approaches performance budgets and why sub-second load time targets are a product requirement.",
    category: "engineering",
    cover_image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    created_date: "2025-10-05",
  },
  {
    id: "5",
    title: "Building Vertical Platforms for Trades",
    excerpt: "Reusable infrastructure, niche operations, and why verticalized software beats generic tools in the field.",
    category: "business",
    cover_image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    created_date: "2025-09-18",
  },
  {
    id: "6",
    title: "Designing for Conversion, Not Just Aesthetics",
    excerpt: "A beautiful interface means very little if visitors do not understand what to do next.",
    category: "design",
    cover_image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    created_date: "2025-09-01",
  },
];

const categoryLabels = {
  strategy: "Strategy",
  seo: "SEO",
  design: "Design",
  engineering: "Engineering",
  business: "Business",
};

const categoryColors = {
  strategy: "text-blue-400 bg-blue-400/10",
  seo: "text-emerald-400 bg-emerald-400/10",
  design: "text-violet-400 bg-violet-400/10",
  engineering: "text-amber-400 bg-amber-400/10",
  business: "text-pink-400 bg-pink-400/10",
};

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(
    () => (activeCategory === "all" ? posts : posts.filter((post) => post.category === activeCategory)),
    [activeCategory]
  );

  const categories = ["all", "strategy", "seo", "design", "engineering", "business"];

  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Insights"
            title="Thoughts on building better"
            description="Strategy, engineering, and design perspectives from the SDL team."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm rounded-full capitalize transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white text-[#0a0a0f]"
                    : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat === "all" ? "All" : categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-white/5 bg-[#111118] transition-all duration-500 hover:border-white/10"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${categoryColors[post.category]}`}>
                      {categoryLabels[post.category]}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/20">
                      <Clock className="h-3 w-3" />
                      {format(new Date(post.created_date), "MMM d, yyyy")}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-white/40">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
