// src/components/layout/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";

const footerSections = [
  {
    title: "Navigation",
    links: [
      { label: "Home", page: "Home" },
      { label: "Start Project", page: "StartProject" },
      { label: "Contact", page: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#04040c] border-t border-white/[0.06] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                <span className="text-white text-sm font-bold">SDL</span>
              </div>
              <div>
                <div className="text-white font-semibold leading-none">
                  Sentinels Design Lab
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/35 mt-1">
                  Websites • Systems • Growth
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-white/40 leading-relaxed">
              We redesign outdated websites into modern, high-performing sites built
              to earn trust and generate real leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={createPageUrl(link.page)}
                        className="text-white/45 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Sentinels Design Lab. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built for performance, conversion, and long-term growth.
          </p>
        </div>
      </div>
    </footer>
  );
}