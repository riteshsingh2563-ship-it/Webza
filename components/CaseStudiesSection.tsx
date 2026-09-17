'use client';

import React, { useState } from 'react';
import { CaseStudyData } from './CaseStudyModal';
import { ArrowUpRight, CheckCircle2, Cpu, Globe, Layers, ShieldCheck } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudyData) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'app' | 'ecommerce'>('all');

  const caseStudies: (CaseStudyData & { filterType: string })[] = [
    {
      id: 'krypton',
      title: 'Institutional Liquidity & Trading Platform',
      client: 'Krypton Protocol',
      category: 'Fintech & Web3',
      filterType: 'app',
      year: '2026',
      deliverable: 'High-Frequency Trading Web Engine',
      challenge:
        'Krypton required a zero-latency web interface capable of streaming live orderbook depths, cross-chain yield analytics, and multi-signature settlement without browser frame drops.',
      solution:
        'We engineered a Next.js 14 real-time WebSockets architecture paired with Rust WebAssembly modules for client-side cryptographic transaction signing, achieving 12ms interface responsiveness.',
      metrics: [
        { label: 'Throughput Speedup', value: '+340%' },
        { label: 'Total Volume Handled', value: '₹400+ Cr' },
        { label: 'Execution Latency', value: '12ms' },
      ],
      stack: ['Next.js 14', 'WebSockets', 'Rust WASM', 'Tailwind', 'Ethers.js'],
    },
    {
      id: 'aura',
      title: 'Next-Gen Spatial Computing Showcase',
      client: 'Aura Spatial',
      category: 'Creative Tech & 3D',
      filterType: 'flagship',
      year: '2026',
      deliverable: 'Flagship Web Experience & 3D Configurator',
      challenge:
        'Aura was introducing a breakthrough spatial audio headset and needed a web flagship that communicated sensory luxury and allowed photorealistic real-time 3D product customization on mobile devices.',
      solution:
        'Using customized WebGL shaders and GLTF mesh compression in Three.js alongside fluid GSAP scroll storytelling, we achieved 60fps rendering even on mid-tier smartphones with sub-second initial asset loads.',
      metrics: [
        { label: 'Awwwards Recognition', value: 'SOTD' },
        { label: 'Pre-Order Conversion', value: '+34%' },
        { label: 'Mobile Framerate', value: '60 FPS' },
      ],
      stack: ['Three.js', 'WebGL', 'GSAP', 'Next.js', 'Framer Motion'],
    },
    {
      id: 'solace',
      title: 'High-AOV Luxury Sustainable Commerce',
      client: 'Solace Goods',
      category: 'Headless E-Commerce',
      filterType: 'ecommerce',
      year: '2026',
      deliverable: 'Headless Shopify & Global Checkout',
      challenge:
        'Legacy monolithic Shopify themes resulted in sluggish 4.2-second page loads, poor mobile checkout retention, and rigid design limitations that diminished their luxury brand equity.',
      solution:
        'We decoupled the frontend entirely using Next.js 14 edge rendering and the Shopify Storefront GraphQL API, combined with bespoke micro-interactions and localized multi-currency Stripe checkout.',
      metrics: [
        { label: 'Global Load Time', value: '0.4s' },
        { label: 'Average Order Value', value: '+185%' },
        { label: 'Cart Abandonment Drop', value: '-28%' },
      ],
      stack: ['Shopify Plus', 'Next.js 14', 'GraphQL', 'Stripe', 'Tailwind'],
    },
    {
      id: 'verve',
      title: 'Precision Telehealth & Biometrics Portal',
      client: 'Verve Health',
      category: 'HealthTech & Telemetry',
      filterType: 'app',
      year: '2026',
      deliverable: 'HIPAA-Compliant Patient Portal',
      challenge:
        'A high-volume healthcare provider needed a frictionless, secure patient telemetry dashboard capable of synthesizing continuous biometric monitor feeds with end-to-end encrypted clinician notes.',
      solution:
        'We architected an enterprise-grade HIPAA-compliant portal with Supabase Row-Level Security, automated audit logs, and reactive SVG charting for immediate patient insight.',
      metrics: [
        { label: 'Active Monthly Patients', value: '140k+' },
        { label: 'Uptime Reliability', value: '99.99%' },
        { label: 'Audit Security Score', value: '100%' },
      ],
      stack: ['Next.js 14', 'Supabase', 'PostgreSQL', 'Recharts', 'TypeScript'],
    },
  ];

  const filteredStudies =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter((c) => c.filterType === activeFilter);

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-[#0c0e0c] border-t border-white/[0.06] relative"
      aria-labelledby="work-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-8 h-px bg-[#6b7d50]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
                Proof of Execution
              </span>
            </div>
            <h2
              id="work-title"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white"
            >
              SELECTED ENGAGEMENTS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'flagship', label: 'Flagship Web' },
              { id: 'app', label: 'Web Applications' },
              { id: 'ecommerce', label: 'E-Commerce' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#6b7d50] text-[#090a09] font-bold shadow-md'
                    : 'bg-white/[0.04] text-[#8e9189] hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="group p-8 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle Ambient Radial */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6b7d50]/[0.05] rounded-full blur-3xl pointer-events-none group-hover:bg-[#6b7d50]/[0.1] transition-colors" />

              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono text-[#6b7d50] uppercase tracking-wider bg-[#6b7d50]/15 px-2.5 py-1 rounded border border-[#6b7d50]/30">
                    {study.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8e9189]">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.year}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#f5f4ee] mb-4">
                  {study.title}
                </h3>

                {/* Narrative Summary */}
                <p className="font-body text-sm text-[#8e9189] leading-relaxed mb-8 line-clamp-3">
                  {study.challenge}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="font-display text-lg sm:text-xl font-bold text-white block">
                        {m.value}
                      </span>
                      <span className="text-[10px] font-mono text-[#8e9189] uppercase tracking-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.slice(0, 3).map((stk, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-neutral-300 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded"
                    >
                      {stk}
                    </span>
                  ))}
                  {study.stack.length > 3 && (
                    <span className="text-[10px] font-mono text-[#8e9189] py-0.5">
                      +{study.stack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6b7d50] group-hover:text-[#829762] uppercase font-bold">
                  <span>Inspect System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
