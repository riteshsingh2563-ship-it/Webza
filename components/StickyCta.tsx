'use client';

import React from 'react';

interface StickyCtaProps {
  onOpenDraftModal: () => void;
}

export function StickyCta({ onOpenDraftModal }: StickyCtaProps) {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-4 left-4 right-4 z-40 sm:left-auto sm:right-6 sm:bottom-6 max-w-sm ml-auto">
      <div className="bg-[#151913]/95 backdrop-blur-md border border-white/15 rounded-full p-2 pl-4 pr-2 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2BD4BD] animate-pulse" />
          <span className="font-label text-xs font-semibold text-white truncate">
            Free Draft in 24h
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenDraftModal}
          className="bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-bold text-xs px-4 py-2.5 rounded-full shadow-md transition-all active:scale-95 whitespace-nowrap"
        >
          Start with WEBZA →
        </button>
      </div>
    </aside>
  );
}
