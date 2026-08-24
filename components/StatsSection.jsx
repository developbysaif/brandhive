'use client';

import React from 'react';
import { STATS } from '@/data/siteData';
import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Tag & Heading with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#F6C53C]"></span>
            <span>Impact & Numbers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Brandhive makes it simple, <br />
            <span className="text-[#64748b] font-medium">and delivers results.</span>
          </h2>
        </motion.div>

        {/* 3 Impact Stats Cards with Staggered Scroll-Up Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-[28px] bg-white border border-zinc-200/80 p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:border-zinc-300 transition-all group"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 block mb-3 group-hover:text-black transition-colors">
                  {stat.value}
                </span>

                <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-2 leading-snug">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-zinc-500 font-normal leading-relaxed mt-4">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
