'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Check, Download, Send, Sparkles, Layers, Clock, Shield } from 'lucide-react';

interface ScopeEstimatorProps {
  onOpenProjectBriefWithScope?: (scopeSummary: any) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({
  onOpenProjectBriefWithScope,
}) => {
  const [archetype, setArchetype] = useState<'flagship' | 'app' | 'ecommerce' | 'system'>('flagship');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'cms',
    'motion',
  ]);
  const [velocity, setVelocity] = useState<'expedited' | 'standard' | 'enterprise'>('standard');
  const [submittedBrief, setSubmittedBrief] = useState(false);
  const [clientEmail, setClientEmail] = useState('');

  const archetypes = {
    flagship: {
      name: 'Flagship Web Platform',
      basePrice: 15000,
      baseWeeks: 5,
      desc: 'High-impact editorial storytelling, custom typography, micro-animations, and edge deployment.',
    },
    app: {
      name: 'Full-Stack Web Application',
      basePrice: 24000,
      baseWeeks: 8,
      desc: 'Authenticated portal, cloud database, complex application state, and real-time synchronization.',
    },
    ecommerce: {
      name: 'Luxury Headless Commerce',
      basePrice: 20000,
      baseWeeks: 7,
      desc: 'Decoupled storefront, high-conversion checkout engine, inventory sync, and global payments.',
    },
    system: {
      name: 'Brand & Design System',
      basePrice: 12000,
      baseWeeks: 4,
      desc: 'Systematic token architecture, Figma component governance, and code-aligned UI libraries.',
    },
  };

  const addonsList = [
    { id: 'cms', label: 'Headless CMS Architecture', price: 3500, weeks: 1 },
    { id: 'motion', label: 'Custom 3D / WebGL Shaders', price: 4500, weeks: 1.5 },
    { id: 'payments', label: 'Stripe & Global Currency Checkout', price: 4000, weeks: 1 },
    { id: 'auth', label: 'Enterprise Auth & RBAC Portal', price: 5500, weeks: 1.5 },
    { id: 'localization', label: 'Multilingual Regional Deployment', price: 2500, weeks: 0.5 },
    { id: 'ai', label: 'Autonomous AI Agent Workflows', price: 6000, weeks: 2 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const calculation = useMemo(() => {
    const base = archetypes[archetype];
    let addonsTotal = 0;
    let addonsWeeks = 0;

    selectedAddons.forEach((id) => {
      const match = addonsList.find((a) => a.id === id);
      if (match) {
        addonsTotal += match.price;
        addonsWeeks += match.weeks;
      }
    });

    let multiplier = 1.0;
    let timelineWeeks = base.baseWeeks + addonsWeeks;

    if (velocity === 'expedited') {
      multiplier = 1.25;
      timelineWeeks = Math.max(3, Math.round(timelineWeeks * 0.65));
    } else if (velocity === 'enterprise') {
      timelineWeeks = Math.round(timelineWeeks * 1.3);
    }

    const totalEstimate = Math.round((base.basePrice + addonsTotal) * multiplier);
    const lowRange = Math.round(totalEstimate * 0.95);
    const highRange = Math.round(totalEstimate * 1.15);

    return {
      totalEstimate,
      lowRange,
      highRange,
      timelineWeeks: Math.round(timelineWeeks),
    };
  }, [archetype, selectedAddons, velocity]);

  const handleDownloadScope = () => {
    const scopeData = {
      project_archetype: archetypes[archetype].name,
      estimated_investment: `$${calculation.lowRange.toLocaleString()} - $${calculation.highRange.toLocaleString()} USD`,
      estimated_duration: `${calculation.timelineWeeks} Weeks`,
      selected_capabilities: selectedAddons.map(
        (id) => addonsList.find((a) => a.id === id)?.label
      ),
      delivery_velocity: velocity.toUpperCase(),
      studio: 'WEBZA — BUILT TO BE SEEN',
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(scopeData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `webza-scope-estimate-${archetype}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmitScope = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedBrief(true);
  };

  return (
    <section
      id="estimator"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.06] relative"
      aria-labelledby="estimator-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-8 h-px bg-[#6b7d50]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8e9189]">
              Transparent Scope Engineering
            </span>
          </div>
          <h2
            id="estimator-title"
            className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4"
          >
            INTERACTIVE SCOPE & BUDGET CALCULATOR
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8e9189]">
            Configure your technical requirements to generate an immediate estimated scope, architecture baseline, and timeline projection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Archetype */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#8e9189] block mb-3">
                01 • Select Project Archetype
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(archetypes) as (keyof typeof archetypes)[]).map((key) => {
                  const item = archetypes[key];
                  const isSelected = archetype === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setArchetype(key)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#181d16] border-[#6b7d50] shadow-lg shadow-[#6b7d50]/10'
                          : 'bg-[#141713]/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <strong className="font-display text-sm font-bold uppercase text-white block">
                          {item.name}
                        </strong>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-[#6b7d50] flex items-center justify-center text-[#090a09]">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="font-body text-xs text-[#8e9189] leading-snug">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Architecture & Capabilities */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#8e9189] block mb-3">
                02 • Technical Capabilities & Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#181d16] border-[#6b7d50]/60'
                          : 'bg-[#141713]/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#6b7d50] border-[#6b7d50] text-[#090a09]'
                              : 'border-white/20 bg-black/40'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-mono text-neutral-200">
                          {addon.label}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#6b7d50]">
                        +${addon.price.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Velocity */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#8e9189] block mb-3">
                03 • Target Delivery Velocity
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'expedited', label: 'Sprint Expedited', sub: '3-4 Weeks (+25%)' },
                  { id: 'standard', label: 'Standard Strategic', sub: '6-8 Weeks' },
                  { id: 'enterprise', label: 'Phased Enterprise', sub: '10-12 Weeks' },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVelocity(v.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      velocity === v.id
                        ? 'bg-[#181d16] border-[#6b7d50] shadow-md'
                        : 'bg-[#141713]/60 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <strong className="text-xs font-display font-bold uppercase text-white block">
                      {v.label}
                    </strong>
                    <span className="text-[10px] font-mono text-[#8e9189]">
                      {v.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Estimate Output Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-2xl bg-[#141713] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6b7d50]/50 to-transparent" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6b7d50] bg-[#6b7d50]/15 px-2.5 py-1 rounded border border-[#6b7d50]/30">
                  ESTIMATE SUMMARY
                </span>
                <span className="text-xs font-mono text-[#8e9189]">
                  USD CURRENCY
                </span>
              </div>

              {/* Price Range Display */}
              <div className="mb-6">
                <span className="text-xs font-mono text-[#8e9189] uppercase tracking-wider block mb-1">
                  Projected Investment Range
                </span>
                <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  ${calculation.lowRange.toLocaleString()}{' '}
                  <span className="text-xl sm:text-2xl text-[#8e9189] font-normal">–</span>{' '}
                  ${calculation.highRange.toLocaleString()}
                </div>
              </div>

              {/* Timeline & Delivery */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/50 border border-white/10 mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#8e9189] uppercase tracking-wider block">
                    Estimated Duration
                  </span>
                  <strong className="font-display text-lg text-white font-bold">
                    ~{calculation.timelineWeeks} Weeks
                  </strong>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8e9189] uppercase tracking-wider block">
                    Deployment Readiness
                  </span>
                  <strong className="font-display text-lg text-[#6b7d50] font-bold">
                    Production Grade
                  </strong>
                </div>
              </div>

              {/* Summary Items */}
              <div className="space-y-2 text-xs font-mono text-[#8e9189] mb-8 pb-6 border-b border-white/10">
                <div className="flex justify-between">
                  <span>Archetype:</span>
                  <span className="text-white font-semibold">{archetypes[archetype].name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Addons:</span>
                  <span className="text-white">{selectedAddons.length} Capabilities</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Velocity:</span>
                  <span className="text-[#6b7d50] uppercase font-bold">{velocity}</span>
                </div>
              </div>

              {/* Form / Actions */}
              {submittedBrief ? (
                <div className="p-4 rounded-xl bg-[#6b7d50]/15 border border-[#6b7d50]/30 text-center py-6">
                  <Sparkles className="w-6 h-6 text-[#6b7d50] mx-auto mb-2" />
                  <h4 className="font-display text-base font-bold uppercase text-white mb-1">
                    Estimate Transmitted
                  </h4>
                  <p className="font-body text-xs text-[#8e9189] mb-4">
                    Our Creative Director will review your configured specification and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedBrief(false)}
                    className="text-xs font-mono text-[#6b7d50] hover:underline"
                  >
                    Recalculate Estimate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitScope} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="Enter work email for formal brief..."
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-[#6b7d50] transition-colors"
                  />

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-wider bg-[#6b7d50] hover:bg-[#829762] text-[#090a09] py-3.5 rounded-lg transition-all cursor-pointer shadow-lg"
                    >
                      <span>Lock Scope In</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleDownloadScope}
                      title="Download JSON Scope Brief"
                      className="p-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-neutral-200 transition-colors cursor-pointer"
                      aria-label="Download JSON specification"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
