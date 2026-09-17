'use client';

import React, { useState } from 'react';

export function WhatIsTheCatch() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How can you deliver a custom draft in 24 hours?',
      a: 'We eliminated 90% of agency waste. Instead of endless committee meetings and slow wireframe reviews, our senior full-stack engineers deploy directly onto modern Next.js 14 component systems. When you send us your Instagram, Google Maps, or idea, our humans craft your layout and code it into a live private preview in 24 hours.',
    },
    {
      q: 'Do I have to pay anything before seeing my website?',
      a: 'No. Zero upfront payment is required to review your draft. We build your initial custom preview link first. You inspect it on your phone, test the speed, and see your brand come alive. If you love it, we connect your domain and launch. If you don’t, you walk away with zero risk.',
    },
    {
      q: 'Can I sell physical products and accept UPI & Card payments?',
      a: 'Yes! The Development Gold tier includes a complete, high-converting digital storefront. Your customers can browse products, add them to cart, and checkout instantly via direct WhatsApp ordering or integrated payment gateways (UPI, Credit Cards, Netbanking) with 0% platform transaction commissions.',
    },
    {
      q: 'What if I want revisions, changes, or new products added?',
      a: 'Unlimited revisions are included. Whenever you have a menu change, new photos, price updates, or announcement banners, simply send a message to your dedicated WEBZA manager on WhatsApp. We apply the updates directly for you.',
    },
    {
      q: 'What is AEO and how does WEBZA get me recommended by AI?',
      a: 'AEO stands for AI Engine Optimization. When high-income buyers ask ChatGPT, Perplexity, or Apple Intelligence “who is the best boutique or studio near me?”, AI models don’t look at traditional keywords — they scan verified structured JSON-LD data and semantic reputation signals. We engineer your site with authoritative schema so AI assistants cite you as the #1 answer.',
    },
    {
      q: 'Who owns the website and domain name?',
      a: 'You do — 100%. Your domain remains in your name, and you have complete ownership over your customer data, images, and content. There are no contracts and no exit penalties.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15]" id="nocatch">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
            <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
              The obvious question
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#221D15] tracking-tight">
            “What’s the catch?”
          </h2>
          <div className="font-heading text-2xl sm:text-3xl italic font-normal text-[#6B7D50] mt-2">
            There isn’t one.
          </div>
        </div>

        {/* The Math Card */}
        <div className="max-w-3xl mx-auto bg-white border border-[#221D15]/15 rounded-2xl p-6 sm:p-8 shadow-xl text-center mb-12">
          <div className="font-heading text-xl sm:text-2xl font-bold text-[#221D15] flex items-center justify-center flex-wrap gap-2">
            <span>One traditional agency invoice (₹1,50,000) =</span>
            <span className="text-[#6B7D50] text-3xl sm:text-4xl font-extrabold">15+ Years</span>
            <span>of WEBZA.</span>
          </div>

          {/* 15 Year Blocks Grid */}
          <div className="grid grid-cols-5 sm:grid-cols-15 gap-2 max-w-md mx-auto my-6">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-md bg-[#6B7D50]/15 border border-[#6B7D50]/30 flex items-center justify-center text-[10px] font-mono font-bold text-[#4E5B38]"
                title={`Year ${i + 1} of managed flagship web operations`}
              >
                Y{i + 1}
              </div>
            ))}
          </div>

          <p className="font-body text-xs sm:text-sm text-[#221D15]/70 max-w-lg mx-auto">
            Each square represents a full year of your business website — custom designed, hosted on edge global CDN, optimized for Google &amp; AI search, and updated on demand.
          </p>
        </div>

        {/* Why Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <div className="bg-white border border-[#221D15]/10 rounded-2xl p-6 sm:p-7 shadow-sm">
            <span className="text-3xl block mb-3">⚙️</span>
            <h3 className="font-heading text-lg font-semibold text-[#221D15] mb-2">
              Next-Gen Engineering Engine
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#221D15]/75 leading-relaxed">
              We built our deployment pipeline on Next.js 14 and edge hosting. Code handles the repetitive 90% that traditional agencies bill you thousands for.
            </p>
          </div>

          <div className="bg-white border border-[#221D15]/10 rounded-2xl p-6 sm:p-7 shadow-sm">
            <span className="text-3xl block mb-3">🎨</span>
            <h3 className="font-heading text-lg font-semibold text-[#221D15] mb-2">
              Human Craft &amp; Taste
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#221D15]/75 leading-relaxed">
              Real senior designers and copywriters craft the 10% that converts — visual hierarchy, brand voice, and persuasive storytelling. You never talk to a robot.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-bold text-center text-[#221D15] mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white border border-[#221D15]/10 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 font-heading text-base sm:text-lg font-semibold text-[#221D15] flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#6B7D50] text-xl font-bold">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 font-body text-xs sm:text-sm text-[#221D15]/80 leading-relaxed border-t border-[#221D15]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footnote */}
          <div className="mt-12 text-center text-xs sm:text-sm font-label text-[#221D15]/70">
            No setup fees. No contracts. No surprise price hikes.{' '}
            <strong className="text-[#0FA88F] font-bold">100% satisfaction guaranteed.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
