"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Platform", href: "/platform" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Sentinels
                <span className="text-white/50 font-light"> Design Lab</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      active
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0a0a0f] text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0f] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="text-white font-semibold text-lg">SDL</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-3xl font-light py-3 transition-colors ${
                        active ? "text-white" : "text-white/40 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/start-project"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0f] font-medium rounded-full"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}