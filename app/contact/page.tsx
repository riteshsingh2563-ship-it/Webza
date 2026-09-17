import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { ScopeEstimator } from '@/components/ScopeEstimator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start A Project — WEBZA | Project Brief & Scope Estimator',
  description: 'Initiate a dialogue with WEBZA Studio. Configure your technical requirements, calculate an immediate scope estimate, or submit a formal project inquiry.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28">
        {/* Top Header */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            05 • STRATEGIC ENGAGEMENT
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            START A PROJECT
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-2xl leading-relaxed">
            Use the interactive scope calculator below to configure your technical parameters, or dispatch your project inquiry directly to our creative technology directors.
          </p>
        </div>

        {/* Interactive Scope Calculator */}
        <ScopeEstimator />

        {/* Direct Contact Form */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
