'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowLeftRight,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Smartphone,
  ShieldCheck,
  MousePointerClick,
} from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeSide, setActiveSide] = useState<'both' | 'old' | 'new'>('both');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section
      id="transformation"
      className="py-24 md:py-32 bg-[#0c0f0c] border-t border-white/[0.08] relative"
      aria-labelledby="transformation-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              06 • THE TRANSFORMATION
            </span>
            <h2
              id="transformation-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Old Website vs. WEBZA.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            See the undeniable difference when a business transitions from a generic, sluggish website to a bespoke WEBZA digital flagship.
          </p>
        </div>

        {/* Interactive Comparison View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Visual Interactive Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-white/15 bg-[#121612] shadow-2xl select-none">
              {/* Top View Selector Controls */}
              <div className="bg-[#181d18] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#8e9189]">
                    INTERACTIVE COMPARISON
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSliderPosition(100);
                      setActiveSide('old');
                    }}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                      activeSide === 'old'
                        ? 'bg-[#e85e5e]/20 text-[#e85e5e] font-bold'
                        : 'text-[#8e9189] hover:text-white'
                    }`}
                  >
                    View Old
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSliderPosition(50);
                      setActiveSide('both');
                    }}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                      activeSide === 'both'
                        ? 'bg-[#6b7d50] text-[#090a09] font-bold'
                        : 'text-[#8e9189] hover:text-white'
                    }`}
                  >
                    Split 50/50
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSliderPosition(0);
                      setActiveSide('new');
                    }}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                      activeSide === 'new'
                        ? 'bg-[#6b7d50]/20 text-[#6b7d50] font-bold'
                        : 'text-[#8e9189] hover:text-white'
                    }`}
                  >
                    View WEBZA
                  </button>
                </div>
              </div>

              {/* Slider Image Container */}
              <div className="relative aspect-[16/10] bg-[#090a09] overflow-hidden">
                {/* Underneath: WEBZA Website (New) */}
                <div className="absolute inset-0">
                  <Image
                    src="/brand/webza-brand-poster.jpg"
                    alt="WEBZA Website Experience"
                    fill
                    className="object-cover object-left"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#6b7d50] text-[#090a09] font-mono font-bold text-xs px-3 py-1.5 rounded-sm shadow-md">
                    WEBZA WEBSITE
                  </div>
                </div>

                {/* Overlaid: Old Website (Clipped by slider position) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#6b7d50] transition-[width] duration-75"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full min-w-[700px]">
                    <Image
                      src="/clients/rk-fitness.webp"
                      alt="Old Generic Template"
                      fill
                      className="object-cover object-left filter contrast-75 brightness-75 grayscale-[60%]"
                    />
                    <div className="absolute inset-0 bg-red-950/20" />
                    <div className="absolute bottom-4 left-4 bg-red-900/80 text-white font-mono font-bold text-xs px-3 py-1.5 rounded-sm shadow-md">
                      OLD WEBSITE
                    </div>
                  </div>
                </div>

                {/* Center Drag Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#6b7d50] shadow-[0_0_12px_rgba(107,125,80,0.8)] pointer-events-none flex items-center justify-center -ml-0.5"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#6b7d50] text-[#090a09] flex items-center justify-center shadow-lg">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Range Slider Control */}
              <div className="p-4 bg-[#141713] border-t border-white/10 flex items-center gap-4">
                <span className="text-[11px] font-mono text-[#e85e5e] shrink-0 font-bold">
                  OLD (0%)
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="w-full accent-[#6b7d50] cursor-pointer"
                  aria-label="Drag to compare Old Website vs WEBZA Website"
                />
                <span className="text-[11px] font-mono text-[#6b7d50] shrink-0 font-bold">
                  WEBZA (100%)
                </span>
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Old Card */}
            <div className="p-6 rounded-md bg-[#161010] border border-red-500/20">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>THE TYPICAL OLD WEBSITE</span>
              </div>
              <ul className="space-y-2 text-xs font-body text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Generic cookie-cutter template blending in with competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Sluggish mobile loading causing high visitor bounce rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Awkward smartphone layout and cramped, unreadable text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Buried contact details leading to lost customer leads</span>
                </li>
              </ul>
            </div>

            {/* WEBZA Card */}
            <div className="p-6 rounded-md bg-[#121812] border border-[#6b7d50]/40 shadow-lg">
              <div className="flex items-center gap-2 text-[#6b7d50] font-mono text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>THE WEBZA FLAGSHIP</span>
              </div>
              <ul className="space-y-2 text-xs font-body text-neutral-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7d50] font-bold">✓</span>
                  <span>Bespoke visual identity commanding instant trust and prestige</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7d50] font-bold">✓</span>
                  <span>Sub-second page rendering engineered with modern Next.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7d50] font-bold">✓</span>
                  <span>Flawless thumb-friendly mobile experience on every device</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6b7d50] font-bold">✓</span>
                  <span>Prominent one-tap WhatsApp, call, and consultation inquiry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
