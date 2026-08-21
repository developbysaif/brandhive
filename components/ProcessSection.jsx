'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description: "We uncover your goals, audience, and challenges to build a clear roadmap for success.",
    items: [
      "Deep dive into user personas & market positioning",
      "Information architecture & content structure",
      "Goal setting, timelines, and technical requirements"
    ]
  },
  {
    num: "02",
    title: "Concept & UI Design",
    description: "Transforming insights into bold, user-focused designs that connect and convert.",
    items: [
      "Interactive wireframes and rapid prototyping",
      "High-fidelity design tokens & component system",
      "Custom micro-animations and motion design"
    ]
  },
  {
    num: "03",
    title: "Build & Launch",
    description: "From pixel to code, we craft high-performing websites and launch them flawlessly.",
    items: [
      "Clean semantic Next.js / Framer build",
      "Sub-second page speeds & 99+ Lighthouse scores",
      "Cross-browser testing, SEO, and domain setup"
    ]
  },
  {
    num: "04",
    title: "Scale & Optimize",
    description: "We monitor, refine, and enhance to ensure continuous growth and lasting impact.",
    items: [
      "Real-time analytics and user behavior heatmaps",
      "A/B conversion rate testing & multivariate experiments",
      "Continuous feature updates and scaling support"
    ]
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-progress every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Line progress percentage
  const lineProgress = (activeStep / (steps.length - 1)) * 100;

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
            <span>Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Proven & effective process. <br />
            <span className="text-[#64748b] font-medium">That delivers results.</span>
          </h2>
        </div>

        {/* Interactive Timeline Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Column: Vertical Timeline Steps */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Track Line */}
            <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-0.5 bg-zinc-200" />

            {/* Dynamic Traveling Red Line */}
            <motion.div
              className="absolute left-5 sm:left-6 top-6 w-0.5 bg-[#ea580c] origin-top"
              initial={{ height: '0%' }}
              animate={{ height: `${lineProgress}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Step Nodes */}
            <div className="space-y-6 sm:space-y-8 relative z-10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep >= idx;

                return (
                  <button
                    key={step.num}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex items-center gap-4 text-left w-full group cursor-pointer focus:outline-none"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm flex-shrink-0 ${
                        isActive
                          ? 'bg-[#ea580c] text-white ring-4 ring-[#ea580c]/20 scale-105'
                          : isPassed
                          ? 'bg-zinc-900 text-white'
                          : 'bg-white text-zinc-400 border border-zinc-200 group-hover:border-zinc-400 group-hover:text-zinc-700'
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Step Title Label */}
                    <div className="flex-1">
                      <span
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isActive
                            ? 'text-zinc-900'
                            : 'text-zinc-500 group-hover:text-zinc-800'
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Dynamic Step Card Container */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] sm:rounded-[36px] bg-white border border-zinc-200/90 p-7 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)] min-h-[320px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#ea580c] px-3 py-1 rounded-full bg-[#ea580c]/10">
                      Step {steps[activeStep].num}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {activeStep + 1} of {steps.length}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                    {steps[activeStep].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {steps[activeStep].description}
                  </p>

                  <div className="pt-4 border-t border-zinc-100 space-y-2.5">
                    {steps[activeStep].items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar Indicator */}
              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === i
                          ? 'w-8 bg-[#ea580c]'
                          : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                      }`}
                      aria-label={`Step ${i + 1}`}
                    />
                  ))}
                </div>

                <span className="text-[11px] text-zinc-400 font-medium">
                  {isPaused ? 'Paused' : 'Auto-progressing'}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
