import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PROJECTS } from '@/lib/data';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work — WEBZA | Production Flagships & Case Studies',
  description: 'Inspect production case studies engineered by WEBZA across full-stack applications, spatial 3D experiences, and headless commerce.',
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-[#090a09] text-[#f5f4ee]">
      <Navbar />

      <main className="pt-36 pb-28 px-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="pb-16 border-b border-white/[0.08] mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            01 • PORTFOLIO ARCHIVE
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            SELECTED WORK
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8e9189] max-w-2xl leading-relaxed">
            Every project we deliver is an original, production-grade engagement designed to solve architectural bottlenecks, command industry authority, and drive verified business metrics.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <article
              key={project.slug}
              className="group rounded-sm bg-[#111411] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#6b7d50]/40 transition-all shadow-xl"
            >
              <div>
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-[#141713]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                </Link>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-[#6b7d50] uppercase tracking-wider bg-[#6b7d50]/15 px-2 py-0.5 rounded border border-[#6b7d50]/30">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#8e9189]">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2 group-hover:text-[#6b7d50] transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-6">
                    {project.overview}
                  </p>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-black/40 border border-white/10 mb-6">
                    {project.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <strong className="font-display text-base font-bold text-white block">
                          {r.value}
                        </strong>
                        <span className="text-[9px] font-mono text-[#8e9189] uppercase">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between border-t border-white/[0.08] mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-neutral-300 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6b7d50] uppercase font-bold"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Structured Minimal Footer */}
      <Footer />
    </div>
  );
}
