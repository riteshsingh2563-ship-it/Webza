'use client';

import React from 'react';
import {
  Code2,
  Palette,
  Building2,
  Target,
  RefreshCw,
  ShieldCheck,
  ArrowUpRight,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenProjectBrief?: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenProjectBrief,
}) => {
  const services = [
    {
      id: 'web-dev',
      title: 'Website Development',
      icon: Code2,
      description:
        'Custom engineering using modern Next.js, React, and TypeScript. No sluggish templates, bloated plugins, or fragile monolithic code.',
      benefit: 'Blazing fast load times and clean code that scales seamlessly with your business.',
      deliverables: ['Custom Next.js Frontend', 'TypeScript Architecture', 'API Integrations', 'Clean Semantic Code'],
      colSpan: 'lg:col-span-7',
      featured: true,
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: Palette,
      description:
        'Strategic user experience design paired with distinctive brand aesthetics. We design purposeful layouts that captivate your audience.',
      benefit: 'Transforms casual visitors into engaged prospects with zero friction.',
      deliverables: ['Design System Tokens', 'Figma Wireframing', 'Interactive Prototypes', 'Conversion Layouts'],
      colSpan: 'lg:col-span-5',
      featured: false,
    },
    {
      id: 'business-sites',
      title: 'Business Websites',
      icon: Building2,
      description:
        'Full-scale digital flagships engineered for local businesses, gyms, restaurants, and medical clinics that need to command industry authority.',
      benefit: 'Instantly builds trust and outclasses competitors in your local market.',
      deliverables: ['Multi-Page Architecture', 'Service Directories', 'Google Maps / Local SEO', 'Direct WhatsApp Routing'],
      colSpan: 'lg:col-span-5',
      featured: false,
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      icon: Target,
      description:
        'Laser-focused, single-page conversion funnels engineered for marketing campaigns, ad traffic, and direct product launches.',
      benefit: 'Maximizes return on ad spend with persuasive structure and clear CTAs.',
      deliverables: ['Hero Value Proposition', 'Objection Handling', 'Fast Mobile Checkout', 'Event Tracking'],
      colSpan: 'lg:col-span-7',
      featured: true,
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      icon: RefreshCw,
      description:
        'Transforming outdated, slow, or embarrassing websites into modern, sleek powerhouses while preserving existing SEO and brand equity.',
      benefit: 'Revitalizes brand perception and fixes leaking conversion funnels.',
      deliverables: ['Full Codebase Migration', 'Speed & Vital Optimization', 'Modern Visual Overhaul', 'SEO Migration Preservation'],
      colSpan: 'lg:col-span-6',
      featured: false,
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      icon: ShieldCheck,
      description:
        'Ongoing technical management, security monitoring, uptime tracking, and routine content updates so you never worry about your website.',
      benefit: 'Complete peace of mind knowing your digital storefront is always fast, secure, and live.',
      deliverables: ['24/7 Uptime Monitoring', 'Security & Dependency Patches', 'Content Updates', 'Monthly Performance Audits'],
      colSpan: 'lg:col-span-6',
      featured: false,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#0c0e0c] border-t border-white/[0.08] relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              04 • CORE CAPABILITIES
            </span>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Services Engineered For Growth.
            </h2>
          </div>

          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-md leading-relaxed">
            Every service is calibrated to solve tangible business challenges: looking professional, winning trust, and generating qualified customer leads.
          </p>
        </div>

        {/* Varied Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className={`${svc.colSpan} ${
                  svc.featured
                    ? 'bg-[#141813] border-[#6b7d50]/35 shadow-lg'
                    : 'bg-[#101310] border-white/[0.08]'
                } border rounded-md p-7 sm:p-9 hover:border-[#6b7d50] transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-sm flex items-center justify-center transition-colors ${
                        svc.featured
                          ? 'bg-[#6b7d50] text-[#090a09]'
                          : 'bg-[#181d18] text-[#6b7d50] group-hover:bg-[#6b7d50] group-hover:text-[#090a09]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189]">
                      WEBZA DISCIPLINE
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#f5f4ee] mb-3 group-hover:text-[#6b7d50] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="font-body text-sm text-[#8e9189] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Business Benefit Callout */}
                  <div className="p-3.5 bg-black/40 border border-white/[0.06] rounded-sm mb-6">
                    <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-wider block mb-1">
                      BUSINESS IMPACT
                    </span>
                    <p className="text-xs font-body text-white font-medium">
                      {svc.benefit}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Deliverables List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-white/[0.08] mb-6">
                    {svc.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-mono text-[#8e9189]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#6b7d50] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <button
                    type="button"
                    onClick={() => onOpenProjectBrief?.(svc.title)}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6b7d50] hover:text-[#829762] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Inquire for {svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
