'use client';

import React from 'react';
import Image from 'next/image';

interface FooterStoreboxProps {
  onOpenDraftModal: () => void;
}

export function FooterStorebox({ onOpenDraftModal }: FooterStoreboxProps) {
  return (
    <footer className="bg-[#151913] text-[#FAF7F1] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-white/95 p-1.5 border border-[#6B7D50]/40 flex items-center justify-center shadow-sm">
                <Image
                  src="/brand/webza-icon.png"
                  alt="WEBZA Logo"
                  width={38}
                  height={38}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white tracking-tight leading-none">
                  WEB<span className="text-[#829762]">ZA</span>
                </span>
                <span className="font-label text-[9px] tracking-[0.2em] text-[#829762] font-bold uppercase mt-0.5">
                  BUILT TO BE SEEN
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              We build, host, and optimize custom web flagships, e-commerce storefronts, and AI search visibility for high-growth businesses in 24 hours.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#1E241C] border border-white/10 px-3 py-1.5 rounded-full text-xs font-label text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#2BD4BD] animate-pulse" />
              <span>All Systems Operational • 99.9% Uptime</span>
            </div>
          </div>

          {/* Links Col 1: Solutions */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Explore Platform
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-white/70">
              <li>
                <a href="#how" className="hover:text-[#829762] transition-colors">
                  How It Works (5 Steps)
                </a>
              </li>
              <li>
                <a href="#relief" className="hover:text-[#829762] transition-colors">
                  The WEBZA Difference
                </a>
              </li>
              <li>
                <a href="#sell" className="hover:text-[#829762] transition-colors">
                  Ecommerce Stores
                </a>
              </li>
              <li>
                <a href="#found" className="hover:text-[#829762] transition-colors">
                  Search &amp; AEO Architecture
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#829762] transition-colors">
                  Our Team &amp; Principles
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Action & Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Get Started
            </div>
            <p className="text-xs font-body text-white/60">
              Claim your free draft preview link in 24 hours. Zero upfront commitment.
            </p>
            <button
              type="button"
              onClick={onOpenDraftModal}
              className="bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm block w-full text-center"
            >
              Request a Free Draft →
            </button>
            <div className="pt-2 text-xs font-body text-white/50">
              Direct developer desk: WhatsApp anytime.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-white/50">
          <div>
            © {new Date().getFullYear()} WEBZA. Built to be seen. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-label text-[11px]">
            <a href="#nocatch" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing Terms
            </a>
            <span>Zero Lock-in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
