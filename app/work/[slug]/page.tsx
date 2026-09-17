import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PROJECTS } from '@/lib/data';
import { ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import type { Metadata } from 'next';

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyProps): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found — WEBZA' };

  return {
    title: `${project.title} — WEBZA Case Study`,
    description: project.tagline,
  };
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28 px-6 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#8e9189] hover:text-[#6b7d50] uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back To Selected Work</span>
        </Link>

        {/* Header Title */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-[#6b7d50] uppercase tracking-wider bg-[#6b7d50]/15 px-3 py-1 rounded-sm border border-[#6b7d50]/30">
            {project.category}
          </span>
          <span className="text-xs font-mono text-[#8e9189]">
            {project.client} • {project.year}
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white mb-6 leading-tight">
          {project.title}
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl text-[#8e9189] mb-12">
          &ldquo;{project.tagline}&rdquo;
        </p>

        {/* Featured Visual Frame */}
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-[#141713] border border-white/10 shadow-2xl mb-16">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#111411] border border-white/10 mb-16">
          {project.results.map((result, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#6b7d50] block mb-1">
                {result.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8e9189]">
                {result.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/[0.08]">
          <div>
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#6b7d50]" />
              <span>The Architectural Problem</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#8e9189] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2.5">
              <Zap className="w-5 h-5 text-[#6b7d50]" />
              <span>The Engineering Solution</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#8e9189] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8e9189] mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-neutral-200 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8e9189] mb-4">
              Scope Deliverables
            </h3>
            <div className="space-y-2">
              {project.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#6b7d50]" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="p-8 sm:p-10 bg-[#111411] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189] block mb-1">
              Next Engagement Case Study
            </span>
            <strong className="font-display text-2xl font-bold uppercase text-white block">
              {nextProject.title}
            </strong>
            <span className="text-xs font-mono text-[#6b7d50]">
              {nextProject.category}
            </span>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#7d9161] text-[#090a09] px-6 py-3.5 rounded-sm transition-all"
          >
            <span>Inspect Next Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
