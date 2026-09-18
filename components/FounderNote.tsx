'use client';

import React from 'react';
import Image from 'next/image';

interface FounderNoteProps {
  onOpenDraftModal?: () => void;
}

export function FounderNote({ onOpenDraftModal }: FounderNoteProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15]" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
            <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
              Leadership &amp; Architecture
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#221D15] tracking-tight">
            Engineered by builders.{' '}
            <span className="italic font-normal text-[#6B7D50]">Direct and focused.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#221D15]/75 mt-4 leading-relaxed">
            WEBZA is an independent web development studio focused on building high-performance, bespoke websites for modern businesses.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-white border border-[#221D15]/10 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Framed Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#6B7D50] shadow-xl bg-[#151913]">
                  <Image
                    src="/brand/ritesh-square.webp"
                    alt="Ritesh Singh — Founder & Lead Developer at WEBZA"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151913]/95 via-[#151913]/60 to-transparent p-4 text-white">
                    <div className="font-heading font-bold text-lg leading-tight">Ritesh Singh</div>
                    <div className="font-label text-[11px] font-semibold text-[#829762] uppercase tracking-wider mt-0.5">
                      Founder &amp; Lead Engineer
                    </div>
                  </div>
                </div>
                {/* Verified Tag */}
                <div className="absolute -top-3 -right-3 bg-[#151913] text-[#FAF7F1] border border-[#829762] text-[10px] font-label font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0FA88F] animate-pulse" />
                  Direct Builder
                </div>
              </div>
            </div>

            {/* Founder Bio & Details */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-[#6B7D50]/10 text-[#4E5B38] font-label text-xs font-bold uppercase tracking-wider">
                Direct Founder Collaboration
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#221D15] leading-snug">
                “When you build with WEBZA, you speak directly with the engineer coding your website.”
              </h3>
              <p className="font-body text-sm sm:text-base text-[#221D15]/75 leading-relaxed">
                Founded and led by <strong>Ritesh Singh</strong>, WEBZA rejects the sluggish templates and bloated agency markups that hold businesses back. Every flagship website is designed bespoke, optimized for sub-second performance, and built with Next.js 14.
              </p>

              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#221D15]/85">
                <li className="flex items-center gap-2">
                  <span className="text-[#0FA88F] font-bold">✓</span> Full code ownership &amp; zero vendor lock-in
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0FA88F] font-bold">✓</span> Free 24-hour interactive preview before commitment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#0FA88F] font-bold">✓</span> Direct WhatsApp &amp; screen share communication
                </li>
              </ul>

              <div className="pt-4 flex flex-wrap gap-3 items-center">
                <button
                  type="button"
                  onClick={onOpenDraftModal}
                  className="bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-sm transition-colors"
                >
                  Request a Free Draft →
                </button>
                <a
                  href="https://api.whatsapp.com/send?text=Hello%20Ritesh!%20I%20would%20like%20to%20discuss%20a%20website%20project%20with%20WEBZA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-label font-bold text-[#221D15] px-5 py-3 rounded-full border border-[#221D15]/15 bg-white hover:bg-black/5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Bar */}
        <div className="mt-12 max-w-4xl mx-auto bg-white border border-[#221D15]/10 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="font-heading font-bold text-base text-[#221D15]">
              Direct Engineering • Clean Next.js Architecture • Honest Pricing
            </div>
            <p className="font-body text-xs sm:text-sm text-[#221D15]/65 mt-0.5">
              No middle management. You work directly with Ritesh from concept to deployment.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenDraftModal}
            className="flex-shrink-0 bg-[#151913] hover:bg-[#221D15] text-[#FAF7F1] font-label font-semibold text-xs px-5 py-2.5 rounded-full transition-colors"
          >
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
}
