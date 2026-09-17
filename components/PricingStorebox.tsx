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
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F1] tracking-tight">
            A steal.{' '}
            <span className="italic font-normal text-[#829762]">On purpose.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#FAF7F1]/70 mt-4 leading-relaxed">
            True done-for-you development at clear, accessible prices. No hidden monthly software bills. No surprises.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="text-xs font-label bg-[#1E241C] border border-white/10 text-white/80 px-3.5 py-1.5 rounded-full">
              <strong className="text-[#2BD4BD]">✓</strong> No contracts
            </span>
            <span className="text-xs font-label bg-[#1E241C] border border-white/10 text-white/80 px-3.5 py-1.5 rounded-full">
              <strong className="text-[#2BD4BD]">✓</strong> 24-hour draft delivery
            </span>
            <span className="text-xs font-label bg-[#1E241C] border border-white/10 text-white/80 px-3.5 py-1.5 rounded-full">
              <strong className="text-[#2BD4BD]">✓</strong> 100% satisfaction guarantee
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
                  Fast Flagship
                </span>
              </div>

              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ₹9,999
                </span>
                <span className="text-xs font-body text-white/60 ml-2 font-normal">
                  all-inclusive
                </span>
              </div>
              <p className="font-body text-xs text-white/65 mb-6">
                Ideal for studios, consultants, clinics &amp; boutique service businesses.
              </p>

              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Working custom draft in 24 hours</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>5-page bespoke responsive web flagship</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>100% mobile-first layout with fluid gestures</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Google SEO &amp; Rich Schema markup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Direct WhatsApp lead capture button</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Custom domain connection &amp; auto SSL</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Sub-second load speed (99+ PageSpeed)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>1 year high-speed cloud hosting setup</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectTier('Development Silver (₹9,999)')}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-label font-semibold text-sm py-3.5 rounded-xl transition-colors text-center border border-white/15"
            >
              Claim Silver Draft (24h) →
            </button>
          </div>

          {/* Tier 2: Gold (POPULAR / HIGHLIGHTED) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#242e20] to-[#1C2419] border-2 border-[#6B7D50] p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative ring-4 ring-[#6B7D50]/20 transform md:-translate-y-2">
            {/* Most Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#6B7D50] text-white font-label font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Most Popular • Best Value
            </div>

            <div>
              <div className="flex items-center justify-between mt-2">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Development Gold
                </h3>
                <span className="text-xs font-label text-[#2BD4BD] bg-[#2BD4BD]/10 border border-[#2BD4BD]/25 px-2.5 py-1 rounded-full">
                  Complete Store &amp; AEO
                </span>
              </div>

              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ₹12,599
                </span>
                <span className="text-xs font-body text-white/60 ml-2 font-normal">
                  all-inclusive
                </span>
              </div>
              <p className="font-body text-xs text-white/70 mb-6">
                For brands that want online sales, booking engines, and AI search dominance.
              </p>

              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/90 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span><strong className="text-white">Everything included in Silver Tier</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Full E-Commerce catalog &amp; storefront</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Integrated Payment Gateway (UPI, Cards, Netbanking)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>AI Engine Optimization (AEO for ChatGPT &amp; Perplexity)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Interactive booking desk or product order drawer</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Priority 24-hour turnaround guaranteed</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>WhatsApp CRM lead automation &amp; order alerts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Unlimited revisions &amp; dedicated senior engineer</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectTier('Development Gold (₹12,599)')}
              className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm py-4 rounded-xl shadow-lg transition-colors text-center"
            >
              Claim Gold Draft (24h) →
            </button>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="rounded-2xl bg-[#1C2219] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-xl relative hover:border-white/25 transition-all duration-200">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Enterprise Custom
                </h3>
                <span className="text-xs font-label text-white/50 bg-white/5 px-2.5 py-1 rounded-full">
                  Custom Scope
                </span>
              </div>

              <div className="mt-4 mb-2">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  Custom
                </span>
                <span className="text-xs font-body text-white/60 ml-2 font-normal">
                  quote
                </span>
              </div>
              <p className="font-body text-xs text-white/65 mb-6">
                For multi-location retail chains, high-volume catalogs, and custom web apps.
              </p>

              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/85 mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Multi-location franchise architecture</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Custom ERP / Inventory sync backend</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Enterprise SLA &amp; dedicated engineer on call</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Headless CMS &amp; editorial team workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#2BD4BD] font-bold">✓</span>
                  <span>Custom security audits &amp; HIPAA/GDPR standards</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectTier('Enterprise Custom')}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-label font-semibold text-sm py-3.5 rounded-xl transition-colors text-center border border-white/15"
            >
              Schedule Enterprise Brief →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
