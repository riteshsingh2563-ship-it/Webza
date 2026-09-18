'use client';

import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Mail } from 'lucide-react';

interface FinalCtaProps {
  onOpenProjectBrief?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenProjectBrief }) => {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#0c0f0c] border-t border-white/[0.08] relative overflow-hidden text-center"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-4">
          12 • LET&apos;S BUILD TOGETHER
        </span>

        <h2
          id="cta-heading"
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#f5f4ee] leading-[1.05] mb-6"
        >
          Ready to build a <br />
          <span className="text-[#6b7d50]">better website?</span>
        </h2>

        <p className="font-body text-base sm:text-xl text-[#8e9189] max-w-2xl mx-auto leading-relaxed mb-10">
          Let&apos;s turn your online presence into something your customers remember.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={onOpenProjectBrief}
            className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.16em] bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09] px-9 py-5 rounded-sm transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-2xl cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/917898195460?text=Hi%20WEBZA%2C%20I%20would%20like%20to%20discuss%20building%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-[#f5f4ee] bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 px-8 py-5 rounded-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp (+91 78981 95460)</span>
          </a>
        </div>

        {/* Direct Inquiries Capsule */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 p-4 bg-[#141813] border border-white/[0.08] rounded-md text-xs font-mono text-[#8e9189]">
          <a
            href="https://wa.me/917898195460"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>WhatsApp: +91 78981 95460</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6b7d50]" />
            <span>Fast Turnaround (5–14 Days)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6b7d50]" />
            <span>Direct Founder Access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6b7d50]" />
            <span>Full Asset Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
};
