// src/pages/StartProject.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Check,
  Loader2,
  ClipboardList,
  Briefcase,
  BadgeDollarSign,
  Clock3,
} from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_START_PROJECT_ENDPOINT = "https://formspree.io/f/mnjgoknr";

const serviceOptions = [
  "",
  "Website Design & Development",
  "SEO Services",
  "PPC / Paid Ads",
  "Branding & Identity",
  "Hosting & Maintenance",
  "Ecommerce Development",
  "Custom App Development",
  "Marketing Systems",
  "Not sure yet",
];

const packageOptions = [
  "",
  "Lite",
  "Starter",
  "Growth",
  "Authority",
  "Not sure yet",
];

const budgetOptions = [
  "",
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
];

const timelineOptions = [
  "",
  "ASAP",
  "Within 30 days",
  "1–3 months",
  "3+ months",
  "Just researching",
];

const projectTypeOptions = [
  "",
  "New build",
  "Redesign",
  "SEO / growth improvement",
  "Paid ads / landing page",
  "Branding refresh",
  "Maintenance / support",
  "Not sure yet",
];

function normalizeOption(value, validOptions) {
  if (!value) return "";
  return validOptions.includes(value) ? value : "";
}

function normalizeSource(value) {
  if (!value) return "direct";
  return String(value).trim().toLowerCase();
}

export default function StartProjectPage() {
  const searchParams = useSearchParams();

  const initialService = useMemo(
    () => normalizeOption(searchParams.get("service") || "", serviceOptions),
    [searchParams]
  );

  const initialPackage = useMemo(
    () => normalizeOption(searchParams.get("package") || "", packageOptions),
    [searchParams]
  );

  const initialSource = useMemo(
    () => normalizeSource(searchParams.get("source") || "direct"),
    [searchParams]
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    website: "",
    service: initialService,
    packageInterest: initialPackage,
    projectType: "",
    budget: "",
    timeline: "",
    notes: "",
    source: initialSource,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      service: initialService,
      packageInterest: initialPackage,
      source: initialSource,
    }));
  }, [initialService, initialPackage, initialSource]);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-white/25 transition-all focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/20";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const subjectParts = ["New SDL Start Project Submission"];
    if (form.service) subjectParts.push(`Service: ${form.service}`);
    if (form.packageInterest) subjectParts.push(`Package: ${form.packageInterest}`);
    if (form.source) subjectParts.push(`Source: ${form.source}`);

    try {
      const response = await fetch(FORMSPREE_START_PROJECT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: subjectParts.join(" | "),
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "—",
          "Business Name": form.businessName || "—",
          Website: form.website || "—",
          "Service Interested In": form.service || "—",
          "Package Interested In": form.packageInterest || "—",
          "Project Type": form.projectType || "—",
          "Estimated Budget": form.budget || "—",
          Timeline: form.timeline || "—",
          "Project Notes": form.notes || "—",
          "Lead Source": form.source || "direct",
          "Detected Service": initialService || "—",
          "Detected Package": initialPackage || "—",
          "Detected Intent Path": [initialService || "", initialPackage || "", initialSource || "direct"]
            .filter(Boolean)
            .join(" | "),
          "Page URL": typeof window !== "undefined" ? window.location.href : "—",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmitted(true);
      toast.success("Project inquiry sent.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0f] pb-20 pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Start Project
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Start your project with real context, not a blind inquiry
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/45">
              This is the main intake path for service and package inquiries. Tell us what you are
              trying to build, improve, or fix so the next conversation starts with useful context.
            </p>

            <div className="mt-10 grid gap-5">
              <div className="rounded-3xl border border-white/8 bg-[#111118] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10">
                    <ClipboardList className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Pre-qualified intake</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      SDL should know the service, package, budget range, and timeline before the
                      first call.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/8 bg-[#111118] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10">
                    <BadgeDollarSign className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Better lead quality</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      This keeps SDL from chasing vague leads and gives you cleaner sales conversations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/8 bg-[#111118] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10">
                    <Clock3 className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Faster fit review</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      The more context the form captures, the easier it is to decide the right next step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-3xl border border-white/8 bg-[#111118] p-10">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
                    <Check className="h-7 w-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Project inquiry sent</h3>
                  <p className="mt-3 text-sm text-white/45">
                    We’ll review the details and follow up with the right next step instead of a generic call.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/8 bg-[#111118] p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    <Briefcase className="h-6 w-6 text-white/75" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">Project intake</h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      This is the main form for package and service interest.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Phone
                      </label>
                      <input
                        type="text"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="Best number"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={form.businessName}
                        onChange={(e) => updateField("businessName", e.target.value)}
                        placeholder="Business name"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                      Website
                    </label>
                    <input
                      type="text"
                      value={form.website}
                      onChange={(e) => updateField("website", e.target.value)}
                      placeholder="Current website, if any"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Service Interested In
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => updateField("service", e.target.value)}
                        className={inputClass}
                      >
                        {serviceOptions.map((option) => (
                          <option key={option || "empty-service"} value={option} className="bg-[#111118]">
                            {option || "Select a service"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Package Interested In
                      </label>
                      <select
                        value={form.packageInterest}
                        onChange={(e) => updateField("packageInterest", e.target.value)}
                        className={inputClass}
                      >
                        {packageOptions.map((option) => (
                          <option key={option || "empty-package"} value={option} className="bg-[#111118]">
                            {option || "Select a package"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Project Type
                      </label>
                      <select
                        value={form.projectType}
                        onChange={(e) => updateField("projectType", e.target.value)}
                        className={inputClass}
                      >
                        {projectTypeOptions.map((option) => (
                          <option key={option || "empty-project-type"} value={option} className="bg-[#111118]">
                            {option || "Select a type"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Estimated Budget
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                        className={inputClass}
                      >
                        {budgetOptions.map((option) => (
                          <option key={option || "empty-budget"} value={option} className="bg-[#111118]">
                            {option || "Select a range"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                        Timeline
                      </label>
                      <select
                        value={form.timeline}
                        onChange={(e) => updateField("timeline", e.target.value)}
                        className={inputClass}
                      >
                        {timelineOptions.map((option) => (
                          <option key={option || "empty-timeline"} value={option} className="bg-[#111118]">
                            {option || "Select a timeline"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">
                      Project Notes
                    </label>
                    <textarea
                      rows={7}
                      value={form.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="What are you trying to build, improve, or fix?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <input type="hidden" name="lead_source" value={form.source} readOnly />
                  <input type="hidden" name="detected_service" value={initialService} readOnly />
                  <input type="hidden" name="detected_package" value={initialPackage} readOnly />

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[#0a0a0f] transition hover:bg-white/90 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Start Project Inquiry
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}