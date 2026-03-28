// src/components/shared/CTASection.jsx
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
  buttonHref = "",
  secondaryText = "Get in touch",
  secondaryPage = "Contact",
  secondaryHref = "",
}) {
  const primaryLink = buttonHref || createPageUrl(buttonPage);
  const secondaryLink = secondaryHref || createPageUrl(secondaryPage);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
      <div className="absolute inset-0">
        <p className="text-white/60 max-w-[600px] mx-auto text-center mt-4">
  Strategy-first builds. No bloated agency process. Just clean, deployable websites built for real business use.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-white/50">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryLink}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition-all duration-300 hover:bg-white/90"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href={secondaryLink}
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white/60 transition-colors hover:text-white"
          >
            {secondaryText}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}