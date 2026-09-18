'use client';

import React from 'react';

interface PricingStoreboxProps {
  onSelectTier: (tier: string) => void;
}

export function PricingStorebox({ onSelectTier }: PricingStoreboxProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#151913] text-[#FAF7F1] border-t border-b border-white/10" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E241C] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2BD4BD]" />
            <span className="font-label text-xs font-semibold tracking-wider text-white/80 uppercase">
              Transparent Development Pricing
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F1] tracking-tight">
            Clear investment.{' '}
            <span className="italic font-normal text-[#829762]">Zero hidden clauses.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#FAF7F1]/70 mt-4 leading-relaxed">
            Transparent website development rates with full code ownership. Hosting and domain registration are clearly itemized and separate.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="text-xs font-label bg-[#1E241C] border border-white/10 text-white/80 px-3.5 py-1.5 rounded-full">
              <strong className="text-[#2BD4BD]">✓</strong> Development only pricing
            </span>
            <span className="text-xs font-label bg-[#1E241C] border border-white/10 text-white/80 px-3.5 py-1.5 rounded-full">
              <strong className="text-[#2BD4BD]">✓</strong> Hosting &amp; domain separate
            </span>
            <span className="text-xs font-label bg-[#1E241C] border border-white/10 text-white/80 px-3.5 py-1.5 rounded-full">
              <strong className="text-[#2BD4BD]">✓</strong> 100% code &amp; asset ownership
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Tier 1: Silver */}
          <div className="rounded-2xl bg-[#1C2219] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-white/25 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Development Silver
                </h3>
                <span className="text-xs font-label text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                  Website Dev
                </span>
              </div>

              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ₹9,999
                </span>
                <span className="text-xs font-body text-white/60 ml-2 font-normal">
                  development only
                </span>
              </div>
              <p className="font-body text-xs text-white/65 mb-6">
                Professional responsive website engineered for businesses looking for modern online presence.
              </p>

              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Professional responsive website</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Modern UI/UX &amp; intentional typography</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Mobile &amp; desktop optimization</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Deployment setup &amp; DNS routing</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-60">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Admin Portal: <strong>Not Included</strong></span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-white/50 pt-1">
                  <span className="text-amber-400">•</span>
                  <span>Hosting &amp; domain separate</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectTier('Development Silver (₹9,999)')}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-label font-semibold text-sm py-3.5 rounded-xl transition-colors text-center border border-white/15"
            >
              Request a Free Demo →
            </button>
          </div>

          {/* Tier 2: Gold (POPULAR / HIGHLIGHTED) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#242e20] to-[#1C2419] border-2 border-[#6B7D50] p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative ring-4 ring-[#6B7D50]/20 transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#6B7D50] text-white font-label font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <div className="flex items-center justify-between mt-2">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Development Gold
                </h3>
                <span className="text-xs font-label text-[#2BD4BD] bg-[#2BD4BD]/10 border border-[#2BD4BD]/25 px-2.5 py-1 rounded-full">
                  + Admin Portal
                </span>
              </div>

              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ₹12,599
                </span>
                <span className="text-xs font-body text-white/60 ml-2 font-normal">
                  development only
                </span>
              </div>
              <p className="font-body text-xs text-white/70 mb-6">
                Complete website development with custom Admin Portal for managing your website content.
              </p>

              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/90 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span><strong className="text-white">Everything included in Silver</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Custom Admin Portal</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Basic website &amp; content management through panel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>High-speed Next.js architecture</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Priority 24-hour turnaround</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-white/50 pt-1">
                  <span className="text-amber-400">•</span>
                  <span>Hosting &amp; domain separate</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectTier('Development Gold (₹12,599)')}
              className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm py-4 rounded-xl shadow-lg transition-colors text-center"
            >
              Request a Free Demo →
            </button>
          </div>

          {/* Tier 3: Separate Hosting Plans */}
          <div className="rounded-2xl bg-[#1C2219] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-white/25 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Hosting Options
                </h3>
                <span className="text-xs font-label text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                  Separate Plans
                </span>
              </div>

              <div className="mt-4 mb-2">
                <span className="font-heading text-3xl font-bold text-white tracking-tight">
                  Separate
                </span>
                <span className="text-xs font-body text-white/60 ml-2 font-normal">
                  cloud hosting
                </span>
              </div>
              <p className="font-body text-xs text-white/65 mb-6">
                Dedicated high-performance cloud hosting setup for your production site.
              </p>

              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span><strong>12 Months:</strong> ₹5,400</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span><strong>24 Months:</strong> ₹8,500</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span><strong>48 Months:</strong> ₹15,000</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Automated SSL &amp; high-speed cloud edge</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-white/50 pt-1">
                  <span className="text-amber-400">•</span>
                  <span>Domain registration separate</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectTier('Hosting Plan Inquiry')}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-label font-semibold text-sm py-3.5 rounded-xl transition-colors text-center border border-white/15"
            >
              Inquire Hosting →
            </button>
          </div>
        </div>

        {/* Combined Pricing Table */}
        <div className="mt-16 bg-[#1C2219] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Development + Hosting Combined Breakdown
            </h3>
            <p className="font-body text-xs sm:text-sm text-white/60 max-w-xl mx-auto">
              If you wish to bundle hosting with website development, reference the exact combined totals below. Domain registration is separate.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm font-body text-white">
              <thead>
                <tr className="border-b border-white/15 font-label uppercase tracking-wider text-[11px] text-white/50">
                  <th className="py-3 px-4">Tier</th>
                  <th className="py-3 px-4">Dev Only</th>
                  <th className="py-3 px-4">+ 12 Mo (₹5,400)</th>
                  <th className="py-3 px-4">+ 24 Mo (₹8,500)</th>
                  <th className="py-3 px-4">+ 48 Mo (₹15,000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Development Silver</td>
                  <td className="py-4 px-4 font-mono text-[#829762]">₹9,999</td>
                  <td className="py-4 px-4 font-mono">₹15,399</td>
                  <td className="py-4 px-4 font-mono">₹18,499</td>
                  <td className="py-4 px-4 font-mono">₹24,999</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">
                    Development Gold <span className="text-[10px] bg-[#6B7D50] text-white px-2 py-0.5 rounded-full ml-1 font-normal">+ Admin Portal</span>
                  </td>
                  <td className="py-4 px-4 font-mono text-[#829762]">₹12,599</td>
                  <td className="py-4 px-4 font-mono">₹17,999</td>
                  <td className="py-4 px-4 font-mono">₹21,099</td>
                  <td className="py-4 px-4 font-mono">₹27,599</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-body text-white/50 flex flex-col sm:flex-row justify-between gap-2">
            <span>* Domain registration is separate and depends on selected extension (.com, .in, etc.) and availability.</span>
            <span className="text-[#2BD4BD]">✓ Full code &amp; digital asset ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
