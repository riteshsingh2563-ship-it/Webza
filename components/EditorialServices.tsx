'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES, ServiceItem } from '@/lib/data';
import { ArrowUpRight, CheckCircle2, Code2, ArrowRight } from 'lucide-react';

export const EditorialServices: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeId) || SERVICES[0];

  return (
    <section
      id="services"
      className="py-28 md:py-36 bg-[#090a09] relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              02 • CORE DISCIPLINES
            </span>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              SERVICES & CAPABILITIES
            </h2>
          </div>

          <p className="font-body text-sm text-[#8e9189] max-w-sm">
            Hover or select an engineering discipline below to inspect our architectural deliverables and technical stack.
          </p>
        </div>

        {/* Editorial Two-Column Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Large Service List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {SERVICES.map((service) => {
              const isActive = activeId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(service.id);
                    }
                  }}
                  className={`py-8 group cursor-pointer transition-all duration-200 outline-none flex items-center justify-between ${
                    isActive ? 'pl-4 border-l-2 border-l-[#6b7d50]' : 'pl-0 hover:pl-2'
                  }`}
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isActive ? 'text-[#6b7d50] font-bold' : 'text-neutral-600 group-hover:text-neutral-400'
                      }`}
                    >
                      {service.number}
                    </span>

                    <h3
                      className={`font-display text-2xl sm:text-3xl xl:text-4xl font-bold uppercase tracking-tight transition-colors ${
                        isActive
                          ? 'text-[#f5f4ee]'
                          : 'text-[#8e9189] group-hover:text-neutral-300'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-all ${
                      isActive
                        ? 'text-[#6b7d50] opacity-100 translate-x-0'
                        : 'text-neutral-600 opacity-0 group-hover:opacity-100 -translate-x-2'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Supporting Visual & Detail Panel (5 cols sticky) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 sm:p-10 rounded-sm bg-[#111411] border border-white/10 relative overflow-hidden transition-all duration-300 shadow-xl">
              {/* Corner Tag */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-[0.3em] bg-[#6b7d50]/15 px-2.5 py-1 rounded-sm border border-[#6b7d50]/30">
                  DISCIPLINE {activeService.number}
                </span>

                <span className="text-xs font-mono text-[#8e9189]">
                  WEBZA STANDARD
                </span>
              </div>

              {/* Title & Tagline */}
              <h4 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-2">
                {activeService.title}
              </h4>
              <p className="font-serif italic text-sm text-[#6b7d50] mb-6">
                &ldquo;{activeService.tagline}&rdquo;
              </p>

              {/* Description */}
              <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-8">
                {activeService.description}
              </p>

              {/* Deliverables */}
              <div className="space-y-2.5 mb-8 pt-6 border-t border-white/[0.08]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block mb-3">
                  Scope Deliverables:
                </span>
                {activeService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b7d50] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block mb-3">
                  Ecosystem:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-neutral-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <Link
                  href="/services"
                  className="text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-wider transition-colors"
                >
                  View All Services →
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#6b7d50] hover:text-[#7d9161]"
                >
                  <span>Request Capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
