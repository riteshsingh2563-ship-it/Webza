import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  return (
    <section
      id="work"
      className="py-28 md:py-36 bg-[#0c0e0c] border-t border-white/[0.08] relative"
      aria-labelledby="work-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-20">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              03 • SELECTED WORK
            </span>
            <h2
              id="work-heading"
              className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee]"
            >
              PROVED IN PRODUCTION
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8e9189] hover:text-[#f5f4ee] transition-colors"
          >
            <span>Browse Complete Index ({PROJECTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#6b7d50]" />
          </Link>
        </div>

        {/* Editorial Project Showcase */}
        <div className="space-y-28">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block relative aspect-[16/10] rounded-sm overflow-hidden bg-[#141713] border border-white/10 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#6b7d50]"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-sm bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-[#6b7d50]" />
                    </div>
                  </Link>
                </div>

                {/* Narrative & Details */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] bg-[#6b7d50]/15 px-2.5 py-1 rounded-sm border border-[#6b7d50]/30">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#8e9189]">
                      {project.client} • {project.year}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#f5f4ee] mb-4">
                    <Link
                      href={`/work/${project.slug}`}
                      className="hover:text-[#6b7d50] transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="font-serif italic text-base text-[#8e9189] mb-6">
                    &ldquo;{project.tagline}&rdquo;
                  </p>

                  <p className="font-body text-sm text-[#8e9189] leading-relaxed mb-8">
                    {project.overview}
                  </p>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3 p-4 bg-[#141713] border border-white/[0.08] mb-8">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="text-center">
                        <strong className="font-display text-lg sm:text-xl font-bold text-white block">
                          {res.value}
                        </strong>
                        <span className="text-[10px] font-mono text-[#8e9189] uppercase tracking-tight">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies & Link */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-neutral-300 bg-white/[0.03] border border-white/10 px-2.5 py-0.5 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6b7d50] hover:text-[#7d9161] font-bold uppercase"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
