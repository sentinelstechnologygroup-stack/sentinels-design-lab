// src/components/layout/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/utils";

const footerSections = [
  {
    title: "Navigation",
    links: [
      { label: "Home", page: "Home" },
      { label: "Services", page: "Services" },
      { label: "Packages", page: "Packages" },
      { label: "Projects", page: "Projects" },
      { label: "About", page: "About" },
      { label: "Contact", page: "Contact" },
      { label: "Start Project", page: "StartProject" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Builds", page: "WebsiteBuilds" },
      { label: "Website Redesigns", page: "WebsiteRedesigns" },
      { label: "SEO Opportunity Snapshot", page: "SeoOpportunitySnapshot" },
      { label: "Hosting & Maintenance", page: "HostingMaintenance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", page: "About" },
      { label: "Projects", page: "Projects" },
      { label: "Contact", page: "Contact" },
      { label: "Start Project", page: "StartProject" },
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
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-10">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Sentinels Design Lab"
                width={180}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="mt-5 max-w-xl text-white/40 leading-relaxed">
              Sentinels Design Lab builds and redesigns modern business websites
              engineered for trust, conversion, and long-term usability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.label}`}>
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
            Built for performance, trust, conversion, and long-term growth.
          </p>
        </div>
      </div>
    </footer>
  );
}