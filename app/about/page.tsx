import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The Studio — WEBZA | Built To Be Seen',
  description: 'Learn about WEBZA: our founding manifesto, leadership, studio principles, and global presence across San Francisco, London, and Tokyo.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Distinction is a Business Moat',
      desc: 'When your digital presence looks identical to three dozen competitors, you compete purely on price. High-end bespoke art direction commands pricing power.',
    },
    {
      title: 'Architecture Determines Longevity',
      desc: 'We reject throwaway prototypes. Every platform is architected with strict TypeScript contracts, modular component systems, and edge-native infrastructure.',
    },
    {
      title: 'Performance is Fundamental Respect',
      desc: 'Users remember sluggish interfaces and forget uninspiring websites. We treat milliseconds as revenue and guarantee 99+ Core Web Vitals.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            03 • STUDIO ORIGINS
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            BUILT TO BE SEEN
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-2xl leading-relaxed">
            WEBZA was founded on a simple observation: the modern web has succumbed to homogeneity. We exist to restore conviction, artistry, and engineering rigor to digital experiences.
          </p>
        </div>

        {/* Studio Manifesto Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6 text-[#8e9189] font-body text-base sm:text-lg leading-relaxed">
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              A REFUSAL TO SETTLE FOR GENERIC SOFTWARE.
            </h2>
            <p>
              Somewhere in the last decade, corporate web design traded distinction for convenience. Templates were cloned, frameworks were generalized, and brands began to blur together into indistinguishable shades of purple and slate.
            </p>
            <p>
              We established WEBZA as an antidote. We operate as an elite multidisciplinary unit — combining the aesthetic taste of a high-fashion atelier with the engineering precision of a distributed systems laboratory.
            </p>
            <p>
              Whether we are building a spatial 3D product showcase or an institutional high-frequency trading dashboard, our mandate remains identical: <strong>Built to be seen. Engineered to endure.</strong>
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 bg-[#141713] shadow-2xl">
              <Image
                src="/brand/webza-brand-poster.jpg"
                alt="WEBZA Studio Exhibition"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center grayscale-[15%]"
              />
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
                className="p-8 rounded-sm bg-[#111411] border border-white/10 flex flex-col justify-between"
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

        {/* Global Hubs */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#111411] border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08] mb-8">
            <div>
              <span className="text-xs font-mono text-[#6b7d50] uppercase tracking-widest block mb-1">
                STUDIO PRESENCE
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                GLOBAL OPERATING HUBS
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider bg-[#6b7d50] text-[#090a09] px-5 py-3 rounded-sm"
            >
              <span>Schedule Strategic Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div>
              <strong className="text-white text-sm block mb-1">SAN FRANCISCO</strong>
              <span className="text-[#8e9189]">548 Market Street, Suite 402</span>
              <span className="text-[#6b7d50] block mt-1">PST (UTC-8)</span>
            </div>
            <div>
              <strong className="text-white text-sm block mb-1">LONDON</strong>
              <span className="text-[#8e9189]">14 Shoreditch High Street</span>
              <span className="text-[#6b7d50] block mt-1">GMT (UTC+0)</span>
            </div>
            <div>
              <strong className="text-white text-sm block mb-1">TOKYO</strong>
              <span className="text-[#8e9189]">Shibuya Stream Digital Lab</span>
              <span className="text-[#6b7d50] block mt-1">JST (UTC+9)</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
