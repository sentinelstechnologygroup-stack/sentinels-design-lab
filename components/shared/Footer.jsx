import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Portfolio", href: "/work" },
      { label: "Case Studies", href: "/work" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Modernization", href: "/services" },
      { label: "Platforms", href: "/services" },
      { label: "Industries", href: "/industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Sentinels<span className="text-white/50 font-light"> Design Lab</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Engineering-grade web infrastructure for businesses that demand performance,
              clarity, and long-term scalability.
            </p>
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white/30 text-xs font-medium uppercase tracking-widest mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Sentinels Design Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/20 text-xs">Privacy</span>
            <span className="text-white/20 text-xs">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
