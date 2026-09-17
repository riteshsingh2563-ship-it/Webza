'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowDownRight,
  ShieldCheck,
  Zap,
  Smartphone,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface HeroProps {
  onOpenProjectBrief?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectBrief }) => {
  const [activeTab, setActiveTab] = useState<'laptop' | 'rk' | 'sheesh' | 'roshan'>('laptop');

  const previews = {
    laptop: {
      title: 'Studio Flagship Platform',
      category: 'Design & Engineering Showcase',
      src: '/brand/webza-brand-poster.jpg',
      alt: 'WEBZA — Built To Be Seen Laptop Showcase',
      url: 'https://webza.agency',
      tag: 'FLAGSHIP',
    },
    rk: {
      title: 'Verve Athletics Club',
      category: 'Gym & High-Performance Facility',
      src: '/clients/rk-fitness.webp',
      alt: 'Verve Athletics Website Showcase',
      url: 'https://rkfitness.webza.agency',
      tag: 'HEALTH & FITNESS',
    },
    sheesh: {
      title: 'Royal Heritage Banquet',
      category: 'Luxury Hospitality & Fine Dining',
      src: '/clients/sheesh-mahal.png',
      alt: 'Royal Heritage Website Showcase',
      url: 'https://sheeshmahal.webza.agency',
      tag: 'HOSPITALITY',
    },
    roshan: {
      title: 'Aurelia Fine Jewels',
      category: 'Heritage Luxury Retail & Bridal',
      src: '/clients/roshan-jewel.jpg',
      alt: 'Aurelia Fine Jewels Website Showcase',
      url: 'https://roshanjewellers.webza.agency',
      tag: 'LUXURY RETAIL',
    },
  };

  const currentPreview = previews[activeTab];

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-16 px-6 max-w-7xl mx-auto w-full"
      aria-labelledby="hero-heading"
    >
      {/* Top Status Capsule */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#6b7d50] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
            WEBZA STUDIO • DIGITAL AGENCY & WEB ENGINEERING
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#6b7d50] bg-[#6b7d50]/10 border border-[#6b7d50]/25 px-3 py-1 rounded-full w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TAKING ON NEW PROJECTS THIS QUARTER</span>
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center my-auto">
        {/* Left Editorial Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#6b7d50] uppercase tracking-[0.3em]">
            <span>OFFICIAL AGENCY SHOWCASE</span>
            <span>•</span>
            <span>BUILT TO BE SEEN</span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-[#f5f4ee] leading-[1.04]"
          >
            Your Business <br />
            <span className="text-[#6b7d50] underline decoration-[#6b7d50]/40 decoration-wavy underline-offset-8">
              Deserves
            </span>{' '}
            a Better <br />
            Website.
          </h1>

          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-xl leading-relaxed">
            WEBZA designs and builds modern, fast and conversion-focused websites that help businesses turn visitors into customers.
          </p>

          {/* Core Value Pillars: What + Who + Why */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 border-y border-white/[0.08]">
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-sm">
              <span className="text-[10px] font-mono uppercase text-[#6b7d50] block mb-1">
                WHAT WE BUILD
              </span>
              <p className="font-body text-xs font-semibold text-[#f5f4ee]">
                Bespoke High-Converting Websites
              </p>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-sm">
              <span className="text-[10px] font-mono uppercase text-[#6b7d50] block mb-1">
                WHO IT HELPS
              </span>
              <p className="font-body text-xs font-semibold text-[#f5f4ee]">
                Gyms, Dining, Clinics & Retail
              </p>
            </div>
            <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-sm">
              <span className="text-[10px] font-mono uppercase text-[#6b7d50] block mb-1">
                WHY IT MATTERS
              </span>
              <p className="font-body text-xs font-semibold text-[#f5f4ee]">
                Commands Trust & Closes Clients
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenProjectBrief}
              className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.16em] bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09] px-7 py-4 rounded-sm transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={scrollToWork}
              className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-[#f5f4ee] bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 px-6 py-4 rounded-sm transition-all cursor-pointer"
            >
              <span>View Our Work</span>
              <ArrowDownRight className="w-4 h-4 text-[#6b7d50]" />
            </button>
          </div>
        </div>

        {/* Right Impressive Browser / Device Showcase (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-lg overflow-hidden border border-white/15 bg-[#121612] shadow-2xl">
            {/* Browser Top Bar */}
            <div className="bg-[#181d18] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e85e5e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8b95e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5ee882]" />
              </div>

              {/* URL Bar */}
              <div className="flex-1 max-w-xs mx-auto bg-[#090a09] text-[11px] font-mono text-[#8e9189] px-3 py-1 rounded-sm border border-white/10 flex items-center justify-between">
                <span className="truncate">{currentPreview.url}</span>
                <ExternalLink className="w-3 h-3 text-[#6b7d50] ml-1 shrink-0" />
              </div>

              <span className="text-[10px] font-mono text-[#6b7d50] bg-[#6b7d50]/15 px-2 py-0.5 rounded uppercase">
                LIVE
              </span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="bg-[#0e120e] px-3 py-2 border-b border-white/[0.08] flex items-center gap-1 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab('laptop')}
                className={`text-[11px] font-mono px-3 py-1 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'laptop'
                    ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                    : 'text-[#8e9189] hover:text-white'
                }`}
              >
                Studio Flagship
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('rk')}
                className={`text-[11px] font-mono px-3 py-1 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'rk'
                    ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                    : 'text-[#8e9189] hover:text-white'
                }`}
              >
                Verve Athletics
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sheesh')}
                className={`text-[11px] font-mono px-3 py-1 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'sheesh'
                    ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                    : 'text-[#8e9189] hover:text-white'
                }`}
              >
                Royal Heritage
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('roshan')}
                className={`text-[11px] font-mono px-3 py-1 rounded transition-colors whitespace-nowrap ${
                  activeTab === 'roshan'
                    ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                    : 'text-[#8e9189] hover:text-white'
                }`}
              >
                Aurelia Jewel
              </button>
            </div>

            {/* Preview Image Frame */}
            <div className="relative aspect-[4/3] bg-[#090a09] overflow-hidden group">
              <Image
                key={activeTab}
                src={currentPreview.src}
                alt={currentPreview.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Details */}
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] block mb-1">
                    {currentPreview.tag}
                  </span>
                  <h3 className="font-display text-base font-bold uppercase text-white">
                    {currentPreview.title}
                  </h3>
                  <p className="text-xs font-body text-[#8e9189]">
                    {currentPreview.category}
                  </p>
                </div>

                <div className="text-[10px] font-mono bg-black/70 border border-white/20 px-2 py-1 rounded text-white backdrop-blur-sm">
                  100% RESPONSIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Telemetry / Key Standards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08] mt-12">
        <div className="flex items-start gap-3">
          <Zap className="w-5 h-5 text-[#6b7d50] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block">
              PERFORMANCE
            </span>
            <strong className="font-display text-sm font-bold text-white uppercase block">
              Sub-second Load Times
            </strong>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Smartphone className="w-5 h-5 text-[#6b7d50] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block">
              RESPONSIVE
            </span>
            <strong className="font-display text-sm font-bold text-white uppercase block">
              Mobile-First Precision
            </strong>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#6b7d50] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block">
              CRAFTSMANSHIP
            </span>
            <strong className="font-display text-sm font-bold text-white uppercase block">
              Zero Generic Templates
            </strong>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#6b7d50] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block">
              CONVERSIONS
            </span>
            <strong className="font-display text-sm font-bold text-[#6b7d50] uppercase block">
              Built To Win Customers
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
