'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'Development Silver',
      price: '₹9,999',
      cadence: 'Development only',
      badge: 'ESSENTIAL FOUNDATION',
      isPopular: false,
      description:
        'Professional responsive website engineered with modern UI/UX and mobile-first ergonomics.',
      deliverables: [
        'Professional responsive website',
        'Modern UI/UX & typography hierarchy',
        'Mobile & desktop optimization',
        'Deployment setup & DNS configuration',
        'Clean Next.js & Tailwind CSS architecture',
        'Direct WhatsApp & inquiry button integration',
      ],
      adminPortal: false,
      ctaText: 'Choose Silver',
    },
    {
      name: 'Development Gold',
      price: '₹12,599',
      cadence: 'Development only',
      badge: 'MOST POPULAR',
      isPopular: true,
      description:
        'Everything in Silver plus a custom Admin Portal for managing your website content with ease.',
      deliverables: [
        'Everything included in Silver',
        'Custom Admin Portal integration',
        'Basic website & content management panel',
        'High-speed Next.js performance setup',
        'Priority 24-hour turnaround',
        'Direct developer communication desk',
      ],
      adminPortal: true,
      ctaText: 'Choose Gold',
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-[#0c0e0c] border-t border-white/[0.08] relative text-[#f5f4ee]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              TRANSPARENT PRICING
            </span>
            <h2
              id="pricing-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Exact Development Pricing
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            Straightforward website development pricing. You get full code ownership. Hosting and domain registration are separate.
          </p>
        </div>

        {/* 2 Development Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? 'bg-[#141813] border-2 border-[#6b7d50] shadow-2xl scale-[1.01]'
                  : 'bg-[#101310] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 right-8 bg-[#6b7d50] text-[#090a09] font-mono font-bold text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full shadow">
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    {tier.name}
                  </h3>
                  <span className="text-[10px] font-mono text-[#6b7d50] border border-[#6b7d50]/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {tier.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs font-mono text-[#8e9189]">
                    {tier.cadence}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#8e9189] mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="pt-4 border-t border-white/10 mb-8 space-y-3">
                  {tier.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#f5f4ee]/90">
                      <Check className="w-4 h-4 text-[#6b7d50] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {!tier.adminPortal && (
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-white/50">
                      <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span>Admin Portal: <strong>Not Included</strong></span>
                    </div>
                  )}
                  <div className="flex items-start gap-3 text-[11px] text-white/40 pt-2 border-t border-white/5">
                    <span className="text-amber-400">•</span>
                    <span>Hosting and domain registration are separate.</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectTier && onSelectTier(tier.name)}
                className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 ${
                  tier.isPopular
                    ? 'bg-[#6b7d50] hover:bg-[#5a6b42] text-white shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Request a Free Demo →
              </button>
            </div>
          ))}
        </div>

        {/* Hosting & Combined Table */}
        <div className="max-w-5xl mx-auto bg-[#101310] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
              Development + Hosting Combined Pricing
            </h3>
            <p className="text-xs sm:text-sm text-[#8e9189] max-w-xl mx-auto">
              Hosting is separate from development. Below are the exact combined package options. Domain registration is separate.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-white/50">
                  <th className="py-3 px-4">Tier</th>
                  <th className="py-3 px-4">Dev Only</th>
                  <th className="py-3 px-4">+ 12 Mo (₹5,400)</th>
                  <th className="py-3 px-4">+ 24 Mo (₹8,500)</th>
                  <th className="py-3 px-4">+ 48 Mo (₹15,000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium text-white">Development Silver</td>
                  <td className="py-3.5 px-4 text-[#829762]">₹9,999</td>
                  <td className="py-3.5 px-4">₹15,399</td>
                  <td className="py-3.5 px-4">₹18,499</td>
                  <td className="py-3.5 px-4">₹24,999</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-sans font-medium text-white">
                    Development Gold <span className="text-[10px] bg-[#6b7d50] text-[#090a09] px-2 py-0.5 rounded font-mono">+ Admin</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#829762]">₹12,599</td>
                  <td className="py-3.5 px-4">₹17,999</td>
                  <td className="py-3.5 px-4">₹21,099</td>
                  <td className="py-3.5 px-4">₹27,599</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-white/50 flex flex-col sm:flex-row justify-between gap-2">
            <span>* Domain registration depends on selected extension and availability.</span>
            <span className="text-[#2BD4BD]">✓ Full ownership of codebase upon delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
