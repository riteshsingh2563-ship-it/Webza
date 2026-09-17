import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SERVICES } from '@/lib/data';
import { ArrowRight, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities — WEBZA | Full-Stack Creative Technology',
  description: 'Explore WEBZA engineering disciplines: Web Development, Bespoke UI/UX, Full-Stack Applications, Design Systems, Headless Commerce, and Technical SEO.',
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            02 • STUDIO DISCIPLINES
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            SERVICES & CAPABILITIES
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-2xl leading-relaxed">
            We operate at the exact intersection of high-end visual art direction and rigorous software engineering. Explore our core disciplines below.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-12 rounded-sm bg-[#111411] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover:border-[#6b7d50]/40 transition-all shadow-xl"
            >
              {/* Left (5 cols) */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono text-[#6b7d50] uppercase tracking-widest block mb-2">
                  DISCIPLINE {service.number}
                </span>

                <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
                  {service.title}
                </h2>

                <p className="font-serif italic text-base text-[#6b7d50] mb-6">
                  &ldquo;{service.tagline}&rdquo;
                </p>

                <p className="font-body text-sm text-[#8e9189] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="p-4 bg-black/40 border-l-2 border-[#6b7d50]">
                  <p className="font-serif italic text-xs sm:text-sm text-neutral-300">
                    &ldquo;{service.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Deliverables & Ecosystem (7 cols) */}
              <div className="lg:col-span-7 bg-[#161a15] p-6 sm:p-8 rounded-sm border border-white/[0.08]">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-300 mb-4">
                  Scope Deliverables & Artifacts
                </h3>

                <div className="space-y-3 mb-8">
                  {service.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-mono text-neutral-300">
                      <span className="w-2 h-2 rounded-full bg-[#6b7d50] mt-1.5 flex-shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-neutral-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#6b7d50] hover:text-[#7d9161] whitespace-nowrap"
                  >
                    <span>Engage Capability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
