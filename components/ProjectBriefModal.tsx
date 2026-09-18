'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles, Shield, MessageCircle } from 'lucide-react';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: string;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  initialTier,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: 'Gym / Fitness',
    tier: initialTier || 'Development Gold (₹12,599)',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTier) {
      setFormData((prev) => ({ ...prev, tier: initialTier }));
    }
  }, [initialTier]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate resilient submission with fallback
    try {
      // Small simulated delay for realistic feel
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brief-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#111511] border border-white/15 rounded-lg shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-sm text-[#8e9189] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#6b7d50]/20 border border-[#6b7d50] flex items-center justify-center mx-auto text-[#6b7d50]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
              Project Brief Received
            </h3>

            <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. The WEBZA team will review your requirements for <span className="text-[#6b7d50]">{formData.tier}</span> and respond within 12 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/917898195460?text=Hi%20WEBZA%2C%20I%20just%20submitted%20a%20brief%20for%20${encodeURIComponent(formData.company || formData.name)}%20(${encodeURIComponent(formData.tier)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] text-[#090a09] px-6 py-3.5 rounded-sm hover:bg-[#7d9161] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp (+91 78981 95460)</span>
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="text-xs font-mono uppercase tracking-wider text-[#8e9189] hover:text-white px-5 py-3.5"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="pb-6 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6b7d50] uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START YOUR PROJECT</span>
              </div>
              <h3
                id="brief-modal-title"
                className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#f5f4ee]"
              >
                Tell Us About Your Website.
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#8e9189] mt-1">
                Fill in the details below and we will prepare a tailored discovery plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#090a09] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Iron Gym / Royal Dining"
                    className="w-full bg-[#090a09] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@business.com"
                    className="w-full bg-[#090a09] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#090a09] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                    Business Sector
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#090a09] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                  >
                    <option value="Gyms & Health Clubs">Gym / Fitness Center</option>
                    <option value="Restaurants & Banquets">Restaurant / Café / Banquet</option>
                    <option value="Local Businesses & Retail">Retail / Local Business</option>
                    <option value="Clinics & Healthcare">Clinic / Healthcare</option>
                    <option value="Startups & Tech">Startup / Tech Product</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Other">Other Vertical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                    Package Selection
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full bg-[#090a09] border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                  >
                    <option value="Development Silver (₹9,999)">Development Silver (₹9,999)</option>
                    <option value="Development Gold (₹12,599)">Development Gold (₹12,599) - Most Popular</option>
                    <option value="Website Redesign">Website Redesign (Custom)</option>
                    <option value="Custom Enterprise Scope">Custom Enterprise Scope</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8e9189] mb-1.5">
                  Project Notes or Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us what you want your new website to achieve (e.g. increase walk-ins, online table bookings, membership signups, etc.)"
                  className="w-full bg-[#090a09] border border-white/10 rounded-sm p-4 text-sm text-white focus:outline-none focus:border-[#6b7d50] font-body"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8e9189]">
                  <Shield className="w-3.5 h-3.5 text-[#6b7d50]" />
                  <span>100% Confidential • Fast 24hr Discovery</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09] px-7 py-3.5 rounded-sm transition-all cursor-pointer shadow-md disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Send Project Brief'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
