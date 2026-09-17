'use client';

import React from 'react';
import { Search, PenTool, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business, audience and goals.',
      icon: Search,
      details:
        'We begin by analyzing your industry, studying your ideal customers, and auditing your current online presence. We define exact objectives, required pages, and core conversion paths.',
      deliverables: ['Target Audience Profile', 'Sitemap & Information Architecture', 'Content Strategy Guide'],
    },
    {
      number: '02',
      title: 'DESIGN',
      subtitle: 'Create the visual direction and user experience.',
      icon: PenTool,
      details:
        'We craft bespoke wireframes and high-fidelity prototypes that reflect your brand identity. Every layout, typography scale, and color choice is engineered to command authority.',
      deliverables: ['Design System Tokens', 'Figma Responsive Layouts', 'Interactive Prototype Review'],
    },
    {
      number: '03',
      title: 'BUILD',
      subtitle: 'Develop the responsive website.',
      icon: Code,
      details:
        'We transform approved designs into production-ready code using Next.js, React, and TypeScript. We engineer semantic markup, responsive breakpoints, and ultra-fast asset delivery.',
      deliverables: ['Production Next.js Codebase', '100% Responsive Layouts', 'WhatsApp & Form Integrations'],
    },
    {
      number: '04',
      title: 'LAUNCH',
      subtitle: 'Test, optimize and launch.',
      icon: Rocket,
      details:
        'We conduct rigorous cross-browser testing across 320px to 1920px+, optimize Core Web Vitals, configure SEO metadata and domain DNS, and safely launch your new digital flagship.',
      deliverables: ['Core Web Vitals Tuning', 'SEO / AEO Indexing Setup', 'Live Domain Handover & Support'],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.08] relative"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              05 • METHODOLOGY
            </span>
            <h2
              id="process-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              How WEBZA Works.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            A disciplined, 4-stage engineering pipeline designed to deliver extraordinary digital flagships on time and with zero ambiguity.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#121612] border border-white/[0.08] rounded-md p-7 hover:border-[#6b7d50] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-display text-3xl font-bold text-[#6b7d50]">
                      {step.number}
                    </span>

                    <div className="w-10 h-10 rounded-sm bg-[#181d18] border border-white/10 flex items-center justify-center text-[#6b7d50] group-hover:bg-[#6b7d50] group-hover:text-[#090a09] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-[#f5f4ee] mb-2 group-hover:text-[#6b7d50] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-body text-sm font-semibold text-white/90 mb-4">
                    {step.subtitle}
                  </p>

                  <p className="font-body text-xs text-[#8e9189] leading-relaxed mb-6">
                    {step.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#6b7d50] tracking-wider block mb-2">
                    KEY MILESTONES:
                  </span>
                  {step.deliverables.map((d, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs font-mono text-[#8e9189]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6b7d50] shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
