'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Mail, MapPin, Sparkles } from 'lucide-react';
import { submitContactForm } from '@/lib/firebase/cmsService';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: 'Development Silver (₹9,999)',
    message: '',
    nda: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        budget: formData.budget,
        message: formData.message,
        nda: formData.nda,
        service: 'Bespoke Flagship Platform',
      });

      // Send email alert via Resend API
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            business: formData.company,
            tier: formData.budget,
            message: formData.message,
            type: 'inquiry',
          }),
        });
      } catch (mailErr) {
        console.warn('Resend alert failed non-blockingly:', mailErr);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: 'Development Silver (₹9,999)',
        message: '',
        nda: true,
      });
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.06] relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative & Locations (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-8 h-px bg-[#6b7d50]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
                Initiate Dialogue
              </span>
            </div>

            <h2
              id="contact-title"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6"
            >
              LET’S BUILD <br />
              <span className="text-[#6b7d50] font-serif italic lowercase text-4xl sm:text-6xl font-normal">
                something
              </span>{' '}
              EXTRAORDINARY.
            </h2>

            <p className="font-body text-sm sm:text-base text-[#8e9189] leading-relaxed mb-8">
              We collaborate with a limited roster of visionary businesses each quarter to ensure uncompromised engineering and creative attention.
            </p>

            {/* Studio Info Card */}
            <div className="p-6 rounded-2xl bg-[#141713]/80 border border-white/10 space-y-6 mb-8">
              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-mono uppercase text-white block">
                    Direct Channel
                  </strong>
                  <a
                    href="mailto:hello@webza.agency"
                    className="text-xs font-mono text-[#8e9189] hover:text-[#6b7d50] transition-colors"
                  >
                    hello@webza.agency
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-mono uppercase text-white block">
                    Location
                  </strong>
                  <span className="text-xs font-mono text-[#8e9189]">
                    India • Serving Clients Worldwide
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <Shield className="w-5 h-5 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-mono uppercase text-white block">
                    Security & Confidentiality
                  </strong>
                  <span className="text-xs text-[#8e9189]">
                    Mutual NDAs executed automatically prior to in-depth technical disclosures.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-[#141713] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/50 to-transparent" />

              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mb-2">
                PROJECT INQUIRY
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#8e9189] mb-8">
                Submit project parameters. We will review and provide an architectural perspective within 24 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center bg-black/40 rounded-xl border border-white/10 p-6">
                  <div className="w-14 h-14 rounded-full bg-[#6b7d50]/20 border border-[#6b7d50]/40 flex items-center justify-center text-[#6b7d50] mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase text-white mb-2">
                    Inquiry Received
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#8e9189] max-w-sm mx-auto mb-6">
                    Thank you. Founder Ritesh Singh and our development team are reviewing your submission.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-[#6b7d50] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Hayes"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Krypton Labs"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Target Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-white text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors cursor-pointer"
                      >
                        <option value="Development Silver (₹9,999)" className="bg-[#141713]">Development Silver (₹9,999)</option>
                        <option value="Development Gold (₹12,599)" className="bg-[#141713]">Development Gold (₹12,599)</option>
                        <option value="Combined Package (Dev + Hosting)" className="bg-[#141713]">Combined Package (Dev + Hosting)</option>
                        <option value="Custom Scope / Multiple Projects" className="bg-[#141713]">Custom Scope / Multiple Projects</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Ambition & Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your objectives, target launch window, or existing platform challenges..."
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/15 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="nda-check"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                      className="w-4 h-4 rounded border-white/20 bg-black/50 text-[#6b7d50] focus:ring-[#6b7d50] accent-[#6b7d50]"
                    />
                    <label htmlFor="nda-check" className="text-xs text-[#8e9189] cursor-pointer">
                      Please send a standard mutual NDA prior to our technical kickoff.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-[#6b7d50]/15 disabled:opacity-50 mt-4"
                  >
                    <span>{isSubmitting ? 'Transmitting Brief...' : 'Dispatch Project Inquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
