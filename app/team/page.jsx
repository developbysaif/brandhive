'use client';

import React from 'react';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/data/siteData';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import { ArrowRight, ArrowUpRight, Sparkles, Heart, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const principles = [
    {
      icon: <Zap className="w-4 h-4 text-[#F6C53C]" />,
      title: "Speed with Precision",
      description: "We work in rapid, high-velocity sprints. Every concept is tested, refined, and validated without unnecessary agency bloat."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#F6C53C]" />,
      title: "Radical Transparency",
      description: "No middlemen or account executives. You collaborate directly with senior designers and engineers who execute your vision."
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#F6C53C]" />,
      title: "Obsession with Craft",
      description: "From sub-pixel layout alignments to 60fps micro-animations, we sweat the subtle details that turn good products into great brands."
    }
  ];

  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F6C53C]"></span>
            <span>Our Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12] mb-4">
            The creative minds. <br />
            <span className="text-[#64748b] font-medium">Behind the momentum.</span>
          </h1>

          <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6">
            We are a collective of product designers, brand strategists, and technical architects united by a shared obsession with craft.
          </p>

          {/* Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-zinc-600">
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 shadow-sm font-medium">
              100% In-House Team
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 shadow-sm font-medium">
              12+ Core Specialists
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-zinc-200/80 shadow-sm font-medium">
              Global Remote Studio
            </span>
          </div>
        </motion.div>

        {/* Team Members Grid with Scroll-Up Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-6 sm:p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.03)] mb-16 sm:mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-[24px] bg-[#fafafa] border border-zinc-200/80 p-6 flex flex-col justify-between hover:border-[#F6C53C]/80 hover:bg-white hover:shadow-[0_8px_30px_rgba(246,197,60,0.1)] transition-all group"
              >
                <div>
                  {/* Avatar & Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#F6C53C] border-2 border-white shadow-sm" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-zinc-900 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-zinc-600 font-semibold mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed mb-5">
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Discipline Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-white border border-zinc-200 text-[10px] font-medium text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-zinc-200/60 text-xs text-zinc-500">
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F6C53C] transition-colors"
                    >
                      X (Twitter)
                    </a>
                    <span>•</span>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F6C53C] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span>•</span>
                    <a
                      href={member.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F6C53C] transition-colors"
                    >
                      Dribbble
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Culture / Studio Principles Bento Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-[2px] bg-[#F6C53C]"></span>
              <span>Our Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
              How we work & collaborate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="rounded-[28px] bg-white border border-zinc-200/90 p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#F6C53C]/80 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#F6C53C]/20 flex items-center justify-center mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Careers Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] sm:rounded-[40px] bg-[#09090b] text-white p-8 sm:p-12 md:p-14 relative overflow-hidden border border-zinc-800 shadow-2xl mb-16 sm:mb-24 hover:border-[#F6C53C]/50 transition-colors"
        >
          <div className="absolute inset-0 opacity-15 pointer-events-none hero-dot-pattern" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#F6C53C] block mb-2">
                We're Growing
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Want to build the future with us?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed">
                We are always on the lookout for visionary product designers, 3D artists, and senior frontend developers.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-between gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-95 flex-shrink-0"
            >
              <span>Get in Touch</span>
              <span className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
