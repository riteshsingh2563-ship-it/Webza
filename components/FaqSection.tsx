'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a website take?',
      answer:
        'Most projects are completed within 5 to 14 business days depending on page count and custom features. We work with a structured 4-stage pipeline (Discover, Design, Build, Launch) to ensure rapid delivery without cutting corners on design fidelity or mobile responsiveness.',
    },
    {
      question: 'How do I start a project?',
      answer:
        'Getting started is simple. Click "Start Your Project" anywhere on the site to submit a brief, or connect with us directly on WhatsApp. We will discuss your goals, confirm the scope and package (Silver or Gold), and begin discovery within 24 hours.',
    },
    {
      question: 'Is the website responsive?',
      answer:
        'Yes, 100%. Every website we engineer is built mobile-first and tested rigorously across real smartphone viewports (320px, 375px, 390px, 430px), tablets (768px, 1024px), and desktop resolutions (1440px to 4K). You will never see horizontal scrollbars or cramped elements.',
    },
    {
      question: 'Can WEBZA redesign an existing website?',
      answer:
        'Absolutely. We frequently take outdated, slow, or low-converting websites and completely rebuild them. We audit what is working, preserve your existing domain and Google search indexing equity, and deploy a brand-new high-speed digital flagship on Next.js.',
    },
    {
      question: 'Can I request custom features?',
      answer:
        'Yes. Whether your business requires interactive menus, online appointment scheduling, dynamic collection catalogs, custom calculators, or direct WhatsApp lead capture, we engineer custom functionality tailored directly to your operational workflow.',
    },
    {
      question: 'Do you provide maintenance?',
      answer:
        'Yes. All projects include dedicated launch warranty support (14 days on Silver, 30 days on Gold). We also offer continuous maintenance retainers covering uptime monitoring, security updates, minor content adjustments, and ongoing speed optimization.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-[#090a09] border-t border-white/[0.08] relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center pb-10 border-b border-white/[0.08] mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#6b7d50] block mb-3">
            11 • FREQUENTLY ASKED QUESTIONS
          </span>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f5f4ee] mb-4"
          >
            Clear Answers. No Ambiguity.
          </h2>
          <p className="font-body text-sm sm:text-base text-[#8e9189] max-w-xl mx-auto leading-relaxed">
            Everything you need to know about partnering with WEBZA to build or redesign your business website.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#111511] border border-white/[0.08] rounded-md overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#6b7d50]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="font-display text-base sm:text-lg font-bold uppercase text-[#f5f4ee] tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#181d18] border border-white/10 flex items-center justify-center shrink-0 text-[#6b7d50] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#6b7d50] text-[#090a09]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm font-body text-[#8e9189] leading-relaxed border-t border-white/[0.04]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
