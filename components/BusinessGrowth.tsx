'use client';

import React from 'react';
import {
  Award,
  Smartphone,
  Zap,
  MousePointerClick,
  MessageCircle,
  ShieldCheck,
  Search,
  Globe2,
  TrendingUp,
} from 'lucide-react';

export const BusinessGrowth: React.FC = () => {
  const benefits = [
    {
      title: 'Professional First Impression',
      icon: Award,
      description:
        'When prospective customers look up your business, your website sets the standard for your reputation, competence, and reliability.',
    },
    {
      title: 'Flawless Mobile Experience',
      icon: Smartphone,
      description:
        'Over 65% of visitors browse on phones. A modern, thumb-friendly mobile layout prevents immediate drop-offs and frustrating navigation.',
    },
    {
      title: 'Sub-Second Loading Speed',
      icon: Zap,
      description:
        'Slow sites lose visitors before they even read a headline. Instant page responses keep customer attention firmly on what you offer.',
    },
    {
      title: 'Clear Calls-to-Action',
      icon: MousePointerClick,
      description:
        'Strategic layout structure that guides visitors directly toward booking an appointment, inquiring on WhatsApp, or visiting your location.',
    },
    {
      title: 'Direct Customer Contact',
      icon: MessageCircle,
      description:
        'Frictionless communication channels: one-tap WhatsApp messaging, instant click-to-call, and structured inquiry forms.',
    },
    {
      title: 'Unshakable Credibility',
      icon: ShieldCheck,
      description:
        'Elevates your digital perception to reflect the authentic excellence and dedication of your in-person business operations.',
    },
    {
      title: 'SEO-Ready Structure',
      icon: Search,
      description:
        'Clean technical hierarchy and schema markup ensuring Google and AI answer engines understand your business services accurately.',
    },
    {
      title: 'Independent Digital Asset',
      icon: Globe2,
      description:
        'A dedicated digital flagship that you own and control completely, free from sudden social media algorithm swings or platform lock-in.',
    },
  ];

  return (
    <section
      id="growth"
      className="py-24 md:py-32 bg-[#0c0e0c] border-t border-white/[0.08] relative"
      aria-labelledby="growth-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              08 • BUSINESS VALUE
            </span>
            <h2
              id="growth-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              More Than Just Appearance.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            A website is not an art project. It is your business&apos;s primary engine for generating trust, credibility, and customer inquiries.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-[#111511] border border-white/[0.08] rounded-md p-6 hover:border-[#6b7d50]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#181d18] border border-white/10 flex items-center justify-center text-[#6b7d50] group-hover:bg-[#6b7d50] group-hover:text-[#090a09] transition-colors mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-base font-bold uppercase text-[#f5f4ee] mb-2 group-hover:text-[#6b7d50] transition-colors">
                    {b.title}
                  </h3>

                  <p className="font-body text-xs text-[#8e9189] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-[#6b7d50] uppercase tracking-wider">
                  TANGIBLE ROI
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Grounded Disclaimer Banner */}
        <div className="p-6 bg-[#141813] border border-white/[0.08] rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#6b7d50] shrink-0" />
            <p className="font-body text-xs sm:text-sm text-[#8e9189]">
              <strong className="text-white font-semibold">Our Guarantee:</strong> We do not make false promises of magical overnight sales or manufactured search rankings. We deliver rigorous, world-class web engineering that gives your business its best competitive advantage online.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-widest whitespace-nowrap bg-[#6b7d50]/10 px-3 py-1 rounded">
            HONEST CRAFTSMANSHIP
          </span>
        </div>
      </div>
    </section>
  );
};
