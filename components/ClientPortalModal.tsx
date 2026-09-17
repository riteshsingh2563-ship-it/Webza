'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Clock, Lock, ArrowRight, UserCheck, Sparkles } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectBrief: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenProjectBrief,
}) => {
  const [accessCode, setAccessCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [demoLoggedIn, setDemoLoggedIn] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim() === 'DEMO' || accessCode.trim().length > 3) {
      setDemoLoggedIn(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid client token. Use "DEMO" to inspect the live client view.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#111411] border border-white/20 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Specular Edge */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/50 to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close portal"
        >
          <X className="w-5 h-5" />
        </button>

        {demoLoggedIn ? (
          /* Live Client Hub Simulation */
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6b7d50]/20 border border-[#6b7d50]/40 flex items-center justify-center text-[#6b7d50]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="portal-title" className="font-display text-lg font-bold uppercase text-white">
                    WEBZA OS • CLIENT HUB
                  </h3>
                  <span className="text-xs font-mono text-[#8e9189]">
                    Project: Krypton Capital Platform v2
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-mono text-[#6b7d50] bg-[#6b7d50]/15 px-2.5 py-1 rounded border border-[#6b7d50]/30">
                ACTIVE SPRINT 04
              </span>
            </div>

            {/* Velocity Progress */}
            <div className="p-5 rounded-xl bg-black/50 border border-white/10 mb-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-white font-semibold">Sprint 04 Velocity: 84% Complete</span>
                <span className="text-[#6b7d50]">Estimated Delivery: 4 Days</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-[#6b7d50] rounded-full w-[84%] transition-all duration-1000" />
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8e9189] block">
                Sprint Deliverables Status
              </span>

              {[
                { title: 'Figma Design System & Token Sync', status: 'Approved', done: true },
                { title: 'Next.js 14 App Router Scaffold & Edge API', status: 'Merged', done: true },
                { title: 'WebSockets Real-Time Orderbook Engine', status: 'In Review', done: false, active: true },
                { title: 'Security Audit & Core Web Vitals 100 Hardening', status: 'Queued', done: false },
              ].map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#161a15] border border-white/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-200">
                    {deliv.done ? (
                      <CheckCircle2 className="w-4 h-4 text-[#6b7d50]" />
                    ) : deliv.active ? (
                      <Clock className="w-4 h-4 text-amber-400 animate-spin" />
                    ) : (
                      <Lock className="w-4 h-4 text-neutral-500" />
                    )}
                    <span>{deliv.title}</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      deliv.done
                        ? 'bg-[#6b7d50]/15 text-[#6b7d50]'
                        : deliv.active
                        ? 'bg-amber-400/15 text-amber-300'
                        : 'bg-white/5 text-neutral-500'
                    }`}
                  >
                    {deliv.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Studio Lead Contact */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-display font-bold uppercase text-white block">
                    Ritesh Singh
                  </span>
                  <span className="text-[10px] font-mono text-[#8e9189]">
                    Founder & Developer
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#6b7d50]">hello@webza.agency</span>
            </div>

            <button
              type="button"
              onClick={() => setDemoLoggedIn(false)}
              className="w-full py-3 rounded-lg border border-white/15 text-xs font-mono text-[#8e9189] hover:text-white"
            >
              Exit Demo View
            </button>
          </div>
        ) : (
          /* Login Form */
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6b7d50]/20 border border-[#6b7d50]/40 flex items-center justify-center text-[#6b7d50]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 id="portal-title" className="font-display text-xl font-bold uppercase text-white">
                  WEBZA OS CLIENT ACCESS
                </h3>
                <span className="text-xs font-mono text-[#8e9189]">
                  Live Sprint Telemetry & Asset Deliveries
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#8e9189] mb-6 leading-relaxed">
              Existing partners can enter their project token to review real-time sprint burndown, stage deliverables, and milestone approvals.
            </p>

            <form onSubmit={handleLogin} className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Client Project Token / Access Key
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Enter project key (or type 'DEMO')"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors"
                  />
                  <span className="absolute right-3 top-3 text-[10px] font-mono text-[#6b7d50] bg-[#6b7d50]/15 px-2 py-0.5 rounded border border-[#6b7d50]/30">
                    TEST: &quot;DEMO&quot;
                  </span>
                </div>
                {errorMsg && (
                  <span className="text-xs text-rose-400 mt-1 block font-mono">
                    {errorMsg}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] py-3.5 rounded-lg transition-all cursor-pointer shadow-lg"
              >
                <span>Access Partner Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center">
              <span className="text-xs text-[#8e9189] block mb-2">
                Not a current client?
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenProjectBrief();
                }}
                className="font-display text-xs font-bold uppercase tracking-wider text-white hover:text-[#6b7d50] transition-colors cursor-pointer"
              >
                Initiate a New Partnership →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
