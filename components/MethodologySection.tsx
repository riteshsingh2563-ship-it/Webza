import React from 'react';
import { Target, Eye, Code2, Rocket, ArrowRight } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const steps = [
    {
      phase: 'PHASE 01',
      title: 'ARCHITECTURAL DISCOVERY',
      duration: 'Week 1-2',
      icon: Target,
      desc: 'We audit competitive positioning, define database schemas and API boundaries, establish conversion milestones, and construct low-fidelity structural wireframes.',
      deliverables: ['Information Architecture Map', 'Technical Requirements Doc', 'Interactive Wireframe Flow'],
    },
    {
      phase: 'PHASE 02',
      title: 'BESPOKE DESIGN & MOTION',
      duration: 'Week 3-4',
      icon: Eye,
      desc: 'We translate the brand essence into custom typography scales, Figma token systems, high-fidelity responsive layouts, and interactive micro-animation choreography.',
      deliverables: ['Complete Design System', 'Responsive UI Mockups', 'Interactive Motion Prototype'],
    },
    {
      phase: 'PHASE 03',
      title: 'FULL-STACK ENGINEERING',
      duration: 'Week 5-6',
      icon: Code2,
      desc: 'We build the production application with Next.js 14, strict TypeScript contracts, database integration, headless CMS binding, and automated testing suites.',
      deliverables: ['Clean Next.js Codebase', 'Authenticated Database Sync', 'Continuous Integration Pipeline'],
    },
    {
      phase: 'PHASE 04',
      title: 'EDGE HARDENING & LAUNCH',
      duration: 'Week 7+',
      icon: Rocket,
      desc: 'Comprehensive performance tuning to guarantee 100/100 Core Web Vitals, global CDN routing, SEO schema deployment, client team training, and handover.',
      deliverables: ['Lighthouse 100 Audit', 'Global Edge CDN Deployment', 'Complete Ownership Handover'],
    },
  ];

  return (
    <section
      id="methodology"
      className="py-24 md:py-32 bg-[#0c0e0c] border-t border-white/[0.06] relative"
      aria-labelledby="methodology-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-8 h-px bg-[#6b7d50]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
              Execution Framework
            </span>
          </div>
          <h2
            id="methodology-title"
            className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            HOW WE DELIVER EXTRAORDINARY WORK
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8e9189]">
            A predictable, sprint-driven engineering process that eliminates guesswork and ensures pixel-perfect delivery on schedule.
          </p>
        </div>

        {/* 4 Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#141713]/80 border border-white/[0.08] hover:border-[#6b7d50]/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-widest bg-[#6b7d50]/15 px-2.5 py-1 rounded border border-[#6b7d50]/30">
                      {step.phase}
                    </span>
                    <span className="text-xs font-mono text-[#8e9189]">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-3 group-hover:text-[#829762] transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.08] space-y-1.5">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                    Key Outputs:
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-xs font-mono text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6b7d50]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
