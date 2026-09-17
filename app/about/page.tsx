import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — WEBZA | Built To Be Seen',
  description: 'Learn about WEBZA: our team, principles, and web development philosophy.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Ritesh Singh',
      role: 'Founder & Developer',
      initials: 'RS',
      bio: 'Leads engineering, full-stack architecture, and platform development at WEBZA.',
    },
    {
      name: 'Priyanshu Patel',
      role: 'Co-Founder & Calling',
      initials: 'PP',
      bio: 'Manages client communications, onboarding calls, and customer coordination.',
    },
    {
      name: 'Jatin Sahu',
      role: 'Developer',
      initials: 'JS',
      bio: 'Develops modern frontend interfaces, responsive components, and UI interactions.',
    },
    {
      name: 'Ayush Verma',
      role: 'Research & Sales',
      initials: 'AV',
      bio: 'Focuses on digital presence analysis, market research, and client outreach.',
    },
  ];

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
      desc: 'You work directly with real developers who build your project. No layers of non-technical account managers or communication bottlenecks.',
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
            WEBZA is a web development and creative studio focused on building modern, professional websites for businesses.
          </p>
        </div>

        {/* Narrative */}
        <div className="max-w-3xl mb-24 space-y-6 text-[#8e9189] font-body text-base sm:text-lg leading-relaxed">
          <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
            CRAFTED WITH PRECISION AND CLARITY.
          </h2>
          <p>
            Founded by Ritesh Singh, WEBZA exists to provide businesses with high-performing, beautifully crafted websites without the bloated agency overhead or rigid template restrictions.
          </p>
          <p>
            We operate as a focused, multidisciplinary team covering development, client communication, research, and sales. Every project is engineered directly with modern web standards, mobile-first design, and clean code.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#6b7d50] block mb-4">
            OUR TEAM
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-12">
            THE PEOPLE BEHIND WEBZA
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-[#111411] border border-white/10 flex flex-col justify-between text-center"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#181d17] border border-[#6b7d50]/30 text-white flex items-center justify-center mx-auto mb-5 font-mono text-xl font-bold">
                    {member.initials}
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase text-white mb-1">
                    {member.name}
                  </h4>
                  <div className="font-mono text-xs text-[#6b7d50] uppercase tracking-wider mb-4">
                    {member.role}
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
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
