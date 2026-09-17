'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Code, Zap } from 'lucide-react';

export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  deliverable: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  stack: string[];
}

interface CaseStudyModalProps {
  caseStudy: CaseStudyData | null;
  onClose: () => void;
  onOpenProjectBrief: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenProjectBrief,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && caseStudy) {
        onClose();
      }
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#111411] border border-white/20 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Specular Edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/40 to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Meta Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-mono text-[#6b7d50] uppercase tracking-widest bg-[#6b7d50]/15 px-2.5 py-1 rounded border border-[#6b7d50]/30">
            {caseStudy.category}
          </span>
          <span className="text-xs font-mono text-[#8e9189]">
            {caseStudy.client} • {caseStudy.year}
          </span>
        </div>

        <h3 id="case-study-title" className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-6">
          {caseStudy.title}
        </h3>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-black/50 border border-white/10 mb-8">
          {caseStudy.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#6b7d50] block">
                {metric.value}
              </span>
              <span className="text-[10px] font-mono text-[#8e9189] uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-6 mb-8">
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#6b7d50]" />
              <span>The Architectural Challenge</span>
            </h4>
            <p className="font-body text-sm text-[#8e9189] leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#6b7d50]" />
              <span>The WEBZA Engineering Solution</span>
            </h4>
            <p className="font-body text-sm text-[#8e9189] leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8 pt-6 border-t border-white/10">
          <span className="text-xs font-mono text-[#8e9189] uppercase tracking-wider block mb-3">
            Technology Ecosystem:
          </span>
          <div className="flex flex-wrap gap-2">
            {caseStudy.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/15 px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <span className="text-xs text-[#8e9189]">
            Deliverable: <strong className="text-white">{caseStudy.deliverable}</strong>
          </span>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenProjectBrief();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] px-6 py-3 rounded-lg transition-all cursor-pointer shadow-md"
          >
            <span>Build Similar Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
