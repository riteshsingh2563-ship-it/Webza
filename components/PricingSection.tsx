'use client';

import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'Development Silver',
      price: '₹9,999',
      cadence: 'One-time investment',
      badge: 'ESSENTIAL FOUNDATION',
      isPopular: false,
      description:
        'A complete, high-converting digital presence engineered for growing local businesses, clinics, and creators looking to establish authoritative market presence.',
      deliverables: [
        'Up to 5 Custom-Designed Responsive Pages',
        'Next.js High-Speed Architecture',
        'Mobile-First Ergonomics (320px to 4K)',
        'Direct WhatsApp & Phone Integration',
        'Validated Lead Capture Contact Form',
        'SEO Foundation (Sitemap, Meta & OpenGraph)',
        'Google Maps & Local Directory Setup',
        'Domain DNS & Production Cloud Deployment',
        '14 Days Dedicated Post-Launch Support',
      ],
      ctaText: 'Choose Silver',
    },
    {
      name: 'Development Gold',
      price: '₹12,599',
      cadence: 'One-time investment',
      badge: 'MOST POPULAR',
      isPopular: true,
      description:
        'Our premier flagship web build for gyms, luxury dining, retail showrooms, and businesses ready to dominate their local industry and outclass competitors.',
      deliverables: [
        'Up to 10 Custom-Designed Bespoke Pages',
        'Editorial Typography & Custom Micro-Animations',
        'Interactive Catalog or Table/Booking Engine',
        'Sub-second Global Edge Loading (95+ Lighthouse)',
        'Advanced SEO & AI Engine (AEO) Meta Architecture',
        'WhatsApp Lead Capture & Inquiry Routing',
        'Analytics Pre-Wiring (Google Analytics 4 / Pixel)',
        'Security Headers, SSL & Static CDN Delivery',
        '30 Days Dedicated VIP Post-Launch Support',
      ],
      ctaText: 'Choose Gold',
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 bg-[#0c0e0c] border-t border-white/[0.08] relative"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              10 • TRANSPARENT PRICING
            </span>
            <h2
              id="pricing-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Honest Investment. Real Results.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            Transparent pricing with zero hidden fees. You get clean, production-ready code with complete ownership of your digital assets.
          </p>
        </div>

        {/* 2-Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular
                  ? 'bg-[#141813] border-2 border-[#6b7d50] shadow-2xl scale-[1.01]'
                  : 'bg-[#101310] border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 right-8 bg-[#6b7d50] text-[#090a09] font-mono font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded shadow">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#6b7d50]">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#f5f4ee] mb-3">
                  {tier.name}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 pb-6 border-b border-white/[0.08] mb-6">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-[#8e9189]">
                    / {tier.cadence}
                  </span>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-widest block mb-1">
                    PACKAGE INCLUDES:
                  </span>
                  {tier.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm font-body text-neutral-300"
                    >
                      <Check className="w-4 h-4 text-[#6b7d50] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <button
                type="button"
                onClick={() => onSelectTier?.(`${tier.name} (${tier.price})`)}
                className={`w-full inline-flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] py-4 rounded-sm transition-all cursor-pointer shadow-md ${
                  tier.isPopular
                    ? 'bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09]'
                    : 'bg-white/[0.05] hover:bg-[#6b7d50] hover:text-[#090a09] text-[#f5f4ee] border border-white/10 hover:border-[#6b7d50]'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise & Custom Inquiries Banner */}
        <div className="p-8 bg-[#111511] border border-white/[0.08] rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-1">
            <h4 className="font-display text-lg font-bold uppercase text-white">
              Need Multi-Branch, E-Commerce, or Custom Portal Architecture?
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#8e9189]">
              We also design complex multi-page web applications and custom systems tailored to unique operational requirements.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectTier?.('Custom Enterprise Scope')}
            className="inline-flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-widest bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f4ee] border border-white/15 px-6 py-3.5 rounded-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4 text-[#6b7d50]" />
          </button>
        </div>
      </div>
    </section>
  );
};
