"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Check, Loader2, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setLoading(false);
    setSubmitted(true);
    toast.success("Message captured.");
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all";

  return (
    <section className="pt-32 pb-20 bg-[#0a0a0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-blue-400 mb-4">
              Contact
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              Get in touch.
            </h1>

            <p className="text-lg text-white/40 leading-relaxed mb-12">
              Have a question, a project idea, or want to discuss a build? Reach
              out and we&apos;ll follow up promptly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                  <a
                    href="mailto:info@sentinelsdesignlab.com"
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    info@sentinelsdesignlab.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Phone</h4>
                  <a
                    href="tel:+10000000000"
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    Available on request
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Location
                  </h4>
                  <p className="text-white/40 text-sm">
                    Texas-based studio — serving clients nationwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message received
                  </h3>
                  <p className="text-white/40 text-sm">
                    This form is in local capture mode for now. Next.js server
                    actions or Formspree can be wired next.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-8 md:p-10 rounded-2xl bg-[#111118] border border-white/5">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
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
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

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
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/30 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      placeholder="Tell us about the build."
                      rows={5}
                      className={`${inputClass} resize-none`}
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}