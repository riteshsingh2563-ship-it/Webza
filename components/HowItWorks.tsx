'use client';

import React, { useState } from 'react';

interface HowItWorksProps {
  onOpenDraftModal?: () => void;
}

export function HowItWorks({ onOpenDraftModal }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Paste your link',
      description:
        'Or answer a few quick questions. We learn your business from your Instagram, Google Maps profile, old website, or rough voice note. Takes under 2 minutes.',
      pill: 'Your only step (2 mins)',
      icons: ['Google Maps', 'Instagram', 'Catalog PDF', 'Old Website'],
    },
    {
      num: '02',
      title: 'We build your custom draft',
      description:
        'Our senior engineers and designers build a real, fully interactive draft in 24 hours. Not a static Figma image — real code on a private preview link. No upfront payment required.',
      pill: '24-hour delivery',
      icons: ['Next.js 14', 'Tailwind', 'Mobile-First', 'Sub-Second'],
    },
    {
      num: '03',
      title: 'We add your real stuff',
      description:
        'Tell us what to tweak. We load your real menu or product catalog, connect WhatsApp ordering, dial in your photography, and refine the copy to match your exact tone.',
      pill: 'Unlimited revisions',
      icons: ['WhatsApp API', 'UPI Payments', 'Custom Copy', 'Brand Identity'],
    },
    {
      num: '04',
      title: 'Go live on your domain',
      description:
        'Connect your own custom domain (.com, .in, etc.) with automatic global SSL, high-speed CDN, and automated DNS routing handled completely by our team.',
      pill: 'Instant launch',
      icons: ['Custom Domain', 'SSL Secure', 'Edge CDN', 'Zero Downtime'],
    },
    {
      num: '05',
      title: 'We grow your leads',
      description:
        'We don’t abandon you after launch. Your website stays blazing fast (99+ PageSpeed), indexed on Google, recommended by ChatGPT/Perplexity, with unlimited edits included.',
      pill: 'Managed forever',
      icons: ['Google SEO', 'AI Engine (AEO)', 'Unlimited Edits', 'Speed Tuning'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15]" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
            <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
              How it works
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#221D15] tracking-tight">
            You do step one.{' '}
            <span className="italic font-normal text-[#6B7D50]">We do the rest.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#221D15]/75 mt-4">
            Five steps from nothing to growing. Exactly one of them requires your time.
          </p>
        </div>

        {/* 5-Step Cards Rail */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(index)}
                className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-[#6B7D50] shadow-xl ring-2 ring-[#6B7D50]/20 -translate-y-1'
                    : 'bg-white/80 border-[#221D15]/10 hover:border-[#6B7D50]/40 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-heading text-2xl font-bold ${
                        isActive ? 'text-[#6B7D50]' : 'text-[#221D15]/30'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span
                      className={`text-[11px] font-label font-semibold px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#6B7D50]/15 text-[#4E5B38]'
                          : 'bg-[#221D15]/5 text-[#221D15]/60'
                      }`}
                    >
                      {step.pill}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-[#221D15] mb-2">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#221D15]/75 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#221D15]/10 flex flex-wrap gap-1.5">
                  {step.icons.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-label px-2 py-0.5 rounded bg-[#FAF7F1] text-[#221D15]/70 border border-[#221D15]/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action button below steps */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenDraftModal}
            className="inline-flex items-center justify-center gap-2 bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <span>Start Step One — Claim Free 24h Draft</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
