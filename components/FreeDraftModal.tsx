'use client';

import React, { useState } from 'react';

interface FreeDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: string;
  initialBusiness?: string;
  initialPhone?: string;
}

export function FreeDraftModal({
  isOpen,
  onClose,
  initialTier = 'Store (₹12,599)',
  initialBusiness = '',
  initialPhone = '',
}: FreeDraftModalProps) {
  const [businessName, setBusinessName] = useState(initialBusiness);
  const [phone, setPhone] = useState(initialPhone);
  const [linkOrNotes, setLinkOrNotes] = useState('');
  const [selectedTier, setSelectedTier] = useState(initialTier);
  const [submitted, setSubmitted] = useState(false);

  // Sync initial props
  React.useEffect(() => {
    if (initialBusiness) setBusinessName(initialBusiness);
    if (initialPhone) setPhone(initialPhone);
    if (initialTier) setSelectedTier(initialTier);
  }, [initialBusiness, initialPhone, initialTier]);

  if (!isOpen) return null;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business: businessName,
          phone,
          tier: selectedTier,
          message: linkOrNotes,
          type: 'draft',
        }),
      });
    } catch (err) {
      console.warn('Resend email dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello WEBZA! I'd like to request my free 24-hour website draft.\n\nBusiness: ${businessName}\nWhatsApp: ${phone}\nPackage: ${selectedTier}\nDetails/Link: ${linkOrNotes || 'None'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="bg-[#FAF7F1] border border-[#221D15]/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-[#221D15] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#221D15]/70 hover:text-[#221D15] transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#0FA88F]/15 text-[#0FA88F] text-3xl font-bold flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#221D15]">
              Draft Request Received!
            </h3>
            <p className="font-body text-sm text-[#221D15]/75 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#221D15]">{businessName}</strong>! Our engineering team is reviewing your details. Your custom preview link will be ready in under 24 hours.
            </p>

            <div className="pt-3 space-y-2">
              <a
                href={`https://api.whatsapp.com/send?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-label font-bold text-sm py-3.5 rounded-xl shadow-md transition-colors"
              >
                <span>Fast-Track on WhatsApp</span>
                <span aria-hidden="true">💬</span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full text-xs font-label text-[#221D15]/60 hover:text-[#221D15] py-2"
              >
                Done and return to site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B7D50]/15 text-[#4E5B38] text-xs font-label font-bold uppercase mb-3">
              <span>⚡</span>
              <span>24-Hour Custom Turnaround</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#221D15]">
              Claim Your Free Website Draft
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#221D15]/70 mt-1.5 mb-6">
              No upfront payment. No sales calls. See what your brand looks like on WEBZA before committing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-label font-bold text-[#221D15] mb-1">
                  Business Name or Brand *
                </label>
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Artisan Atelier & Studio"
                  className="w-full px-4 py-3 rounded-xl border border-[#221D15]/15 bg-white text-sm font-body focus:outline-none focus:border-[#6B7D50]"
                />
              </div>

              <div>
                <label className="block text-xs font-label font-bold text-[#221D15] mb-1">
                  WhatsApp or Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Where should we send your private preview link?"
                  className="w-full px-4 py-3 rounded-xl border border-[#221D15]/15 bg-white text-sm font-body focus:outline-none focus:border-[#6B7D50]"
                />
              </div>

              <div>
                <label className="block text-xs font-label font-bold text-[#221D15] mb-1">
                  Existing Link, Instagram, or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={linkOrNotes}
                  onChange={(e) => setLinkOrNotes(e.target.value)}
                  placeholder="Paste an Instagram handle, old website, or describe what you want"
                  className="w-full px-4 py-3 rounded-xl border border-[#221D15]/15 bg-white text-sm font-body focus:outline-none focus:border-[#6B7D50]"
                />
              </div>

              <div>
                <label className="block text-xs font-label font-bold text-[#221D15] mb-1">
                  Selected Package
                </label>
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#221D15]/15 bg-white text-sm font-body focus:outline-none focus:border-[#6B7D50]"
                >
                  <option value="Development Silver (₹9,999)">
                    Development Silver — ₹9,999 (Development only, No Admin Portal)
                  </option>
                  <option value="Development Gold (₹12,599)">
                    Development Gold (Most Popular) — ₹12,599 (With Custom Admin Portal)
                  </option>
                  <option value="Development Silver + 12 Mo Hosting (₹15,399)">
                    Development Silver + 12 Mo Hosting — ₹15,399
                  </option>
                  <option value="Development Silver + 24 Mo Hosting (₹18,499)">
                    Development Silver + 24 Mo Hosting — ₹18,499
                  </option>
                  <option value="Development Silver + 48 Mo Hosting (₹24,999)">
                    Development Silver + 48 Mo Hosting — ₹24,999
                  </option>
                  <option value="Development Gold + 12 Mo Hosting (₹17,999)">
                    Development Gold + 12 Mo Hosting — ₹17,999
                  </option>
                  <option value="Development Gold + 24 Mo Hosting (₹21,099)">
                    Development Gold + 24 Mo Hosting — ₹21,099
                  </option>
                  <option value="Development Gold + 48 Mo Hosting (₹27,599)">
                    Development Gold + 48 Mo Hosting — ₹27,599
                  </option>
                  <option value="Custom Project Scope">
                    Custom Project Scope — Discuss With Engineering Team
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] disabled:opacity-60 disabled:cursor-not-allowed text-white font-label font-semibold text-sm sm:text-base py-3.5 rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Draft Request...</span>
                  ) : (
                    <>
                      <span>Build My Free Draft in 24 Hours</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] font-body text-[#221D15]/60 flex items-center justify-center gap-3 pt-1">
                <span>✓ Zero credit card required</span>
                <span>•</span>
                <span>100% human design</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
