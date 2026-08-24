'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/data/siteData';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Zap, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';

function TeamFlipCard({ member, idx }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-[28px] sm:rounded-[36px] [perspective:1200px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`w-full h-full relative [transform-style:preserve-3d] rounded-[28px] sm:rounded-[36px] transition-transform duration-700 ease-out shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
          isFlipped ? '[transform:rotateY(180deg)] shadow-[0_20px_50px_rgba(246,197,60,0.15)]' : ''
        }`}
      >
        {/* Front Face: Portrait Photo with Dark Gradient & Info */}
        <div className="absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden [backface-visibility:hidden] bg-black border-2 border-zinc-200/80">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent pointer-events-none" />

          {/* Bottom Info Bar on Front Face matching Image 1 */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white z-10">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
                {member.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-300 font-medium mt-0.5">
                {member.role}
              </p>
            </div>

            {/* Circular #F6C53C Action Button matching Image 1 */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F6C53C] text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-45 duration-300 flex-shrink-0">
              <ArrowUpRight className="w-4 h-4 font-bold stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* Back Face: Flip Information (Bio, Skills, Socials) */}
        <div className="absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 bg-[#09090b] text-white border-2 border-[#F6C53C]/40 shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none hero-dot-pattern" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F6C53C] text-black shadow-sm">
                {member.role}
              </span>
              <span className="text-xs text-zinc-500 font-mono">0{idx + 1}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
              {member.name}
            </h3>

            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed mb-4">
              {member.bio}
            </p>

            {/* Skill / Discipline Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-medium text-zinc-200 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links on Back Face (LinkedIn & GitHub only) */}
          <div className="relative z-10 pt-4 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#F6C53C] transition-colors font-medium flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
                >
                  <span>LinkedIn</span>
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#F6C53C] transition-colors font-medium flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
                >
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-1 text-[10px] text-zinc-500">
              <RotateCw className="w-3 h-3 text-[#F6C53C]" />
              <span>Flip</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

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
        
        {/* Page Header with Headline & 2 Paragraph Columns matching Image 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F6C53C]"></span>
            <span>Our Team</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12] mb-8 max-w-4xl">
            Exceptionally skilled world-class designers and visualizers.
          </h1>

          {/* Two Paragraph Columns matching Image 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-5xl">
            <p>
              We are passionate about our work and its positive impact on our clients. With over 12 years of experience, we consistently deliver exceptional web solutions that offer a best-in-class experience.
            </p>
            <p>
              We aim to create practical web solutions tailored to projects of all sizes, meeting unique project requirements. Our compelling web designs are crafted to perfectly align with your target audience.
            </p>
          </div>
        </motion.div>

        {/* 3D Flip Team Cards Grid matching Image 1 */}
        <div className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <TeamFlipCard key={member.name} member={member} idx={idx} />
            ))}
          </div>
        </div>

        {/* Studio Principles Section */}
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
