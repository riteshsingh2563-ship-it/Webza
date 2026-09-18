'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { RefreshCw, ArrowLeft } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception safely to diagnostics
    console.error('[WEBZA Studio Runtime Error]:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#090a09] text-[#f5f4ee] flex items-center justify-center p-6 selection:bg-[#6b7d50] selection:text-[#090a09]">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#141713] border border-white/10 text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/50 to-transparent" />

        <div className="inline-flex justify-center mb-6">
          <Logo size="md" showWordmark={true} />
        </div>

        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] block mb-2">
          Diagnostic Event // Code 500
        </span>

        <h1 className="font-display text-2xl font-bold uppercase text-white mb-3">
          EXPERIENCE INTERRUPTION
        </h1>

        <p className="font-body text-xs text-[#8e9189] leading-relaxed mb-6">
          An unexpected runtime condition interrupted this view. Our systems have caught the exception and isolated the state.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              } else {
                reset();
              }
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] font-display text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reinitialize View</span>
          </button>

          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              }
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Studio Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
