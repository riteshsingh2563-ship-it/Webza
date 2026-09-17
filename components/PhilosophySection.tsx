import React from 'react';
import { Compass, Palette, Code2, LineChart, Check } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'STRATEGY FIRST',
      icon: Compass,
      desc: 'We map user journeys, conversion architecture, and competitive moats before writing a single line of code or designing a mockup.',
      features: ['Market Differentiation', 'Information Architecture', 'Conversion Funnels'],
    },
    {
      num: '02',
      title: 'BESPOKE DESIGN',
      icon: Palette,
      desc: 'No themes, no templates, no recycled SaaS aesthetics. Every layout, animation, and interaction is engineered specifically for your brand.',
      features: ['Architectural Typography', 'Fluid Micro-Interactions', 'Custom Design Tokens'],
    },
    {
      num: '03',
      title: 'FULL-STACK PRECISION',
      icon: Code2,
      desc: 'Production-grade codebases built with Next.js, TypeScript, and Edge infrastructure designed for sub-50ms render latency.',
      features: ['Strict Type Safety', 'Core Web Vitals 99+', 'API & Database Synthesis'],
    },
    {
      num: '04',
      title: 'CONTINUOUS EVOLUTION',
      icon: LineChart,
      desc: 'Launching is just phase one. We track analytics telemetry, conduct A/B performance experiments, and scale your digital surface.',
      features: ['Real-Time Telemetry', 'Conversion Rate Tuning', 'Dedicated Sprint Velocity'],
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 md:py-32 bg-[#0c0e0c] border-y border-white/[0.06] relative overflow-hidden"
      aria-labelledby="philosophy-title"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-8 h-px bg-[#6b7d50]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
              The WEBZA Philosophy
            </span>
          </div>

          <h2
            id="philosophy-title"
            className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee] leading-tight mb-6"
          >
            IDEAS. WEB. RESULTS. <br />
            <span className="text-[#6b7d50] font-serif italic lowercase text-4xl sm:text-6xl font-normal">
              uncompromising
            </span>{' '}
            CRAFT.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#8e9189] leading-relaxed">
            The modern web is inundated with indistinguishable templates and cookie-cutter frameworks. At WEBZA, we believe a company’s web platform is its primary strategic asset — built to command authority, establish trust, and turn visitors into long-term partners.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="rounded-2xl p-7 bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6b7d50] group-hover:scale-110 group-hover:bg-[#6b7d50] group-hover:text-[#090a09] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-neutral-600 group-hover:text-[#6b7d50] transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.08] space-y-2">
                  {pillar.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                      <Check className="w-3 h-3 text-[#6b7d50]" />
                      <span>{feat}</span>
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
