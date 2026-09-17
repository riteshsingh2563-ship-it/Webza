'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenProjectBrief?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectBrief }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Process', href: '/#process' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a09]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg'
            : 'bg-transparent border-b border-white/[0.04] py-5'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            className="group inline-flex items-center"
            aria-label="WEBZA Homepage"
          >
            <Logo size="md" showTagline={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-xs uppercase tracking-[0.16em] text-[#8e9189] hover:text-[#f5f4ee] transition-colors py-1 relative hover:after:w-full hover:after:h-[2px] hover:after:bg-[#6b7d50] hover:after:absolute hover:after:bottom-0 hover:after:left-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenProjectBrief}
              className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.14em] bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09] px-5 py-2.5 rounded-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-sm"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#090a09] transition-all duration-300 md:hidden flex flex-col justify-between pt-28 pb-10 px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-[0.3em]">
              NAVIGATION INDEX
            </span>
            <span className="text-[10px] font-mono text-[#8e9189]">
              WEBZA STUDIO
            </span>
          </div>

          <nav className="flex flex-col gap-5" aria-label="Mobile Navigation">
            {navLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-display text-2xl font-bold uppercase tracking-tight text-[#8e9189] hover:text-[#f5f4ee] flex items-center justify-between border-b border-white/[0.05] pb-3 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#6b7d50]">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenProjectBrief?.();
            }}
            className="w-full flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-widest bg-[#6b7d50] text-[#090a09] py-4 rounded-sm shadow-md cursor-pointer hover:bg-[#7d9161] transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </>
  );
};
