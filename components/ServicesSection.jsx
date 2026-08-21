'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = SERVICES[activeIdx];

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
            <span>Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            From idea to scale. <br />
            <span className="text-[#64748b] font-medium">We master our craft with relentless precision.</span>
          </h2>
        </motion.div>

        {/* 2-Column Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Service Selectors with Scroll-Up Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-2.5"
          >
            {SERVICES.map((service, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={service.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-white border-zinc-300 shadow-md'
                      : 'bg-white/60 border-zinc-200/80 hover:bg-white hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                        isActive ? 'bg-black text-white' : 'border border-zinc-300 text-transparent group-hover:border-zinc-400'
                      }`}
                    >
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className={`text-sm font-semibold ${isActive ? 'text-zinc-900' : 'text-zinc-600'}`}>
                      {service.title}
                    </span>
                  </div>
                  <span className={`text-xs font-mono ${isActive ? 'text-zinc-900 font-bold' : 'text-zinc-400'}`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Active Service Visual Preview with Scroll-Up Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="p-3 rounded-3xl bg-white border border-zinc-200 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden bg-zinc-900"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2">
                        {activeService.title}
                      </h3>
                      <p className="text-xs text-zinc-300 mb-4 max-w-md leading-relaxed">
                        {activeService.description}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-wrap gap-2">
                          {activeService.tags.map((t) => (
                            <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] backdrop-blur-sm">
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/services/${activeService.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-100 transition-all shadow-md active:scale-95"
                        >
                          <span>Explore Service</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
