"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why most service-business websites underperform",
    category: "Conversion",
    excerpt:
      "Traffic means nothing if the site does not create trust, direct the next step, and support the sales motion.",
  },
  {
    title: "Operational apps beat generic dashboards",
    category: "Systems",
    excerpt:
      "The best internal tools are designed around workflow, bottlenecks, and decision velocity — not just data display.",
  },
  {
    title: "Vertical software wins when it feels native to the trade",
    category: "Strategy",
    excerpt:
      "A product does not need to serve everyone. It needs to fit one niche so well that adoption feels obvious.",
  },
];

export default function Insights() {
  return (
    <section className="pt-32 pb-20 bg-[#0a0a0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
            Insights
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Thinking behind the builds.
          </h1>

          <p className="text-lg text-white/40 leading-relaxed">
            SDL insights are temporarily running as static editorial content
            while we finish the platform scrub and move into the Next.js
            production build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
                {post.category}
              </div>

              <h2 className="text-xl font-semibold text-white mb-3">
                {post.title}
              </h2>

              <p className="text-white/45 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-300 transition-colors"
              >
                Coming Soon
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}