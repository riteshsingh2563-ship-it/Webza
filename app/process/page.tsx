import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MethodologySection } from '@/components/MethodologySection';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Process — WEBZA | Delivery Framework',
  description: 'Inspect WEBZA’s 4-stage delivery process: Architectural Discovery, Bespoke Design & Motion, Full-Stack Engineering, and Edge Hardening.',
};

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            04 • EXECUTION DOCTRINE
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            ENGINEERING PROCESS
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-2xl leading-relaxed">
            Predictability and craftsmanship are not opposing forces. We enforce a disciplined, 4-stage sprint methodology that eliminates communication gaps and delivers on schedule.
          </p>
        </div>

        {/* Reusable Methodology Component */}
        <MethodologySection />

        {/* Quality Guarantees Bar */}
        <div className="mt-20 p-8 sm:p-12 rounded-sm bg-[#111411] border border-white/10">
          <h3 className="font-display text-2xl font-bold uppercase text-white mb-6">
            THE NON-NEGOTIABLE WEBZA GATES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono">
            <div className="p-4 bg-black/40 border border-white/10">
              <strong className="text-[#6b7d50] text-sm block mb-1">GATE 01 • TYPE INTEGRITY</strong>
              <span className="text-[#8e9189]">
                Zero TypeScript warnings or errors permitted in production build artifacts.
              </span>
            </div>
            <div className="p-4 bg-black/40 border border-white/10">
              <strong className="text-[#6b7d50] text-sm block mb-1">GATE 02 • CORE WEB VITALS</strong>
              <span className="text-[#8e9189]">
                Minimum 99 Lighthouse performance score and 0 Cumulative Layout Shift (CLS).
              </span>
            </div>
            <div className="p-4 bg-black/40 border border-white/10">
              <strong className="text-[#6b7d50] text-sm block mb-1">GATE 03 • ZERO DEPENDENCY BLOAT</strong>
              <span className="text-[#8e9189]">
                Total initial JS payload strictly controlled under 100kB for instantaneous load.
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#8e9189]">
              Ready to begin your architectural discovery phase?
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider bg-[#6b7d50] text-[#090a09] px-6 py-3 rounded-sm"
            >
              <span>Initiate Sprint 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
