'use client';

import React from 'react';

interface TheOldWaysProps {
  onOpenDraftModal?: () => void;
}

export function TheOldWays({ onOpenDraftModal }: TheOldWaysProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#151913] text-[#FAF7F1] border-t border-b border-white/10" id="relief">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E241C] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="font-label text-xs font-semibold tracking-wider text-white/80 uppercase">
              The old ways
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F1] tracking-tight">
            Websites shouldn’t cost{' '}
            <span className="italic font-normal text-rose-400 line-through decoration-rose-500">
              ₹1,50₹1,50,000.
            </span>{' '}
            Or your weekends.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#FAF7F1]/70 mt-4">
            Agencies charge thousands. AI builders and drag-and-drop editors charge something worse — your precious time.
          </p>
        </div>

        {/* 3-Column Relief Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: The Traditional Agency (Shredded Invoice) */}
          <div className="relative rounded-2xl bg-[#1C2219] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-label font-bold tracking-wider uppercase text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                Option 1 — Traditional Agency
              </span>

              {/* Simulated Invoice Card */}
              <div className="mt-6 bg-[#232B20] border border-white/10 rounded-xl p-4 font-mono text-xs text-white/80 space-y-2 relative overflow-hidden">
                <div className="flex justify-between border-b border-white/10 pb-2 font-bold text-white">
                  <span>INVOICE #2481</span>
                  <span>STATUS: DUE</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Custom Design &amp; UI</span>
                  <span>₹65,000</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Full-Stack Development</span>
                  <span>₹55,000</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>SEO &amp; Analytics Setup</span>
                  <span>₹20,000</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Monthly Maintenance Retainer</span>
                  <span>₹10,000/mo</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2 font-bold text-rose-400 text-sm">
                  <span>TOTAL DUE</span>
                  <span>₹1,50,000+</span>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-body text-white/75">
                <li className="flex items-start gap-2 text-rose-300">
                  <span>✕</span>
                  <span>3 to 6 months of endless delivery delays</span>
                </li>
                <li className="flex items-start gap-2 text-rose-300">
                  <span>✕</span>
                  <span>Dozens of tedious scope alignment meetings</span>
                </li>
                <li className="flex items-start gap-2 text-rose-300">
                  <span>✕</span>
                  <span>You still have to write all the content yourself</span>
                </li>
                <li className="flex items-start gap-2 text-rose-300">
                  <span>✕</span>
                  <span>₹5,000/hr billed for minor text and image revisions</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-label text-white/50 text-center">
              Heavy overhead. Slow results.
            </div>
          </div>

          {/* Column 2: The DIY Builder (Wasted Weekends) */}
          <div className="relative rounded-2xl bg-[#1C2219] border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-label font-bold tracking-wider uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Option 2 — The DIY Builder Trap
              </span>

              {/* Simulated Time Sink Box */}
              <div className="mt-6 bg-[#232B20] border border-white/10 rounded-xl p-4 text-center">
                <div className="font-heading text-4xl font-bold text-amber-400">43 Hours</div>
                <div className="font-body text-xs text-white/70 mt-1">Average time small owners waste wrestling templates</div>
                <div className="mt-3 text-[11px] font-mono text-white/50">
                  ₹/mo base + ₹/mo in paid plugins &amp; themes
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-body text-white/75">
                <li className="flex items-start gap-2 text-amber-300">
                  <span>✕</span>
                  <span>Your weekends and evenings completely consumed</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300">
                  <span>✕</span>
                  <span>Looks like every other generic template in your field</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300">
                  <span>✕</span>
                  <span>Breaks unpredictably on phones and tablets</span>
                </li>
                <li className="flex items-start gap-2 text-amber-300">
                  <span>✕</span>
                  <span>You are the unpaid developer, designer, and IT support</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-label text-white/50 text-center">
              Wasted time. Fragile templates.
            </div>
          </div>

          {/* Column 3: The WEBZA Way (Recommended) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#222c1d] to-[#1A2216] border-2 border-[#6B7D50] p-6 sm:p-7 flex flex-col justify-between shadow-2xl ring-4 ring-[#6B7D50]/20">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#6B7D50] text-white font-label font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              The WEBZA Solution
            </div>

            <div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-xs font-label font-bold tracking-wider uppercase text-[#2BD4BD]">
                  Done-for-you Flagship
                </span>
                <span className="text-xs font-mono text-white/60">Live in 48h</span>
              </div>

              {/* Price Callout */}
              <div className="mt-5 bg-[#151913]/80 border border-[#6B7D50]/40 rounded-xl p-4 text-center">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  ₹9,999 <span className="text-sm font-body font-normal text-white/70">/ ₹12,599</span>
                </div>
                <div className="font-body text-xs text-[#2BD4BD] mt-1 font-semibold">
                  Zero hidden fees. Complete done-for-you package.
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-body text-white/90">
                <li className="flex items-start gap-2 text-[#2BD4BD]">
                  <span>✓</span>
                  <span>Working private custom draft ready in 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-[#2BD4BD]">
                  <span>✓</span>
                  <span>100% built by senior human engineers &amp; designers</span>
                </li>
                <li className="flex items-start gap-2 text-[#2BD4BD]">
                  <span>✓</span>
                  <span>Sub-second load times with 99+ Google PageSpeed</span>
                </li>
                <li className="flex items-start gap-2 text-[#2BD4BD]">
                  <span>✓</span>
                  <span>SEO &amp; AI Search (AEO) built directly into your markup</span>
                </li>
                <li className="flex items-start gap-2 text-[#2BD4BD]">
                  <span>✓</span>
                  <span>Hosting, SSL, and unlimited edits included</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onOpenDraftModal}
                className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm py-3 px-4 rounded-xl shadow-md transition-colors text-center"
              >
                Claim Your Free 24h Draft →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
