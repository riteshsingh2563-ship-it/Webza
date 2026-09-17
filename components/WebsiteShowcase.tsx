'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  CheckCircle,
  Eye,
  Layers,
} from 'lucide-react';

interface WebsiteShowcaseProps {
  onOpenProjectBrief?: (projectTitle?: string) => void;
}

export const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({
  onOpenProjectBrief,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const projects = [
    {
      id: 'rk-fitness',
      name: 'Verve Athletics Club',
      category: 'Gym & High-Performance Athletic Center',
      url: 'https://rkfitness.webza.agency',
      desktopImage: '/clients/rk-fitness.webp',
      description:
        'A high-octane digital platform featuring facility walk-throughs, workout division overviews, trainer credentials, and direct WhatsApp membership registration.',
      highlights: ['Facility Showcase', 'Class Schedule Engine', 'WhatsApp Inquiries', 'Mobile-First UX'],
      badge: 'VERIFIED CLIENT',
    },
    {
      id: 'sheesh-mahal',
      name: 'Royal Heritage Banquets & Dining',
      category: 'Luxury Hospitality & Royal Cuisine',
      url: 'https://sheeshmahal.webza.agency',
      desktopImage: '/clients/sheesh-mahal.png',
      description:
        'Regal banquet storytelling combined with interactive royal menus, dynamic event hall booking inquiries, and high-resolution photo galleries.',
      highlights: ['Interactive Menu System', 'Banquet Hall Reservations', 'Venue Lightbox', 'Catering Enquiry'],
      badge: 'VERIFIED CLIENT',
    },
    {
      id: 'roshan-jewel',
      name: 'Aurelia Fine Jewels',
      category: 'Heritage Gold & Diamond Jewellery',
      url: 'https://roshanjewellers.webza.agency',
      desktopImage: '/clients/roshan-jewel.jpg',
      description:
        'Editorial luxury jewellery showcase with digital ring sizing tools, collection carousels, and direct showroom visit consultation booking.',
      highlights: ['Bridal Collection Showcase', 'Digital Ring Sizer', 'Showroom Booking', 'WhatsApp Commerce'],
      badge: 'VERIFIED CLIENT',
    },
    {
      id: 'pushpanjali',
      name: 'Astraea Heritage Health',
      category: 'Multi-Specialty Clinical Healthcare',
      url: 'https://pushpanjali.webza.agency',
      desktopImage: '/clients/pushpanjali.png',
      description:
        'Clean, accessible medical institution portal facilitating patient trust, doctor specialization directories, and streamlined consultation booking.',
      highlights: ['Department Directory', 'Doctor Profiles', 'Appointment Scheduling', 'Patient Care Info'],
      badge: 'VERIFIED CLIENT',
    },
    {
      id: 'aura-music',
      name: 'Aura Spatial Audio',
      category: 'Modern Music Streaming Platform',
      url: 'https://aura.webza.agency',
      desktopImage: '/clients/aura-logo.png',
      description:
        'High-performance audio streaming client featuring reactive waveforms, album art showcases, and native Android/iOS integration bridges.',
      highlights: ['Spatial Audio Interface', 'Real-Time Waveforms', 'Mobile App Landing', 'Fast Playback Engine'],
      badge: 'VERIFIED CLIENT',
    },
  ];

  const activeProject = projects[activeProjectIdx];

  // Responsive frame sizing classes
  const frameWidthClass =
    deviceMode === 'desktop'
      ? 'w-full max-w-5xl'
      : deviceMode === 'tablet'
      ? 'w-full max-w-2xl'
      : 'w-full max-w-xs';

  const frameAspectClass =
    deviceMode === 'desktop'
      ? 'aspect-[16/10]'
      : deviceMode === 'tablet'
      ? 'aspect-[4/3]'
      : 'aspect-[9/16]';

  return (
    <section
      id="showcase"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.08] relative"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              03 • INTERACTIVE SHOWCASE
            </span>
            <h2
              id="showcase-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              Real Websites. Real Impact.
            </h2>
          </div>

          {/* Device Viewport Toggle (Desktop / Tablet / Mobile) */}
          <div className="flex items-center gap-1 bg-[#141713] p-1.5 rounded-sm border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono uppercase transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-[#6b7d50] text-[#090a09] font-bold shadow'
                  : 'text-[#8e9189] hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono uppercase transition-all ${
                deviceMode === 'tablet'
                  ? 'bg-[#6b7d50] text-[#090a09] font-bold shadow'
                  : 'text-[#8e9189] hover:text-white'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono uppercase transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-[#6b7d50] text-[#090a09] font-bold shadow'
                  : 'text-[#8e9189] hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => setActiveProjectIdx(idx)}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase whitespace-nowrap transition-all border ${
                activeProjectIdx === idx
                  ? 'bg-[#181d18] border-[#6b7d50] text-[#f5f4ee] font-bold shadow-md'
                  : 'bg-white/[0.02] border-white/[0.08] text-[#8e9189] hover:text-white hover:border-white/20'
              }`}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Interactive Responsive Mockup Frame */}
        <div className="flex justify-center mb-12 transition-all duration-500">
          <div
            className={`transition-all duration-500 ${frameWidthClass} rounded-lg overflow-hidden border border-white/15 bg-[#121612] shadow-2xl`}
          >
            {/* Browser / Device Chrome */}
            <div className="bg-[#181d18] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e85e5e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e8b95e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#5ee882]" />
              </div>

              {/* URL Display */}
              <div className="flex-1 max-w-sm mx-auto bg-[#090a09] text-[11px] font-mono text-[#8e9189] px-3 py-1 rounded-sm border border-white/10 flex items-center justify-between">
                <span className="truncate">{activeProject.url}</span>
                <span className="text-[9px] font-mono text-[#6b7d50] ml-2 shrink-0">
                  {deviceMode.toUpperCase()} VIEW
                </span>
              </div>

              <div className="text-[10px] font-mono text-[#6b7d50] bg-[#6b7d50]/15 px-2 py-0.5 rounded">
                SECURE
              </div>
            </div>

            {/* Live Visual Content */}
            <div
              className={`relative ${frameAspectClass} bg-[#0a0d0a] overflow-hidden group`}
            >
              <Image
                key={`${activeProject.id}-${deviceMode}`}
                src={activeProject.desktopImage}
                alt={activeProject.name}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a09] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Bottom Inscription Inside Mockup */}
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] block mb-1">
                    {activeProject.category}
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold uppercase text-white">
                    {activeProject.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase bg-[#6b7d50] text-[#090a09] font-bold px-2.5 py-1 rounded-sm">
                    {activeProject.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Card */}
        <div className="bg-[#111511] border border-white/[0.08] p-6 sm:p-8 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#6b7d50] uppercase tracking-widest">
                PROJECT OVERVIEW
              </span>
              <span className="text-xs font-mono text-[#8e9189]">
                • {activeProject.category}
              </span>
            </div>
            <p className="font-body text-sm sm:text-base text-[#8e9189] leading-relaxed">
              {activeProject.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-sm flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3 h-3 text-[#6b7d50]" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenProjectBrief?.(activeProject.name)}
            className="inline-flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09] px-6 py-3.5 rounded-sm transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Request Similar Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
