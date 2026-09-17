'use client';

import React, { useState } from 'react';

interface StartFromAnythingProps {
  onOpenDraftModal?: (source?: string) => void;
}

export function StartFromAnything({ onOpenDraftModal }: StartFromAnythingProps) {
  const [selectedSource, setSelectedSource] = useState(0);

  const sources = [
    {
      id: 'instagram',
      name: 'Instagram Profile',
      icon: '📸',
      color: '#E4405F',
      inputLabel: 'Paste your Instagram handle or URL',
      placeholder: '@yourbusiness or instagram.com/yourbusiness',
      resultText:
        'We extract your brand photos, bio, aesthetic colors, and service highlights directly into your draft.',
    },
    {
      id: 'google',
      name: 'Google Business Profile',
      icon: '📍',
      color: '#4285F4',
      inputLabel: 'Paste your Google Maps listing or business name',
      placeholder: 'Google Maps link or Business name in city',
      resultText:
        'We pull your verified 5-star reviews, location coordinates, business hours, and contact details automatically.',
    },
    {
      id: 'menu',
      name: 'Menu or PDF Catalog',
      icon: '📄',
      color: '#F1641E',
      inputLabel: 'Describe or upload your brochure or price list',
      placeholder: 'Send PDF or photos via WhatsApp in 1 click',
      resultText:
        'Our team categorizes your entire catalog into a mobile-friendly digital menu with instant WhatsApp ordering.',
    },
    {
      id: 'old-site',
      name: 'Old WordPress / Wix Site',
      icon: '🌐',
      color: '#21759B',
      inputLabel: 'Paste your existing website domain',
      placeholder: 'https://youroldwebsite.com',
      resultText:
        'We migrate your valuable existing content into our modern Next.js 14 stack, boosting page speed from 30 to 99+.',
    },
    {
      id: 'idea',
      name: 'Just a Rough Idea',
      icon: '💡',
      color: '#2BD4BD',
      inputLabel: 'Tell us in 1 or 2 sentences what you are launching',
      placeholder: 'e.g. A boutique pottery studio opening in Bandra next month',
      resultText:
        'Zero assets required. We write the copy, curate aesthetic photography, and architect the entire structure for you.',
    },
  ];

  const current = sources[selectedSource];

  return (
    <section className="py-20 lg:py-28 bg-[#151913] text-[#FAF7F1] border-t border-b border-white/10" id="bring">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E241C] border border-white/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#829762]" />
            <span className="font-label text-xs font-semibold tracking-wider text-white/80 uppercase">
              Already have something?
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FAF7F1] tracking-tight">
            Start from{' '}
            <span className="italic font-normal text-[#829762]">whatever you’ve got.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#FAF7F1]/70 mt-4 leading-relaxed">
            An Instagram page. A Google Maps listing. A paper menu. An old WordPress site. Or just an idea in your head. We’ll turn it into a real website that’s fully, permanently <strong className="text-white font-semibold">yours</strong>.
          </p>
        </div>

        {/* Source Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-10">
          {sources.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSource(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-label text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                selectedSource === idx
                  ? 'bg-[#6B7D50] text-white border-[#6B7D50] shadow-lg scale-105'
                  : 'bg-[#1C2219] text-white/70 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Ingestion Pipeline Interactive Showcase */}
        <div className="max-w-3xl mx-auto bg-[#1C2219] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{current.icon}</span>
              <div>
                <h4 className="font-heading text-base font-bold text-white">
                  Ingesting: {current.name}
                </h4>
                <div className="text-xs font-body text-white/50">
                  Step 1 of 5 • Automatic asset extraction
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#2BD4BD] bg-[#2BD4BD]/10 border border-[#2BD4BD]/30 px-3 py-1 rounded-full">
              24h Turnaround
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-label text-white/70 mb-2 font-semibold">
                {current.inputLabel}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={current.placeholder}
                  className="w-full bg-[#151913] border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white/80 font-mono focus:outline-none"
                />
              </div>
            </div>

            {/* Simulated Extraction Result */}
            <div className="p-4 rounded-xl bg-[#232B20] border border-[#6B7D50]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-label font-bold text-[#829762]">
                <span>⚡</span>
                <span>How WEBZA Transforms This:</span>
              </div>
              <p className="text-xs sm:text-sm font-body text-white/85 leading-relaxed">
                {current.resultText}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-body text-white/50">
              Zero technical skills required on your end.
            </div>
            <button
              type="button"
              onClick={() => onOpenDraftModal?.(current.name)}
              className="w-full sm:w-auto bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-colors"
            >
              Start From {current.name} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
