'use client';

import React from 'react';
import { Logo } from '@/components/Logo';

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090a09] text-[#f5f4ee]"
      role="status"
      aria-live="polite"
      aria-label="Loading digital experience"
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Brand Emblem */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-[#6b7d50]/20 rounded-full blur-xl animate-pulse" />
          <Logo size="lg" showWordmark={false} />
        </div>

        {/* Minimal Typographic Telemetry */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6b7d50] animate-ping" />
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#8e9189]">
            INITIALIZING SYSTEM // WEBZA
          </span>
        </div>
      </div>
    </div>
  );
}
