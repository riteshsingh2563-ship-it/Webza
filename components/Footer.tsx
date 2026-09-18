'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { ArrowUp, Mail, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenProjectBrief?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProjectBrief }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Process', href: '/#process' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer
      className="bg-[#060706] border-t border-white/[0.08] pt-20 pb-12 relative overflow-hidden"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Massive Typographic Tagline Banner */}
        <div className="pb-12 border-b border-white/[0.08] mb-16">
          <span className="text-xs font-mono text-[#6b7d50] uppercase tracking-[0.35em] block mb-3">
            WEBZA BRAND ESSENCE
          </span>
          <h2 className="font-display text-4xl sm:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-neutral-200">
            BUILT TO BE <span className="text-[#6b7d50]">SEEN.</span>
          </h2>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo size="lg" />
            <p className="font-body text-xs sm:text-sm text-[#8e9189] max-w-sm leading-relaxed">
              WEBZA is an official digital web agency. We design and build modern, fast, and conversion-focused websites that help businesses turn visitors into customers.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#6b7d50]">
              <span className="w-2 h-2 rounded-full bg-[#6b7d50]" />
              <span>Available for Select Client Builds</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-[#8e9189]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-[#8e9189]">
              <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Redesign</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Inquiries (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              GET IN TOUCH
            </h3>
            <div className="space-y-3 text-xs font-mono text-[#8e9189]">
              <button
                type="button"
                onClick={onOpenProjectBrief}
                className="w-full text-left bg-[#121612] hover:bg-[#6b7d50] hover:text-[#090a09] text-white p-3 rounded-sm border border-white/10 transition-colors flex items-center justify-between font-display font-bold uppercase tracking-wider"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/917898195460"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors pt-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp (+91 78981 95460)</span>
              </a>
              <a
                href="mailto:contact@webza.agency"
                className="flex items-center gap-2 hover:text-[#6b7d50] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6b7d50]" />
                <span>contact@webza.agency</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8e9189]">
          <p>© 2026 WEBZA. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#6b7d50]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
