'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, ShieldCheck, Tag } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject?: (project: any) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 'rk-fitness',
      name: 'Verve Athletics Club',
      category: 'Gyms & Health Clubs',
      type: 'gym',
      image: '/clients/rk-fitness.webp',
      description:
        'A high-performance digital presence designed for a premier fitness facility, featuring equipment walk-throughs, workout divisions, and direct WhatsApp membership registrations.',
      isDemo: false,
      tag: 'VERIFIED CLIENT',
      highlights: ['Facility Showcase', 'Class Timetables', 'WhatsApp Join Flow'],
    },
    {
      id: 'sheesh-mahal',
      name: 'Royal Heritage Banquets',
      category: 'Restaurants & Banquets',
      type: 'hospitality',
      image: '/clients/sheesh-mahal.png',
      description:
        'A regal digital experience for an upscale banquet and fine dining destination, featuring interactive signature menus, venue photo lightboxes, and banquet booking inquiries.',
      isDemo: false,
      tag: 'VERIFIED CLIENT',
      highlights: ['Interactive Digital Menu', 'Banquet Hall Reservations', 'Venue Storytelling'],
    },
    {
      id: 'roshan-jewel',
      name: 'Aurelia Fine Jewels',
      category: 'Local Businesses & Luxury Retail',
      type: 'retail',
      image: '/clients/roshan-jewel.jpg',
      description:
        'An elegant digital catalog for a heritage jewellery showroom, featuring bridal collection highlights, an interactive ring sizing tool, and showroom visit scheduling.',
      isDemo: false,
      tag: 'VERIFIED CLIENT',
      highlights: ['Collection Catalog', 'Interactive Ring Sizer', 'Showroom Booking'],
    },
    {
      id: 'pushpanjali',
      name: 'Astraea Heritage Health',
      category: 'Clinics & Healthcare',
      type: 'healthcare',
      image: '/clients/pushpanjali.png',
      description:
        'A dignified, patient-centric web portal for a multi-specialty healthcare facility, offering doctor credentials, department directories, and appointment request workflows.',
      isDemo: false,
      tag: 'VERIFIED CLIENT',
      highlights: ['Specialist Directory', 'Appointment Booking', 'Patient Care Guides'],
    },
    {
      id: 'aura-music',
      name: 'Aura Spatial Audio',
      category: 'Startups & Digital Products',
      type: 'startup',
      image: '/clients/aura-logo.png',
      description:
        'A responsive web platform and mobile app landing for an advanced spatial music player, featuring real-time audio waveforms, playback controls, and native app links.',
      isDemo: false,
      tag: 'VERIFIED CLIENT',
      highlights: ['Real-Time Audio Player', 'Waveform Visualizer', 'Mobile App Bridge'],
    },
    {
      id: 'webza-flagship',
      name: 'WEBZA Studio Flagship',
      category: 'Agency & Creative Technology',
      type: 'agency',
      image: '/brand/webza-brand-poster.jpg',
      description:
        'The official agency web flagship for WEBZA, engineered with Next.js 14, semantic design tokens, interactive showcase modules, and sub-second edge performance.',
      isDemo: false,
      tag: 'OFFICIAL STUDIO FLAGSHIP',
      highlights: ['Design Token Architecture', 'Interactive Device Switcher', 'Next.js 14 Edge'],
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.08] relative"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              09 • SELECTED PORTFOLIO
            </span>
            <h2
              id="portfolio-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Projects Built To Be Seen.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Gyms', value: 'gym' },
              { label: 'Dining', value: 'hospitality' },
              { label: 'Retail', value: 'retail' },
              { label: 'Healthcare', value: 'healthcare' },
              { label: 'Tech & Startup', value: 'startup' },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono uppercase transition-all ${
                  filter === tab.value
                    ? 'bg-[#6b7d50] text-[#090a09] font-bold shadow'
                    : 'bg-white/[0.03] border border-white/[0.08] text-[#8e9189] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#111511] border border-white/[0.08] rounded-md overflow-hidden hover:border-[#6b7d50] transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] bg-[#0c0f0c] overflow-hidden border-b border-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={`${project.name} - ${project.category}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    {project.isDemo ? (
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded">
                        DEMO CONCEPT
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-[#6b7d50] text-[#090a09] font-bold px-2.5 py-1 rounded shadow">
                        {project.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="p-6">
                  <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>

                  <h3 className="font-display text-xl font-bold uppercase text-[#f5f4ee] mb-3 group-hover:text-[#6b7d50] transition-colors">
                    {project.name}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-neutral-300 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Project Action */}
              <div className="p-6 pt-0 border-t border-white/[0.05] mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectProject?.(project)}
                  className="w-full inline-flex items-center justify-between text-xs font-display font-bold uppercase tracking-[0.14em] bg-white/[0.04] hover:bg-[#6b7d50] hover:text-[#090a09] text-[#f5f4ee] px-4 py-3 rounded-sm transition-all cursor-pointer border border-white/10 hover:border-[#6b7d50]"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
