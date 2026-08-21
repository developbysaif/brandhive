'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS } from '@/data/siteData';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Title & Dark CTA Box */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
                <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
                <span>FAQs</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
                Got a question? <br />
                <span className="text-[#64748b] font-medium">We've got answers.</span>
              </h2>
            </div>

            {/* Dark CTA Box */}
            <div className="p-7 rounded-[28px] bg-[#09090b] text-white shadow-xl relative overflow-hidden border border-zinc-800 mt-6">
              <div className="absolute inset-0 opacity-15 pointer-events-none hero-dot-pattern" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1">
                  Still have questions?
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  Can't decide yet? Reach out and we'll help guide you.
                </p>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Contact Us</span>
                  <span className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-zinc-300 shadow-sm'
                      : 'bg-white border-zinc-200/80 hover:border-zinc-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 flex-shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] text-zinc-600 leading-relaxed border-t border-zinc-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
