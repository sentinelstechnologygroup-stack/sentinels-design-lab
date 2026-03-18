// src/pages/StartProject
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_PROJECT_ENDPOINT = "https://formspree.io/f/xdawpvqr";

const industries = [
  { value: "home_services", label: "Home Services" },
  { value: "contractors", label: "Contractors" },
  { value: "land_design", label: "Land Design & Architecture" },
  { value: "logistics", label: "Logistics & Transportation" },
  { value: "professional_services", label: "Professional Services" },
  { value: "other", label: "Other" },
];

const projectTypes = [
  { value: "website_design", label: "Website Design & Development" },
  { value: "website_modernization", label: "Website Modernization" },
  { value: "operational_tools", label: "Operational Tools" },
  { value: "industry_platform", label: "Industry Platform" },
  { value: "other", label: "Something Else" },
];

const budgets = [
  { value: "under_5k", label: "Under $5,000" },
  { value: "5k_10k", label: "$5,000 – $10,000" },
  { value: "10k_25k", label: "$10,000 – $25,000" },
  { value: "25k_50k", label: "$25,000 – $50,000" },
  { value: "50k_plus", label: "$50,000+" },
];

const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1_2_months", label: "1–2 Months" },
  { value: "3_6_months", label: "3–6 Months" },
  { value: "flexible", label: "Flexible" },
];

export default function StartProject() {
  const getLabel = (list, value) => {
  const item = list.find((i) => i.value === value);
  return item ? item.label : value || "—";
  };
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    project_type: "",
    budget_range: "",
    timeline: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_PROJECT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        _subject: "New Project Request — Sentinels Design Lab",

        Name: form.name,
        Company: form.company || "—",
        Email: form.email,
        Phone: form.phone || "—",

        Industry: getLabel(industries, form.industry),
        "Project Type": getLabel(projectTypes, form.project_type),
        Budget: getLabel(budgets, form.budget_range),
        Timeline: getLabel(timelines, form.timeline),

        "Project Details": form.description || "—",
      }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "",
        project_type: "",
        budget_range: "",
        timeline: "",
        description: "",
      });

      toast.success("Project inquiry submitted!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank you.</h2>
          <p className="text-white/50 leading-relaxed">
            We&apos;ve received your project inquiry and will get back to you within 24
            hours to schedule a consultation. In the meantime, feel free to explore
            our work.
          </p>
        </motion.div>
      </section>
    );
  }

  const inputClass =
    "w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";
  const selectClass =
    "w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer transition-all";

  return (
    <section className="pt-32 pb-20 bg-[#0a0a0f] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
            Start a Project
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Let&apos;s build something exceptional.
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">
            Tell us about your project and we&apos;ll schedule a consultation to
            discuss the best approach for your business.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value=""
            readOnly
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Company name"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(555) 000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Industry
              </label>
              <select
                name="industry"
                value={form.industry}
                onChange={(e) => handleChange("industry", e.target.value)}
                className={selectClass}
              >
                <option value="" className="bg-[#111118]">
                  Select industry
                </option>
                {industries.map((ind) => (
                  <option key={ind.value} value={ind.value} className="bg-[#111118]">
                    {ind.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Project Type
              </label>
              <select
                name="project_type"
                value={form.project_type}
                onChange={(e) => handleChange("project_type", e.target.value)}
                className={selectClass}
              >
                <option value="" className="bg-[#111118]">
                  Select type
                </option>
                {projectTypes.map((pt) => (
                  <option key={pt.value} value={pt.value} className="bg-[#111118]">
                    {pt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Budget Range
              </label>
              <select
                name="budget_range"
                value={form.budget_range}
                onChange={(e) => handleChange("budget_range", e.target.value)}
                className={selectClass}
              >
                <option value="" className="bg-[#111118]">
                  Select budget
                </option>
                {budgets.map((b) => (
                  <option key={b.value} value={b.value} className="bg-[#111118]">
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                value={form.timeline}
                onChange={(e) => handleChange("timeline", e.target.value)}
                className={selectClass}
              >
                <option value="" className="bg-[#111118]">
                  Select timeline
                </option>
                {timelines.map((t) => (
                  <option key={t.value} value={t.value} className="bg-[#111118]">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0f] font-medium rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}