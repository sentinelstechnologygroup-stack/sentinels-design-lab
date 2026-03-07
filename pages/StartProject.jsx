"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const industries = [
  { value: "home_services", label: "Home Services" },
  { value: "contractors", label: "Contractors" },
  { value: "land_design", label: "Land Design & Architecture" },
  { value: "logistics", label: "Logistics & Transportation" },
  { value: "professional_services", label: "Professional Services" },
  { value: "nonprofit", label: "Nonprofit / Mission-Driven" },
  { value: "other", label: "Other" },
];

const projectTypes = [
  { value: "website", label: "Website" },
  { value: "operations_tool", label: "Operations Tool" },
  { value: "vertical_platform", label: "Vertical Platform" },
  { value: "redesign", label: "Redesign / Rebuild" },
  { value: "other", label: "Other" },
];

export default function StartProject() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    industry: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
    toast.success("Project request captured.");
  };

  return (
    <section className="pt-32 pb-20 bg-[#0a0a0f] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 text-center">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Start a Project
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Let’s build something that performs.
            </h1>
            <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
              Tell us what you’re building, what problem it needs to solve, and
              where you want to take it.
            </p>
          </div>

          {submitted ? (
            <div className="p-10 rounded-2xl bg-[#111118] border border-white/5 text-center">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Request received
              </h3>
              <p className="text-white/40 max-w-xl mx-auto">
                This form is currently running in local capture mode while we
                scrub the build and prepare the Next.js production version.
              </p>
            </div>
          ) : (
            <div className="p-8 md:p-10 rounded-2xl bg-[#111118] border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, company: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Industry
                    </label>
                    <select
                      value={form.industry}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, industry: e.target.value }))
                      }
                      className={inputClass}
                    >
                      <option value="">Select an industry</option>
                      {industries.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          projectType: e.target.value,
                        }))
                      }
                      className={inputClass}
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      value={form.budget}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, budget: e.target.value }))
                      }
                      className={inputClass}
                      placeholder="$5k–$15k / $15k+ / not sure yet"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                    Timeline
                  </label>
                  <input
                    type="text"
                    value={form.timeline}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, timeline: e.target.value }))
                    }
                    className={inputClass}
                    placeholder="ASAP / 30 days / 60–90 days"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={6}
                    value={form.description}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="What are you building, what needs to improve, and what outcome matters most?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0a0f] font-medium rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Start Project Request
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}