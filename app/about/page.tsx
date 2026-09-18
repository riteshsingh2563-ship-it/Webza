import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — WEBZA | Built To Be Seen',
  description: 'Learn about WEBZA: our leadership, principles, and bespoke web engineering philosophy.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Distinction Over Generic Templates',
      desc: 'When your digital presence looks identical to every competitor, you compete purely on price. Bespoke UI/UX commands trust and attention.',
    },
    {
      title: 'Clean Engineering & Architecture',
      desc: 'We build with modern Next.js and Tailwind CSS. Clean, maintainable codebases that are fast, accessible, and responsive across all viewports.',
    },
    {
      title: 'Direct Developer Collaboration',
      desc: 'You work directly with the engineer who builds your project. No layers of non-technical account managers or communication bottlenecks.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            ABOUT THE STUDIO
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            BUILT TO BE SEEN
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-2xl leading-relaxed">
            WEBZA is a bespoke web engineering and creative studio focused on building modern, high-performance websites for ambitious businesses.
          </p>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl mb-24 space-y-6 text-[#8e9189] font-body text-base sm:text-lg leading-relaxed">
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
            CRAFTED WITH PRECISION AND CLARITY.
          </h2>
          <p>
            Founded and led by <strong>Ritesh Singh</strong>, WEBZA exists to provide businesses with high-performing, beautifully crafted websites without bloated agency overhead or rigid template restrictions.
          </p>
          <p>
            We operate with a direct, engineer-first approach. Every project is engineered directly with modern web standards, sub-second performance, mobile-first design, and clean Next.js architecture.
          </p>
        </div>

        {/* Founder & Leadership Spotlight */}
        <div className="mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#6b7d50] block mb-4">
            LEADERSHIP
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-12">
            THE BUILDER BEHIND WEBZA
          </h3>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#111411] border border-white/10 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Frame */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[300px]">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#6b7d50] shadow-2xl bg-[#181d17]">
                    <Image
                      src="/brand/ritesh-square.webp"
                      alt="Ritesh Singh — Founder & Lead Developer"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090a09]/95 via-[#090a09]/60 to-transparent p-4 text-white">
                      <div className="font-display text-lg font-bold uppercase tracking-wide">
                        Ritesh Singh
                      </div>
                      <div className="font-mono text-xs text-[#829762] uppercase tracking-wider">
                        Founder &amp; Lead Engineer
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-[#181d17] text-white border border-[#6b7d50] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0fa88f] animate-pulse" />
                    Direct Builder
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#6b7d50]/15 text-[#829762] font-mono text-xs font-bold uppercase tracking-wider mb-3">
                    Bespoke Web Studio
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                    Ritesh Singh
                  </h4>
                  <div className="font-mono text-sm text-[#6b7d50] uppercase tracking-wider">
                    Founder &amp; Full-Stack Architect
                  </div>
                </div>

                <p className="font-body text-sm sm:text-base text-[#8e9189] leading-relaxed">
                  Ritesh leads full-stack architecture, technical direction, and client implementations at WEBZA. Committed to eliminating agency bloat, he works directly with founders and business owners to build digital flagships that convert visitors into revenue.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/[0.08]">
                  <div>
                    <div className="font-mono text-xs text-[#6b7d50] uppercase tracking-wider">Philosophy</div>
                    <div className="font-body text-sm text-white font-medium mt-0.5">Code Clean. Build Fast.</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#6b7d50] uppercase tracking-wider">Communication</div>
                    <div className="font-body text-sm text-white font-medium mt-0.5">Direct WhatsApp &amp; Desk</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/#leadArea"
                    className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#5a6b42] text-white px-5 py-3 rounded-xl transition-colors"
                  >
                    <span>Request a Free Draft</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://api.whatsapp.com/send?text=Hello%20Ritesh!%20I%20would%20like%20to%20discuss%20a%20website%20project%20with%20WEBZA."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white/80 hover:text-white px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25d366]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Principles */}
        <div className="mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#6b7d50] block mb-4">
            CORE DOCTRINE
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-12">
            THREE GUIDING PRINCIPLES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#111411] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#6b7d50] font-bold block mb-4">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display text-xl font-bold uppercase text-white mb-3">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm text-[#8e9189] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#111411] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
              Ready to elevate your digital flagship?
            </h3>
            <p className="font-body text-sm text-[#8e9189]">
              Request a free 24-hour custom preview. Development starting at ₹9,999.
            </p>
          </div>
          <Link
            href="/#leadArea"
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#5a6b42] text-white px-6 py-3.5 rounded-xl transition-colors"
          >
            <span>Request a Free Draft</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
