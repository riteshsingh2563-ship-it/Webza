'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface HeroStoreboxProps {
  onOpenDraftModal: (data?: { business?: string; phone?: string }) => void;
}

export function HeroStorebox({ onOpenDraftModal }: HeroStoreboxProps) {
  const [businessInput, setBusinessInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'catalog' | 'reviews'>('overview');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenDraftModal({
      business: businessInput,
      phone: phoneInput,
    });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAF7F1] text-[#221D15] overflow-hidden">
      {/* Background Soft Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-[#E4EBDC] blur-[90px] opacity-70" />
        <div className="absolute -bottom-36 -left-28 w-[420px] h-[420px] rounded-full bg-[#EFF3EA] blur-[100px] opacity-80" />
        <div className="grain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Prop & Lead Card */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm w-fit">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0FA88F] shadow-[0_0_10px_rgba(15,168,143,0.6)] animate-pulse" />
              <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
                Done-for-you. Not DIY.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[62px] font-semibold text-[#221D15] tracking-tight leading-[1.08]">
              You run the business.{' '}
              <span className="block italic font-normal text-[#6B7D50]">
                We build everything else.
              </span>
            </h1>

            {/* Proofline */}
            <div className="flex items-center gap-2 font-body text-sm sm:text-base text-[#221D15]/70">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0FA88F]/15 text-[#0FA88F] text-xs font-bold">
                ✓
              </span>
              <span>
                Bespoke digital flagships &amp; modern web engineering by <strong className="text-[#221D15] font-semibold">WEBZA</strong>
              </span>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="font-body text-base sm:text-lg text-[#221D15]/80 max-w-xl leading-relaxed">
              We design and engineer your website with modern UI/UX and clean code so you stand out in your market. Direct developer collaboration. Built to be seen.
            </p>

            {/* Lead Capture Form Card */}
            <div className="bg-white border border-[#221D15]/15 rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(34,29,21,0.08)] max-w-xl">
              <label className="block font-body text-sm font-bold text-[#221D15] mb-3">
                See what your business looks like on WEBZA in 24 hours
              </label>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  value={businessInput}
                  onChange={(e) => setBusinessInput(e.target.value)}
                  placeholder="Business name, website, or Instagram link"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#221D15]/15 bg-[#FBF8F2] text-[#221D15] text-sm sm:text-base font-body focus:outline-none focus:border-[#6B7D50] transition-colors"
                />
                <input
                  type="tel"
                  required
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="WhatsApp or phone number (for your draft preview)"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#221D15]/15 bg-[#FBF8F2] text-[#221D15] text-sm sm:text-base font-body focus:outline-none focus:border-[#6B7D50] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-2 mt-1"
                >
                  <span>Request a Free Website Demo</span>
                  <span aria-hidden="true">→</span>
                </button>
              </form>

              <div className="mt-3.5 flex items-center justify-center gap-3 text-xs font-body text-[#221D15]/65">
                <span><b className="text-[#0FA88F]">✓ Free demo in 24h</b></span>
                <span>•</span>
                <span>No upfront payment</span>
                <span>•</span>
                <span>Hosting &amp; domain separate</span>
              </div>
            </div>

            {/* Price Banner */}
            <div className="flex flex-wrap items-baseline gap-3 pt-2 max-w-xl">
              <div className="font-label text-sm font-bold text-[#6B7D50] bg-[#6B7D50]/10 px-3.5 py-1.5 rounded-full">
                Website Development: Starting at ₹9,999 (Development only)
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Device Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Perspective Device Card */}
            <div className="relative rounded-2xl bg-[#151913] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.35)] overflow-hidden text-white transition-all duration-300">
              {/* Browser Bar */}
              <div className="px-4 py-3 bg-[#1D241B] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="bg-[#151913] border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-white/70 flex items-center gap-1.5 max-w-[200px] truncate">
                  <span>🔒</span>
                  <span>artisanatelier.co</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Mockup Navigation Tabs */}
              <div className="px-4 py-2 bg-[#1A2017] border-b border-white/5 flex items-center gap-2 text-xs font-label">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-[#6B7D50] text-white font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('catalog')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'catalog'
                      ? 'bg-[#6B7D50] text-white font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Catalog
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reviews')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'reviews'
                      ? 'bg-[#6B7D50] text-white font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* Mockup Canvas Screen */}
              <div className="p-5 sm:p-6 space-y-4">
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="relative h-44 rounded-xl overflow-hidden bg-gradient-to-tr from-[#242e20] to-[#3a4a34] border border-white/10 p-4 flex flex-col justify-end">
                      <span className="text-[10px] font-label font-bold uppercase tracking-widest text-[#2BD4BD]">
                        FLAGSHIP EDITION
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-white mt-1">
                        Artisan Atelier &amp; Studio
                      </h3>
                      <p className="text-xs font-body text-white/75 mt-0.5 line-clamp-1">
                        Bespoke handcrafted lifestyle goods &amp; architectural design.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="bg-[#6B7D50] text-white text-xs font-label px-3 py-1 rounded-full">
                          Book Consultation
                        </span>
                        <span className="bg-white/10 text-white/90 text-xs font-label px-3 py-1 rounded-full">
                          View Work
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <span className="text-[11px] font-body text-white/60">Average Conversion</span>
                        <div className="font-heading text-lg font-bold text-white mt-0.5">+340%</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <span className="text-[11px] font-body text-white/60">Mobile PageSpeed</span>
                        <div className="font-heading text-lg font-bold text-[#2BD4BD] mt-0.5">99 / 100</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'catalog' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-center justify-between text-xs font-label text-white/80 border-b border-white/10 pb-2">
                      <span>Featured Artifacts</span>
                      <span className="text-[#2BD4BD]">0% Transaction Fee</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <div>
                        <div className="text-sm font-semibold text-white">Ceramic Pour-Over Vessel</div>
                        <div className="text-xs text-white/60">Limited batch studio ceramic</div>
                      </div>
                      <span className="font-mono text-sm font-bold text-[#FAF7F1]">₹1,850</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                      <div>
                        <div className="text-sm font-semibold text-white">Hand-Stitched Leather Folio</div>
                        <div className="text-xs text-white/60">Full-grain vegetable-tanned</div>
                      </div>
                      <span className="font-mono text-sm font-bold text-[#FAF7F1]">₹2,490</span>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        ★★★★★
                      </div>
                      <p className="text-xs font-body text-white/85 mt-1.5 italic">
                        “We closed 14 high-ticket consultations in our first week after launching with WEBZA.”
                      </p>
                      <span className="block text-[11px] font-label text-white/50 mt-1">— Creative Director</span>
                    </div>
                  </div>
                )}

                {/* Floating Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#6B7D50]/20 border border-[#6B7D50]/40 text-[#FAF7F1] text-[11px] font-label font-medium px-2.5 py-1 rounded-full">
                    ⚡ 99 PageSpeed
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#0FA88F]/20 border border-[#0FA88F]/40 text-[#2BD4BD] text-[11px] font-label font-medium px-2.5 py-1 rounded-full">
                    💬 WhatsApp Orders
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-[11px] font-label font-medium px-2.5 py-1 rounded-full">
                    🤖 AEO Ranked #1
                  </span>
                </div>
              </div>

              {/* Interactive Mouse Pointer Simulation */}
              <div className="absolute bottom-6 right-6 pointer-events-none hidden sm:flex items-center gap-1.5 bg-white text-[#151913] px-2.5 py-1 rounded-full shadow-lg border border-[#6B7D50] transform translate-x-1 translate-y-1 animate-pulse">
                <svg className="w-3.5 h-3.5 fill-[#151913]" viewBox="0 0 24 24">
                  <path d="M5 3l14 8-6.5 1.5L9 19z" />
                </svg>
                <span className="text-[11px] font-label font-bold text-[#6B7D50]">WEBZA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
