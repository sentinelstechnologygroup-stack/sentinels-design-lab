"use client";

import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection({
  title = "Ready to build something exceptional?",
  description = "Let's discuss your project and create a digital platform that drives real results.",
  buttonText = "Start a Project",
  buttonPage = "StartProject",
}) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">{description}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={createPageUrl(buttonPage)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0f] font-medium rounded-full hover:bg-white/90 transition-all duration-300"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 px-8 py-4 text-white/60 hover:text-white font-medium transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}