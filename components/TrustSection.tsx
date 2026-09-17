'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dumbbell,
  Utensils,
  Gem,
  Stethoscope,
  Radio,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const sectors = [
    {
      category: 'Gyms & Health Clubs',
      icon: Dumbbell,
      client: 'Verve Athletics',
      summary:
        'High-performance training club featuring dedicated equipment showcases, membership tiers, and direct WhatsApp join inquiries.',
      image: '/clients/rk-fitness.webp',
      badge: 'HEALTH & FITNESS',
    },
    {
      category: 'Restaurants, Cafés & Banquets',
      icon: Utensils,
      client: 'Royal Heritage',
      summary:
        'Luxury banquet and fine dining destination with interactive signature menus, banquet booking workflows, and venue storytelling.',
      image: '/clients/sheesh-mahal.png',
      badge: 'HOSPITALITY',
    },
    {
      category: 'Local Businesses & Luxury Retail',
      icon: Gem,
      client: 'Aurelia Fine Jewels',
      summary:
        'Heritage gold, diamond and bridal jewellery showroom with curated digital collections, interactive ring sizer, and showroom appointment scheduling.',
      image: '/clients/roshan-jewel.jpg',
      badge: 'LUXURY RETAIL',
    },
    {
      category: 'Clinics & Healthcare',
      icon: Stethoscope,
      client: 'Astraea Heritage',
      summary:
        'Multi-specialty healthcare and clinical facility with doctor profiles, department directories, and patient consultation scheduling.',
      image: '/clients/pushpanjali.png',
      badge: 'HEALTHCARE',
    },
    {
      category: 'Startups & Digital Products',
      icon: Radio,
      client: 'Aura Music',
      summary:
        'Spatial audio and music streaming client with real-time audio playback controls, album showcases, and native mobile integrations.',
      image: '/clients/aura-logo.png',
      badge: 'TECH STARTUP',
    },
    {
      category: 'Professional Services',
      icon: Briefcase,
      client: 'Enterprise Practice',
      summary:
        'Bespoke digital flagships for consultants, firms, and modern practices requiring immediate trust, clear service tiers, and qualified lead intake.',
      image: '/brand/webza-brand-poster.jpg',
      badge: 'PROFESSIONAL',
    },
  ];

  return (
    <section
      id="sectors"
      className="py-24 md:py-32 bg-[#0c0f0c] border-t border-white/[0.08] relative"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              02 • PROVEN CREDIBILITY
            </span>
            <h2
              id="trust-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Engineered For Real Businesses.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            We build websites for serious businesses that need to look established, inspire instant customer trust, and drive inquiries.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.category}
                className="bg-[#111511] border border-white/[0.08] rounded-md p-6 hover:border-[#6b7d50]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#181d18] border border-white/10 flex items-center justify-center text-[#6b7d50] group-hover:bg-[#6b7d50] group-hover:text-[#090a09] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] bg-[#6b7d50]/10 border border-[#6b7d50]/20 px-2.5 py-1 rounded">
                      {sector.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-[#f5f4ee] mb-2 group-hover:text-[#6b7d50] transition-colors">
                    {sector.category}
                  </h3>

                  <p className="text-xs font-mono text-[#6b7d50] mb-3">
                    Featured Project: {sector.client}
                  </p>

                  <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                    {sector.summary}
                  </p>
                </div>

                {/* Bottom Verification Note */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8e9189]">
                  <div className="flex items-center gap-1.5 text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6b7d50]" />
                    <span>Production Verified</span>
                  </div>
                  <span className="text-[#6b7d50]">Next.js Full-Stack</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
