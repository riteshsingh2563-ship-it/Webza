'use client';

import React from 'react';

export function StoreInABox() {
  const tiles = [
    {
      icon: '⚡',
      title: 'High-Speed Cloud Hosting',
      desc: 'Global Edge CDN deployment with 99.9% uptime. Zero server setup.',
    },
    {
      icon: '📱',
      title: '100% Mobile-First',
      desc: 'Engineered specifically for thumb navigation, smooth gestures, and mobile conversions.',
    },
    {
      icon: '💬',
      title: 'WhatsApp Lead Automation',
      desc: 'Instant order notifications and customer inquiries routed straight to your WhatsApp.',
    },
    {
      icon: '🔍',
      title: 'Google SEO & Rich Schema',
      desc: 'Structured JSON-LD schema markup that secures top rankings and rich Google snippets.',
    },
    {
      icon: '🤖',
      title: 'AI Engine Optimization (AEO)',
      desc: 'Optimized citations for ChatGPT, Perplexity, and Apple Intelligence recommendations.',
    },
    {
      icon: '🔒',
      title: 'Custom Domain & Auto SSL',
      desc: 'Connect your .com or .in domain with automated free SSL certificate security.',
    },
    {
      icon: '🚀',
      title: '99+ PageSpeed Score',
      desc: 'Sub-second initial load speeds that keep customers from bouncing away.',
    },
    {
      icon: '📊',
      title: 'Clean Analytics Dashboard',
      desc: 'Track visitors, top pages, and inquiry velocity with zero cookie clutter or bloat.',
    },
    {
      icon: '✍️',
      title: 'Unlimited Edits & Updates',
      desc: 'Need a price change, new product, or banner update? Just send a message on WhatsApp.',
    },
    {
      icon: '💳',
      title: 'Zero-Fee UPI & Payments',
      desc: 'Accept UPI, credit cards, and netbanking directly into your bank without platform cuts.',
    },
    {
      icon: '🛡️',
      title: 'Automated Daily Backups',
      desc: 'Enterprise-grade disaster recovery and code snapshots preserved permanently.',
    },
    {
      icon: '👤',
      title: 'Dedicated Account Manager',
      desc: 'Direct line to a senior human engineer. No outsourced call centers or automated bots.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15]" id="officeBx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
            <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
              What you get
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#221D15] tracking-tight">
            A store, in a box.{' '}
            <span className="italic font-normal text-[#6B7D50]">The whole store.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-[#221D15]/75 mt-4">
            Website and store up front — and the entire back office machinery running quietly underneath. The tools agencies charge extra for and builders make you bolt on.
          </p>
        </div>

        {/* 12-Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="bg-white border border-[#221D15]/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#6B7D50]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl block mb-4" role="img" aria-label={tile.title}>
                  {tile.icon}
                </span>
                <h3 className="font-heading text-base font-semibold text-[#221D15] mb-2">
                  {tile.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#221D15]/70 leading-relaxed">
                  {tile.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#221D15]/5 flex items-center gap-1.5 text-[11px] font-label text-[#6B7D50] font-semibold">
                <span>✓ Included in all plans</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-[#F2F5ED] border border-[#6B7D50]/20 rounded-full px-6 py-2.5 text-xs sm:text-sm font-label text-[#4E5B38] font-bold">
            All included. No plugins. No add-ons. No hidden monthly software bills.
          </div>
        </div>
      </div>
    </section>
  );
}
