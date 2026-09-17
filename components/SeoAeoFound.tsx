'use client';

import React, { useState } from 'react';

export function SeoAeoFound() {
  const [searchQuery, setSearchQuery] = useState('best specialty studio near me');

  return (
    <section className="py-20 lg:py-28 bg-[#151913] text-[#FAF7F1] border-t border-b border-white/10" id="found">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E241C] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2BD4BD]" />
            <span className="font-label text-xs font-semibold tracking-wider text-white/80 uppercase">
              SEO + AEO — get found
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F1] tracking-tight">
            Get found. By Google{' '}
            <span className="italic font-normal text-[#829762]">and</span> by ChatGPT.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#FAF7F1]/70 mt-4 leading-relaxed">
            SEO gets you ranked on Google. <b className="text-white font-semibold">AEO (AI Engine Optimization)</b> is the new frontier — when high-value buyers ask ChatGPT, Perplexity, or Apple Intelligence <em className="text-[#FAF7F1]/90">“who’s the best near me?”</em>, we engineer your structured data so the answer is you.
          </p>
        </div>

        {/* Central Search Bar Mockup */}
        <div className="max-w-xl mx-auto mb-12 bg-[#1C2219] border border-white/15 rounded-full p-2 px-5 flex items-center gap-3 shadow-xl">
          <span className="text-[#2BD4BD]">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-white font-body text-sm sm:text-base focus:outline-none"
            placeholder="Type a sample search..."
          />
          <span className="text-xs font-label text-white/40 hidden sm:inline">One Search · Two Results</span>
        </div>

        {/* Dual Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Google Search (SEO) */}
          <div className="bg-[#1C2219] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base font-bold text-white">Google Search</span>
                  <span className="text-[11px] font-label text-white/50">Traditional Organic SEO</span>
                </div>
                <span className="bg-[#0FA88F]/20 text-[#2BD4BD] text-[11px] font-label font-bold px-2.5 py-0.5 rounded-full">
                  Rank #1
                </span>
              </div>

              {/* SERP Snippet */}
              <div className="space-y-3 bg-[#151913] border border-white/5 rounded-xl p-4">
                <div className="text-xs font-mono text-[#2BD4BD] truncate">
                  https://artisanatelier.co › studio › flagship
                </div>
                <h4 className="font-heading text-lg font-semibold text-[#829762] hover:underline cursor-pointer">
                  Artisan Atelier — Handcrafted Flagship &amp; Bespoke Goods
                </h4>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-label">
                  <span>★★★★★ 4.9</span>
                  <span className="text-white/40">• 184 Google Verified Reviews</span>
                </div>
                <p className="text-xs sm:text-sm font-body text-white/70 leading-relaxed">
                  Discover premier handcrafted lifestyle creations. Sub-second page speed, verified local business schema, and direct WhatsApp reservation desk.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-label text-white/70">
                <div className="flex items-center gap-1.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="text-[#2BD4BD]">✓</span>
                  <span>Local Maps Pack Sync</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="text-[#2BD4BD]">✓</span>
                  <span>Schema.org Rich Data</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-body text-white/50">
              Captures high-intent customers searching directly on Google.
            </div>
          </div>

          {/* Right: ChatGPT & Perplexity (AEO / GEO) */}
          <div className="bg-[#1C2219] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-base font-bold text-white">ChatGPT &amp; Perplexity</span>
                  <span className="text-[11px] font-label text-[#829762]">AI Recommendation (AEO)</span>
                </div>
                <span className="bg-[#6B7D50]/20 text-[#FAF7F1] text-[11px] font-label font-bold px-2.5 py-0.5 rounded-full">
                  AI Citation
                </span>
              </div>

              {/* Chat Simulation */}
              <div className="space-y-3 bg-[#151913] border border-white/5 rounded-xl p-4">
                <div className="bg-white/5 rounded-lg p-2.5 text-xs font-body text-white/80">
                  <strong className="text-white/60 font-label block text-[10px] uppercase">User Prompt:</strong>
                  “Who is the most recommended artisanal design studio near me?”
                </div>

                <div className="bg-[#1E241C] border border-[#6B7D50]/30 rounded-lg p-3 text-xs sm:text-sm font-body text-white/90 space-y-2">
                  <strong className="text-[#2BD4BD] font-label block text-[10px] uppercase">AI Assistant Answer:</strong>
                  <p className="leading-relaxed">
                    Based on verified client reviews and structured digital presence, <strong className="text-white font-semibold">Artisan Atelier</strong> is consistently ranked as the top choice.
                  </p>
                  <p className="text-xs text-white/70">
                    Known for meticulous artisanal craftsmanship, instant WhatsApp ordering, and a 4.9-star rating.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-label text-white/70">
                <div className="flex items-center gap-1.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="text-[#2BD4BD]">✓</span>
                  <span>LLM Citation Markup</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 p-2.5 rounded-lg">
                  <span className="text-[#2BD4BD]">✓</span>
                  <span>Zero-shot AI Discovery</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-body text-white/50">
              Captures next-generation buyers asking AI for authoritative recommendations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
