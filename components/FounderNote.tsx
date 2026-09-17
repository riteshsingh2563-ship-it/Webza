'use client';

import React from 'react';
import Image from 'next/image';

interface FounderNoteProps {
  onOpenDraftModal?: () => void;
}

export function FounderNote({ onOpenDraftModal }: FounderNoteProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15]" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Portrait / Visual Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-[#221D15]/15 shadow-[0_20px_50px_rgba(34,29,21,0.08)] bg-white p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#151913]">
                <Image
                  src="/brand/webza-brand-poster.jpg"
                  alt="WEBZA Brand Poster & Engineering Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="font-heading font-bold text-lg text-[#221D15]">
                The WEBZA Engineering Team
              </div>
              <div className="font-body text-xs text-[#221D15]/60">
                Built to be Seen • Mumbai &amp; Global Remote
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
              <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
                Who’s behind this
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#221D15] tracking-tight leading-tight">
              Websites shouldn’t be a{' '}
              <span className="italic font-normal text-[#6B7D50]">luxury</span> or an endless headache.
            </h2>

            <div className="space-y-4 font-body text-sm sm:text-base text-[#221D15]/80 leading-relaxed">
              <p>
                Every growing business needs a flagship website that commands trust, loads instantly, and gets recommended by modern search engines. Yet for years, founders were forced into an impossible dilemma:
              </p>
              <p>
                Either pay traditional agencies <strong className="text-[#221D15] font-semibold">₹1,50,000+ (₹1,50,000)</strong> for months of bloated meetings and delay, or sacrifice weekends wrestling DIY builders that break on mobile and look generic.
              </p>
              <p>
                We built <strong className="text-[#221D15] font-semibold">WEBZA</strong> to obliterate that compromise. By automating 90% of repetitive web infrastructure with Next.js 14 and edge computing, our senior human designers focus 100% of their energy on brand aesthetics, conversion storytelling, and speed.
              </p>
            </div>

            {/* Facts Checklist */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-[#221D15]">
                <span className="text-[#0FA88F] font-bold">✓</span>
                <span>Senior full-stack engineering with sub-second performance standards</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-[#221D15]">
                <span className="text-[#0FA88F] font-bold">✓</span>
                <span>Real human designers and copywriters — zero automated boilerplate</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-[#221D15]">
                <span className="text-[#0FA88F] font-bold">✓</span>
                <span>Direct WhatsApp developer communication — no support tickets</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-[#221D15]">
                <span className="text-[#0FA88F] font-bold">✓</span>
                <span>100% risk-free: Review your custom draft in 24h before paying</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDraftModal}
                className="bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm px-6 py-3 rounded-full shadow-md transition-colors"
              >
                Get Started With WEBZA Today →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
