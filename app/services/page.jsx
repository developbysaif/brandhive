'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/siteData';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import ProcessSection from '@/components/ProcessSection';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F6C53C]"></span>
            <span>Our Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12] mb-4">
            End-to-end craft. <br />
            <span className="text-[#64748b] font-medium">Built to scale your brand.</span>
          </h1>

          <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
            From strategic branding and high-impact graphic design to search optimization, cinematic video editing, and custom Shopify engines.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-[#F6C53C] hover:text-black text-white text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F6C53C]/15 hover:border-[#F6C53C]/80 border border-zinc-200 text-zinc-800 text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-[0.98]"
            >
              <span>View Pricing</span>
            </Link>
          </div>
        </motion.div>

        {/* Detailed 5 Services Grid */}
        <div className="space-y-8 sm:space-y-12 mb-20">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="rounded-[32px] sm:rounded-[40px] bg-white border border-zinc-200/90 p-6 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] hover:border-[#F6C53C]/80 hover:shadow-[0_12px_40px_rgba(246,197,60,0.1)] transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Left Column: Info, Deliverables & Metrics */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-black font-bold px-3 py-1 rounded-full bg-[#F6C53C]/30">
                        0{idx + 1}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-medium text-zinc-600 bg-[#f4f5f7] px-2.5 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-700 mb-3">
                        {service.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                        {service.longDescription}
                      </p>
                    </div>

                    {/* Metrics Badges */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {service.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-2xl bg-[#fafafa] border border-zinc-100 text-center">
                          <span className="text-base sm:text-lg font-extrabold text-zinc-900 block">
                            {metric.value}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-zinc-500 font-medium leading-tight block mt-0.5">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Key Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F6C53C] mt-0.5 flex-shrink-0" />
                            <span className="font-medium text-zinc-800">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black hover:bg-[#F6C53C] hover:text-black text-white text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Explore Full Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#f4f5f7] hover:bg-[#F6C53C]/20 hover:text-black text-zinc-800 text-xs font-semibold transition-all active:scale-[0.98]"
                      >
                        <span>Book Inquiry</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Preview Image */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="rounded-[28px] overflow-hidden border border-zinc-200/90 shadow-md relative group aspect-[4/3] bg-zinc-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
