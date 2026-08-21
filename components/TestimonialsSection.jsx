'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const card1 = TESTIMONIALS[0];
  const card2 = TESTIMONIALS[1];
  const card3 = TESTIMONIALS[2];

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            We're loved. <br />
            <span className="text-[#64748b] font-medium">Just success stories.</span>
          </h2>
        </motion.div>

        {/* Bento Grid inside Outer Frame with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              
              {/* Card 1: 2.3x */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-all"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 block mb-1">
                    {card1.metric}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium block mb-4">
                    {card1.metricLabel}
                  </span>

                  <span className="text-red-500 text-lg font-bold block mb-2 leading-none">““</span>

                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-6 font-normal">
                    {card1.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={card1.avatar}
                      alt={card1.author}
                      className="w-9 h-9 rounded-full object-cover border border-zinc-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 leading-tight">
                        {card1.author}
                      </h4>
                      <p className="text-[11px] text-zinc-500">
                        {card1.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-zinc-400">✦</span>
                </div>
              </motion.div>

              {/* Card 3: 3x (Tall Card) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[28px] bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-all"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 block mb-1">
                    {card3.metric}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium block mb-4">
                    {card3.metricLabel}
                  </span>

                  <span className="text-red-500 text-lg font-bold block mb-2 leading-none">““</span>

                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-6 font-normal">
                    {card3.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={card3.avatar}
                      alt={card3.author}
                      className="w-9 h-9 rounded-full object-cover border border-zinc-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 leading-tight">
                        {card3.author}
                      </h4>
                      <p className="text-[11px] text-zinc-500">
                        {card3.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-zinc-400">▲</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              
              {/* Card 2: 45% */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-all"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 block mb-1">
                    {card2.metric}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium block mb-4">
                    {card2.metricLabel}
                  </span>

                  <span className="text-red-500 text-lg font-bold block mb-2 leading-none">““</span>

                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-6 font-normal">
                    {card2.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={card2.avatar}
                      alt={card2.author}
                      className="w-9 h-9 rounded-full object-cover border border-zinc-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900 leading-tight">
                        {card2.author}
                      </h4>
                      <p className="text-[11px] text-zinc-500">
                        {card2.role}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-zinc-400">❖</span>
                </div>
              </motion.div>

              {/* Card 4: Dark CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[28px] bg-[#09090b] text-white p-7 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px] border border-zinc-800"
              >
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-15 pointer-events-none hero-dot-pattern" />

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                    You focus <span className="font-normal text-zinc-300">on your company.</span>
                  </h3>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
                    We make <span className="underline decoration-zinc-500">it happen.</span>
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    Unstoppable Growth.
                  </p>
                </div>

                <div className="relative z-10 pt-6 flex justify-end">
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-semibold shadow-md transition-all active:scale-95"
                  >
                    <span>Book A Call</span>
                    <span className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-black group-hover:text-white transition-colors">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
