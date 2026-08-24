'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  const brandLogos = [
    {
      name: "Acme Corp",
      icon: (
        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 18l7-6-7-6v12zm9-12v12l7-6-7-6z" />
        </svg>
      )
    },
    {
      name: "Quantum",
      icon: (
        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="7" cy="7" r="3.5" />
          <circle cx="17" cy="7" r="3.5" />
          <circle cx="7" cy="17" r="3.5" />
          <circle cx="17" cy="17" r="3.5" />
        </svg>
      )
    },
    {
      name: "APEX",
      icon: (
        <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 5l6.5 13H5.5L12 7z" />
        </svg>
      )
    },
    {
      name: "Celestial",
      icon: (
        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 6.6L21 11l-5.6 4.4L17 22l-5-4-5 4 1.6-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Banner Card with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-[36px] sm:rounded-[44px] bg-white border border-zinc-200/90 p-8 sm:p-14 md:p-20 text-center shadow-[0_8px_40px_rgba(0,0,0,0.03)]"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-3">
              Trusted by 100+ founders. <br />
              <span className="text-[#64748b] font-medium">Turning ideas into bold brands.</span>
            </h2>

            <p className="text-zinc-600 text-xs sm:text-sm mb-6 max-w-lg leading-relaxed">
              From early-stage startups to scaling enterprises, we build conversion-engineered digital experiences that leave a lasting mark.
            </p>

            {/* Open for work badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs text-zinc-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C53C]"></span>
              <span>Available for new projects</span>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10">
              <Link
                href="/contact-us"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-black hover:bg-[#F6C53C] hover:text-black text-white text-xs sm:text-sm font-medium shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book A Call</span>
                <span className="w-5 h-5 rounded-full bg-zinc-800 group-hover:bg-black/80 flex items-center justify-center text-zinc-300 group-hover:text-[#F6C53C] transition-colors">
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white hover:bg-[#F6C53C]/15 hover:border-[#F6C53C]/80 text-zinc-800 border border-zinc-200 text-xs sm:text-sm font-medium shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Plans</span>
              </Link>
            </div>

            {/* Client Logo Icons in footer of CTA Banner */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-70">
              {brandLogos.map((brand, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-zinc-500 text-xs font-semibold">
                  {brand.icon}
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
