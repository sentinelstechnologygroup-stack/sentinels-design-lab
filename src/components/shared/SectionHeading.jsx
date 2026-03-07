"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`${center ? "text-center" : ""} mb-16`}
    >
      {label && (
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          light ? "text-[#0a0a0f]" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-gray-500" : "text-white/50"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}