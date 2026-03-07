"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, RefreshCw, Wrench, Layers, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Modern websites built for performance, SEO, and conversion. We use Next.js, React, and Tailwind to create production-grade experiences.",
    features: [
      "Custom design tailored to your brand",
      "SEO-ready architecture from day one",
      "PPC & advertising compatibility",
      "Mobile-first responsive design",
      "AI crawler accessibility",
      "Sub-second load times",
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Website Modernization",
    description: "Replace outdated legacy websites with modern systems that support SEO, PPC, analytics, and deliver better user experiences.",
    features: [
      "Rebuild from legacy platforms",
      "Content migration & optimization",
      "Modern performance standards",
      "Analytics integration",
      "Improved mobile experience",
      "Future-proof architecture",
    ],
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: Wrench,
    title: "Operational Tools",
    description: "Websites as business tools — not just marketing pages. We build calculators, dashboards, booking flows, and lead capture systems.",
    features: [
      "Quoting calculators",
      "Service area maps",
      "Booking & scheduling flows",
      "Operational dashboards",
      "Lead capture pipelines",
      "Customer portals",
    ],
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Layers,
    title: "Industry Platforms",
    description: "Vertical-reskin web systems for specific trades. Reusable infrastructure with customized branding that scales across 50+ industries.",
    features: [
      "Trade-specific templates",
      "Scalable multi-tenant architecture",
      "Customizable branding per client",
      "Built-in operational tools",
      "Industry-specific SEO",
      "White-label capabilities",
    ],
    gradient: "from-amber-500 to-amber-600",
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="What we do"
            description="We build digital infrastructure — not templates. Every project is engineered for performance, clarity, and long-term value."
          />

          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl bg-[#111118] border border-white/5 hover:border-white/10 overflow-hidden transition-all duration-500"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.gradient} opacity-50`} />
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                        <service.icon className="w-6 h-6 text-white/70" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-white/50 leading-relaxed max-w-xl">{service.description}</p>
                    </div>
                    <div className="lg:w-80">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-white/50">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href={createPageUrl("StartProject")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0f] font-medium rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}