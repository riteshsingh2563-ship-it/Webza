'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarStoreboxProps {
  onOpenDraftModal: (plan?: string) => void;
}

export function NavbarStorebox({ onOpenDraftModal }: NavbarStoreboxProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Work', href: '#work' },
    { label: 'How it works', href: '#how' },
    { label: 'The Difference', href: '#relief' },
    { label: 'Ecommerce', href: '#sell' },
    { label: 'SEO & AEO', href: '#found' },
    { label: 'Team', href: '#founder' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#nocatch' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F1]/90 backdrop-blur-md shadow-sm border-b border-[#221D15]/10 py-3'
          : 'bg-[#FAF7F1] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="WEBZA — Home"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/95 p-1.5 flex items-center justify-center shadow-sm border border-[#6B7D50]/25 transition-all duration-200 group-hover:scale-105 group-hover:border-[#6B7D50] group-hover:shadow-md">
            <Image
              src="/brand/webza-icon.png"
              alt="WEBZA Logo"
              width={44}
              height={44}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl sm:text-2xl text-[#14241A] tracking-tight leading-none">
              WEB<span className="text-[#6B7D50]">ZA</span>
            </span>
            <span className="font-label text-[9px] sm:text-[10px] tracking-[0.2em] text-[#6B7D50] font-bold uppercase mt-0.5">
              BUILT TO BE SEEN
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[14px] font-medium text-[#221D15]/80 hover:text-[#6B7D50] px-3 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenDraftModal('Development Gold (₹12,599)')}
            className="inline-flex items-center justify-center gap-2 bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request a Free Demo</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => onOpenDraftModal('Development Gold (₹12,599)')}
            className="sm:hidden bg-[#6B7D50] text-white font-label font-semibold text-xs px-3.5 py-2 rounded-full shadow-sm"
          >
            Free Demo
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#221D15] hover:text-[#6B7D50] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F1] border-b border-[#221D15]/10 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-body text-base font-medium text-[#221D15] hover:text-[#6B7D50] py-2 px-3 rounded-md hover:bg-[#F2F5ED] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#221D15]/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDraftModal('Development Gold (₹12,599)');
              }}
              className="w-full bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-sm py-3 rounded-full text-center shadow-md transition-colors"
            >
              Get My Free Demo in 24h →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
