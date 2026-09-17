import React from 'react';
import Image from 'next/image';

export const BrandStatement: React.FC = () => {
  return (
    <section
      className="py-28 md:py-36 bg-[#0c0e0c] border-y border-white/[0.08] relative overflow-hidden"
      aria-label="Brand Manifesto"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Metadata Column (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
              01 • MANIFESTO
            </span>
            <p className="font-mono text-xs text-[#8e9189] leading-relaxed max-w-xs">
              On the necessity of distinction in modern digital technology.
            </p>
          </div>

          {/* Right Typography Hero (9 cols) */}
          <div className="lg:col-span-9">
            <h2 className="font-display text-3xl sm:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-[#f5f4ee] leading-[1.08] mb-12">
              MOST WEBSITES EXIST SIMPLY TO FILL A VOID. <br />
              <span className="text-[#6b7d50]">WE ENGINEER THE ONES</span> THAT COMMAND IT.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#8e9189] font-body text-base sm:text-lg leading-relaxed pt-8 border-t border-white/[0.08]">
              <p>
                In an era where generic templates can be generated in seconds, true craftsmanship has become the ultimate differentiator. When everyone uses the same themes, distinction becomes impossible.
              </p>
              <p>
                WEBZA exists to restore reverence for the web. We pair uncompromising visual art direction with rock-solid full-stack software engineering to create digital flagships that are impossible to ignore.
              </p>
            </div>

            {/* Inscription Quote Bar */}
            <div className="mt-12 p-6 bg-[#141713] border-l-2 border-[#6b7d50] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-serif italic text-lg sm:text-xl text-white">
                &ldquo;If it isn’t built to be seen, it wasn’t worth building.&rdquo;
              </span>
              <span className="font-mono text-xs text-[#6b7d50] uppercase tracking-widest whitespace-nowrap">
                — WEBZA ETHOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
