'use client';

import React from 'react';

interface FounderNoteProps {
  onOpenDraftModal?: () => void;
}

export function FounderNote({ onOpenDraftModal }: FounderNoteProps) {
  const teamMembers = [
    {
      name: 'Ritesh Singh',
      role: 'Founder & Developer',
      initials: 'RS',
      bio: 'Leads web engineering, full-stack architecture, and platform development at WEBZA.',
    },
    {
      name: 'Priyanshu Patel',
      role: 'Co-Founder & Calling',
      initials: 'PP',
      bio: 'Directs client communications, onboarding calls, and customer coordination.',
    },
    {
      name: 'Jatin Sahu',
      role: 'Developer',
      initials: 'JS',
      bio: 'Builds clean frontend components, responsive layouts, and modern user interfaces.',
    },
    {
      name: 'Ayush Verma',
      role: 'Research & Sales',
      initials: 'AV',
      bio: 'Conducts market research, digital presence analysis, and client outreach.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F1] text-[#221D15]" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#221D15]/10 shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0FA88F]" />
            <span className="font-label text-xs font-semibold tracking-wider text-[#221D15] uppercase">
              The WEBZA Team
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#221D15] tracking-tight">
            Built by builders.{' '}
            <span className="italic font-normal text-[#6B7D50]">Direct and focused.</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#221D15]/75 mt-4 leading-relaxed">
            WEBZA is a web development and creative studio focused on building modern, professional websites for businesses. Founded by Ritesh Singh, our team works directly with clients to deliver high-quality digital experiences.
          </p>
        </div>

        {/* 4-Member Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-[#221D15]/10 rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#151913] text-[#FAF7F1] border border-[#6B7D50]/30 flex items-center justify-center mx-auto mb-5 font-heading font-bold text-xl tracking-wider shadow-sm">
                  {member.initials}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#221D15] mb-1">
                  {member.name}
                </h3>
                <div className="font-label text-xs font-bold uppercase tracking-wider text-[#6B7D50] mb-3">
                  {member.role}
                </div>
                <p className="font-body text-xs sm:text-sm text-[#221D15]/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Principles / Commitment Bar */}
        <div className="mt-14 max-w-4xl mx-auto bg-white border border-[#221D15]/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-heading font-bold text-base sm:text-lg text-[#221D15]">
              Work directly with our engineering team
            </div>
            <p className="font-body text-xs sm:text-sm text-[#221D15]/70">
              No middle management. Clean Next.js code, complete asset ownership, and honest pricing.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenDraftModal}
            className="flex-shrink-0 bg-[#6B7D50] hover:bg-[#5A6B42] text-white font-label font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-colors"
          >
            Request a Free Draft →
          </button>
        </div>
      </div>
    </section>
  );
}
