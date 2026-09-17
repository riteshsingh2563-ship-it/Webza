'use client';

import React from 'react';
import {
  Smartphone,
  Zap,
  Layout,
  Search,
  Sparkles,
  MessageSquare,
  BarChart3,
  Flame,
  Lock,
  Layers,
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'Responsive Design',
      icon: Smartphone,
      description:
        'Fluid, adaptive layouts engineered to look impeccable on every screen size from 320px smartphones to ultrawide monitors.',
    },
    {
      title: 'Fast Performance',
      icon: Zap,
      description:
        'Sub-second page loads powered by Next.js static rendering, optimized image assets, and edge caching architecture.',
    },
    {
      title: 'Modern UI',
      icon: Layout,
      description:
        'Clean, architectural visual aesthetics with refined typography, purposeful negative space, and intentional micro-interactions.',
    },
    {
      title: 'SEO Foundation',
      icon: Search,
      description:
        'Semantic HTML5 structure, automated sitemaps, open graph metadata, and clean routing built for high search visibility.',
    },
    {
      title: 'Custom Branding',
      icon: Sparkles,
      description:
        'Tailored design token systems, authentic brand colors, and typography that faithfully reflect your distinct business personality.',
    },
    {
      title: 'Contact Integration',
      icon: MessageSquare,
      description:
        'Direct WhatsApp chat integration, click-to-call links, and validated inquiry forms that capture leads without friction.',
    },
    {
      title: 'Analytics Ready',
      icon: BarChart3,
      description:
        'Pre-wired event tracking architecture ready for Google Analytics, Meta Pixel, and conversion goal telemetry.',
    },
    {
      title: 'Mobile First',
      icon: Flame,
      description:
        'Designed primarily for the 65%+ of customers browsing on mobile devices, with thumb-accessible navigation and touch targets.',
    },
    {
      title: 'Secure Deployment',
      icon: Lock,
      description:
        'Enterprise-grade HTTPS encryption, strict security headers, sanitized inputs, and continuous cloud server protection.',
    },
    {
      title: 'Scalable Architecture',
      icon: Layers,
      description:
        'Clean modular component codebases that make adding new pages, blogs, services, or commerce capabilities effortless over time.',
    },
  ];

  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.08] relative"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              07 • TECHNICAL PILLARS
            </span>
            <h2
              id="features-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Built Without Compromise.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            Ten essential engineering pillars baked into every single website WEBZA builds.
          </p>
        </div>

        {/* 10-Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-[#121612] border border-white/[0.08] rounded-md p-6 hover:border-[#6b7d50]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#181d18] border border-white/10 flex items-center justify-center text-[#6b7d50] group-hover:bg-[#6b7d50] group-hover:text-[#090a09] transition-colors mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-base font-bold uppercase text-[#f5f4ee] mb-2 group-hover:text-[#6b7d50] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="font-body text-xs text-[#8e9189] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-[#6b7d50] uppercase tracking-wider">
                  STANDARD INCLUSION
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
