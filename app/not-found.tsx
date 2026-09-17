import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { ArrowLeft, Compass, FolderKanban } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090a09] text-[#f5f4ee] flex items-center justify-center p-6 selection:bg-[#6b7d50] selection:text-[#090a09]">
      <div className="max-w-lg w-full p-8 sm:p-10 rounded-2xl bg-[#141713] border border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/50 to-transparent" />

        <div className="inline-flex justify-center mb-6">
          <Logo size="md" showWordmark={true} />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
          <Compass className="w-3.5 h-3.5 text-[#6b7d50]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#8e9189]">
            Error 404 // Spatial Anomaly
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white mb-3">
          TERRITORY UNCHARTED
        </h1>

        <p className="font-body text-xs sm:text-sm text-[#8e9189] leading-relaxed mb-8 max-w-sm mx-auto">
          The requested digital coordinates do not exist, or have been permanently relocated to another quadrant.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Studio</span>
          </Link>

          <Link
            href="/work"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center justify-center gap-2 transition-colors"
          >
            <FolderKanban className="w-3.5 h-3.5 text-[#6b7d50]" />
            <span>Explore Works</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
