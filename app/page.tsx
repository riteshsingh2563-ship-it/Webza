'use client';

import React, { useState, useEffect } from 'react';
import { StoreboxSvgSymbols } from '@/components/StoreboxSvgSymbols';
import { NavbarStorebox } from '@/components/NavbarStorebox';
import { StoreboxRawSections } from '@/components/StoreboxRawSections';
import { FooterStorebox } from '@/components/FooterStorebox';
import { FreeDraftModal } from '@/components/FreeDraftModal';
import { StoreboxScriptLoader } from '@/components/StoreboxScriptLoader';

export default function Home() {
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Development Gold (₹12,599)');

  const openDraftModal = (tier?: string) => {
    if (tier && typeof tier === 'string') setSelectedTier(tier);
    setIsDraftModalOpen(true);
  };

  const closeDraftModal = () => {
    setIsDraftModalOpen(false);
  };

  // Intercept external page links pointing to #leadArea or draft to open the modal
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // NEVER intercept clicks originating inside a modal or form!
      if (
        target.closest('#freeDraftModal') ||
        target.closest('[data-modal]') ||
        target.closest('form')
      ) {
        return;
      }

      const anchor = (target.closest('a') || target.closest('button')) as HTMLElement | null;
      if (!anchor) return;

      // Never intercept submit buttons
      if (anchor.getAttribute('type') === 'submit') return;

      const href = anchor.getAttribute('href');
      const text = (anchor.textContent || '').trim().toLowerCase();
      const isDraftTarget =
        href === '#leadArea' ||
        href === '#contact' ||
        href === '#draft' ||
        href === '#demo' ||
        anchor.classList.contains('fb4-btn') ||
        Boolean(anchor.closest('#stickyCta')) ||
        anchor.hasAttribute('data-draft-modal') ||
        text === 'free draft' ||
        text === 'request a free draft' ||
        text === 'request a free draft →' ||
        text === 'free demo' ||
        text === 'request a free demo' ||
        text === 'request a free demo →' ||
        text === 'get my free demo in 24h →' ||
        text === 'get my free draft in 24h →';

      if (isDraftTarget && (!href || href.startsWith('#'))) {
        e.preventDefault();
        e.stopPropagation();
        const tier = anchor.getAttribute('data-tier') || 'Development Gold (₹12,599)';
        openDraftModal(tier);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="relative min-h-screen text-[#FAF7F1] selection:bg-[#6B7D50] selection:text-[#FAF7F1]">
      {/* 00: Raw SVG Definitions from Storebox */}
      <StoreboxSvgSymbols />

      {/* 01: Ambient Film Grain Overlay */}
      <div className="grain" aria-hidden="true" />

      {/* 02: Sticky Header Navigation */}
      <NavbarStorebox onOpenDraftModal={openDraftModal} />

      {/* 03: The 1:1 Exact Storebox Raw Page Sections */}
      <main id="main-content" role="main">
        <StoreboxRawSections />
      </main>

      {/* 04: Editorial Footer */}
      <FooterStorebox onOpenDraftModal={openDraftModal} />

      {/* 05: High-Converting Free Draft Modal */}
      <FreeDraftModal
        isOpen={isDraftModalOpen}
        onClose={closeDraftModal}
        initialTier={selectedTier}
      />

      {/* 06: GSAP + ScrollTrigger + Lenis Engine Loader */}
      <StoreboxScriptLoader />
    </div>
  );
}
