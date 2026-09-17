import React from 'react';
import { Globe, Layers, ShoppingBag, Sparkles, Cpu, Gauge, ArrowUpRight } from 'lucide-react';

interface ServicesBentoProps {
  onOpenProjectBrief: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenProjectBrief }) => {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-8 h-px bg-[#6b7d50]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
                Core Disciplines
              </span>
            </div>
            <h2
              id="services-title"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
            >
              FULL-STACK CAPABILITIES
            </h2>
          </div>

          <p className="font-body text-sm text-[#8e9189] max-w-md">
            From architectural discovery to global edge deployment, we provide end-to-end engineering and design precision.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Bento Item 1: Flagship Web Platforms (8 cols, 2 rows) */}
          <div className="col-span-12 lg:col-span-8 p-8 md:p-10 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#6b7d50]/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6b7d50]">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#8e9189] uppercase tracking-wider">
                  DISCIPLINE 01
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                BESPOKE DIGITAL FLAGSHIPS & WEB PLATFORMS
              </h3>

              <p className="font-body text-sm sm:text-base text-[#8e9189] leading-relaxed max-w-xl mb-8">
                We engineer category-defining brand websites and editorial web experiences that combine immersive interaction design, buttery 60fps micro-animations, headless content infrastructure, and sub-second page loads.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-white block font-semibold">Headless Architecture</span>
                  <span className="text-[11px] text-[#8e9189]">Sanity, Contentful, MDX</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-white block font-semibold">Modern Engine</span>
                  <span className="text-[11px] text-[#8e9189]">Next.js 14 App Router, TS</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-white block font-semibold">Fluid Motion</span>
                  <span className="text-[11px] text-[#8e9189]">GSAP, Framer Motion, Shaders</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Tailwind', 'Edge SSR'].map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={onOpenProjectBrief}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#6b7d50] hover:text-[#829762] uppercase font-bold"
              >
                <span>Request Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 2: Full-Stack Web Applications (4 cols) */}
          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6b7d50]">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#8e9189]">02</span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                FULL-STACK APPS & PORTALS
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                Complex software systems, authenticated client dashboards, and cloud-native databases built with enterprise security, role-based access, and real-time synchronization.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {['Supabase', 'PostgreSQL', 'Auth', 'REST/GraphQL'].map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Item 3: E-Commerce & Monetization (4 cols) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6b7d50]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#8e9189]">03</span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                HIGH-YIELD E-COMMERCE
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                Custom Shopify Plus and headless Stripe architectures designed to maximize average order value, streamline checkout conversion, and scale global payments effortlessly.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {['Stripe', 'Shopify Plus', 'Global FX'].map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Item 4: Brand & Design Systems (4 cols) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 p-8 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6b7d50]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#8e9189]">04</span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                SYSTEM DESIGN & TOKENS
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                Systematic Figma design tokens, documented UI libraries, and component governance that allow your internal engineering teams to ship features 3x faster without design drift.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {['Design Tokens', 'Storybook', 'Figma Sync'].map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Item 5: Performance & Edge Engineering (4 cols) */}
          <div className="col-span-12 lg:col-span-4 p-8 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#6b7d50]">
                  <Gauge className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#8e9189]">05</span>
              </div>

              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-3">
                PERFORMANCE & CORE VITALS
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                Guaranteed 99+ Google Lighthouse scores, sub-50ms Time-to-First-Byte, strict accessibility WCAG 2.2 AA compliance, and SEO technical schema infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {['CWV 100', 'Edge CDN', 'Zero CLS', 'WCAG AA'].map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-neutral-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
