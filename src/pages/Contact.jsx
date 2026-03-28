// src/pages/Contact.jsx
"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, ArrowRight, Check, Loader2, MapPin } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_CONTACT_ENDPOINT = "https://formspree.io/f/mnjgoknr";

const serviceOptions = [
  "",
  "Website Design & Development",
  "SEO Services",
  "PPC / Paid Ads",
  "Branding & Identity",
  "Hosting & Maintenance",
  "Custom / Not Sure Yet",
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
  "Just researching",
];

export default function Contact() {
  const searchParams = useSearchParams();

  const initialService = useMemo(() => searchParams.get("service") || "", [searchParams]);
  const initialPackage = useMemo(() => searchParams.get("package") || "", [searchParams]);
  const initialSource = useMemo(() => searchParams.get("source") || "direct", [searchParams]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: initialService,
    packageInterest: initialPackage,
    budget: "",
    timeline: "",
    notes: "",
    source: initialSource,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const subjectParts = ["New SDL Inquiry"];
    if (form.service) subjectParts.push(`Service: ${form.service}`);
    if (form.packageInterest) subjectParts.push(`Package: ${form.packageInterest}`);

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
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
          "Service Interested In": form.service || "—",
          "Package Interested In": form.packageInterest || "—",
          "Estimated Budget": form.budget || "—",
          Timeline: form.timeline || "—",
          "Project Notes": form.notes || "—",
          "Lead Source": form.source || "direct",
          "Page URL": typeof window !== "undefined" ? window.location.href : "—",
        }),
      });

      if (!response.ok) throw new Error("Form submission failed.");

      setSubmitted(true);
      toast.success("Inquiry sent.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              General contact and project inquiries
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/45">
              Use this page for general questions, early conversations, or if you are not yet sure
              which service or package fits.
            </p>

            <div className="mt-10 rounded-3xl border border-white/8 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">Detected inquiry context</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-[#111118] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Service</p>
                  <p className="mt-2 text-sm text-white/70">{initialService || "None preselected"}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-[#111118] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/35">Package</p>
                  <p className="mt-2 text-sm text-white/70">{initialPackage || "None preselected"}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/40">
                Source: <span className="text-white/65">{initialSource}</span>
              </p>
            </div>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                  <a
                    href="mailto:info@sentinelsdesignlab.com"
                    className="text-sm text-white/45 transition-colors hover:text-white"
                  >
                    info@sentinelsdesignlab.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Phone</h4>
                  <p className="text-sm text-white/45">Shared when appropriate for the project fit</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Location</h4>
                  <p className="text-sm text-white/45">Texas-based studio — serving clients nationwide</p>
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
                  <h3 className="text-xl font-semibold text-white">Inquiry sent</h3>
                  <p className="mt-3 text-sm text-white/45">
                    We’ll review the details and follow up with the right next step.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/8 bg-[#111118] p-8 md:p-10">
                <h3 className="text-xl font-semibold text-white">General inquiry</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  For direct project intake from packages and service pages, we should route those to Start Project.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => updateField("name", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-wider text-white/30">Project Notes</label>
                    <textarea
                      rows={6}
                      value={form.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder="Tell us what you need."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

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
                        Send Inquiry
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