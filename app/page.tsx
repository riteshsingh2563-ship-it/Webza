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
    if (tier) setSelectedTier(tier);
    setIsDraftModalOpen(true);
  };

  const closeDraftModal = () => {
    setIsDraftModalOpen(false);
  };

  // Intercept any link pointing to #leadArea or #contact to open the modal
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a') || target.closest('button');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href === '#leadArea' || href === '#contact' || anchor.classList.contains('fb4-btn') || anchor.closest('#stickyCta')) {
          e.preventDefault();
          openDraftModal('Development Gold (₹12,599)');
        }
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
      <NavbarStorebox onOpenDraftModal={() => openDraftModal()} />

      {/* 03: The 1:1 Exact Storebox Raw Page Sections */}
      <main id="main-content" role="main">
        <StoreboxRawSections />
      </main>

      {/* 04: Editorial Footer */}
      <FooterStorebox onOpenDraftModal={() => openDraftModal()} />

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
