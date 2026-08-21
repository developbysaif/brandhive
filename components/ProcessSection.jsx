'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We uncover your goals, audience, and challenges to build a clear roadmap for success."
  },
  {
    num: "02",
    title: "Design & Prototyping",
    description: "Transforming insights into bold, user-focused designs that connect and convert."
  },
  {
    num: "03",
    title: "Build & Launch",
    description: "From pixel to code, we craft high-performing websites and launch them flawlessly."
  },
  {
    num: "04",
    title: "Scale & Optimize",
    description: "We monitor, refine, and enhance to ensure continuous growth and lasting impact."
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1); // 0-indexed: 0 = 01, 1 = 02, 2 = 03, 3 = 04
  const [isPaused, setIsPaused] = useState(false);

  // Auto-progress from step 01 down to 04
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Calculate red line height percentage based on activeStep
  // 0: ~12%, 1: ~42%, 2: ~72%, 3: 100%
  const stepPercentages = [12, 42, 72, 100];
  const redLineHeight = stepPercentages[activeStep];

  return (
    <section className="py-16 sm:py-24 md:py-28 relative bg-[#fafafa]" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Column: Static & Sticky Header from Screenshot */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
              <span>Process</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-zinc-900 leading-[1.12]">
              Proven & effective process. <br />
              <span className="text-[#64748b] font-medium block mt-1">
                That delivers results.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-zinc-600 max-w-sm leading-relaxed pt-2">
              We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
            </p>
          </div>

          {/* Right Column: Timeline with Animated Red Line & Step Cards */}
          <div className="lg:col-span-7 relative pl-2 sm:pl-4">
            
            {/* Vertical Base Gray Line */}
            <div className="absolute left-6 sm:left-8 top-5 bottom-8 w-0.5 bg-zinc-200 -translate-x-1/2 z-0" />

            {/* Dynamic Traveling Red Line */}
            <motion.div
              className="absolute left-6 sm:left-8 top-5 w-0.5 bg-[#ea580c] -translate-x-1/2 origin-top z-0"
              initial={{ height: '12%' }}
              animate={{ height: `${redLineHeight}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Steps Container */}
            <div className="space-y-8 sm:space-y-10 relative z-10">
              {processSteps.map((step, idx) => {
                const isReached = activeStep >= idx;
                const isCurrent = activeStep === idx;

                return (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Node Badge on the Timeline */}
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 flex-shrink-0 cursor-pointer shadow-sm ${
                        isCurrent
                          ? 'bg-white border-2 border-[#ea580c] text-zinc-900 ring-4 ring-[#ea580c]/15 scale-105'
                          : isReached
                          ? 'bg-white border-2 border-[#ea580c] text-zinc-800'
                          : 'bg-white border border-zinc-200 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600'
                      }`}
                      aria-label={`Jump to step ${step.num}`}
                    >
                      {step.num}
                    </button>

                    {/* Step Card */}
                    <div className="flex-1">
                      <AnimatePresence>
                        {isReached && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`rounded-[24px] sm:rounded-[28px] bg-white border p-6 sm:p-8 transition-all duration-300 ${
                              isCurrent
                                ? 'border-zinc-300 shadow-[0_12px_35px_rgba(0,0,0,0.05)]'
                                : 'border-zinc-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.02)] opacity-85'
                            }`}
                          >
                            <h3 className="text-base sm:text-lg font-bold text-zinc-800 tracking-tight mb-2">
                              {step.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-zinc-500 font-normal leading-relaxed">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
