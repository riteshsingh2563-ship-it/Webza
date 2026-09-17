'use client';

import React from 'react';

interface ProofMarqueeProps {
  onOpenDraftModal?: () => void;
}

export function ProofMarquee({ onOpenDraftModal }: ProofMarqueeProps) {
  const showcaseProjects = [
    {
      name: 'Sheesh Mahal',
      category: 'Royal Dining & Luxury Hospitality',
      location: 'Jaipur & Delhi',
      metric: 'Bespoke Design',
      growth: 'Interactive Menu',
      accentColor: 'from-[#2e261f] to-[#42372d]',
    },
    {
      name: 'Pushpanjali Heritage',
      category: 'Boutique Resort & Suites',
      location: 'Udaipur',
      metric: 'Mobile-First',
      growth: 'Direct Booking Flow',
      accentColor: 'from-[#1e2820] to-[#2b382e]',
    },
    {
      name: 'RK Fitness Elite',
      category: 'Performance Athletic Club',
      location: 'Delhi NCR',
      metric: 'Fast Loading',
      growth: 'Membership Portal',
      accentColor: 'from-[#2a2227] to-[#3a3038]',
    },
    {
      name: 'Aura Spatial Audio',
      category: 'Acoustic Flagship & Hardware',
      location: 'Bengaluru',
      metric: 'Next.js 14',
      growth: 'Interactive Showroom',
      accentColor: 'from-[#1c2927] to-[#283b38]',
    },
    {
      name: 'Krypton Protocol',
      category: 'Institutional FinTech Platform',
      location: 'Global',
      metric: 'Sub-second Edge',
      growth: 'Modular Components',
      accentColor: 'from-[#1c222b] to-[#263140]',
    },
    {
      name: 'Solace Goods',
      category: 'Sustainable Goods & Atelier',
      location: 'Mumbai',
      metric: 'Modern UI/UX',
      growth: 'Digital Storefront',
      accentColor: 'from-[#2b271e] to-[#3d382c]',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#151913] text-[#FAF7F1] overflow-hidden border-t border-b border-white/10" id="proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FAF7F1]">
            Crafted with <span className="italic font-normal text-[#829762]">Precision.</span>
          </div>
          <p className="font-body text-base sm:text-lg text-[#FAF7F1]/70 mt-3">
            Modern web flagships and digital storefronts engineered for growing businesses.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Subtle Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#151913] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#151913] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...showcaseProjects, ...showcaseProjects].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="w-[310px] sm:w-[360px] flex-shrink-0 bg-[#1E241C] border border-white/10 rounded-2xl p-5 hover:border-[#6B7D50]/50 transition-all duration-200 group shadow-lg"
            >
              {/* Card Thumbnail Screen */}
              <div
                className={`relative h-44 rounded-xl overflow-hidden bg-gradient-to-br ${item.accentColor} border border-white/10 p-4 flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-label font-bold uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-white/90 border border-white/10">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-label font-semibold text-[#2BD4BD] bg-[#2BD4BD]/10 border border-[#2BD4BD]/30 px-2.5 py-1 rounded-full">
                    {item.growth}
                  </span>
                </div>

                <div>
                  <div className="text-white/60 text-xs font-mono">webza.agency/portfolio</div>
                  <h4 className="font-heading text-lg font-semibold text-white mt-1 group-hover:text-[#829762] transition-colors">
                    {item.name}
                  </h4>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-body text-sm font-semibold text-white">{item.name}</div>
                  <div className="font-body text-xs text-white/50">{item.category}</div>
                </div>
                <div className="font-label text-[11px] text-white/40">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Column Stat Counters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10 text-center">
          <div className="space-y-1">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="font-body text-xs sm:text-sm text-white/60">custom design</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-[#829762]">24h</div>
            <div className="font-body text-xs sm:text-sm text-white/60">to your first draft</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-white">₹9,999</div>
            <div className="font-body text-xs sm:text-sm text-white/60">development starting</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading text-3xl sm:text-4xl font-bold text-[#2BD4BD]">Next.js</div>
            <div className="font-body text-xs sm:text-sm text-white/60">modern stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}
