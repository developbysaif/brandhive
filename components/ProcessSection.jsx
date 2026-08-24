'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

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

function StepItem({ step, index, activeIndex, setActiveIndex }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    margin: "-25% 0px -25% 0px",
    amount: 0.4
  });

  React.useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const isCurrent = activeIndex === index;
  const isPast = activeIndex >= index;

  return (
    <div
      ref={itemRef}
      className="flex items-start gap-4 sm:gap-6 group pt-2 pb-10 sm:pb-16 last:pb-4"
    >
      {/* Node Badge on Timeline */}
      <div className="relative z-10 flex-shrink-0 mt-1">
        <motion.div
          animate={{
            scale: isCurrent ? 1.12 : 1,
            backgroundColor: isCurrent ? "#ffffff" : isPast ? "#ffffff" : "#ffffff",
            borderColor: isCurrent ? "#F6C53C" : isPast ? "#F6C53C" : "#e4e4e7"
          }}
          transition={{ duration: 0.35 }}
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-bold shadow-sm transition-all ${
            isCurrent
              ? 'ring-4 ring-[#F6C53C]/30 text-black border-[#F6C53C]'
              : isPast
              ? 'text-black border-[#F6C53C]'
              : 'text-zinc-400 border-zinc-200'
          }`}
        >
          {step.num}
        </motion.div>
      </div>

      {/* Step Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex-1"
      >
        <div
          className={`rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 md:p-9 transition-all duration-400 border ${
            isCurrent
              ? 'bg-white border-[#F6C53C] shadow-[0_16px_40px_rgba(246,197,60,0.12)] scale-[1.01]'
              : isPast
              ? 'bg-white border-zinc-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.02)]'
              : 'bg-white/70 border-zinc-200/70 shadow-none opacity-60'
          } hover:border-[#F6C53C]/80 hover:shadow-[0_12px_35px_rgba(246,197,60,0.1)]`}
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 tracking-tight">
              {step.title}
            </h3>
            <span
              className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold transition-colors ${
                isCurrent
                  ? 'bg-[#F6C53C] text-black'
                  : isPast
                  ? 'bg-[#F6C53C]/20 text-zinc-800'
                  : 'bg-zinc-100 text-zinc-400'
              }`}
            >
              Step {step.num}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcessSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-32 relative bg-[#fafafa]" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky & Static Header while right 4 boxes scroll */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4">
            
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-[2px] bg-[#F6C53C]"></span>
              <span>Process</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-zinc-900 leading-[1.12]"
            >
              Proven & effective process. <br />
              <span className="text-[#64748b] font-medium block mt-1">
                That delivers results.
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-zinc-600 max-w-sm leading-relaxed pt-2"
            >
              We dive deep into your goals, audience, and challenges to craft a strategy that drives clear direction and impact.
            </motion.p>
          </div>

          {/* Right Column: 4 Scroll-Revealed Process Boxes with Dynamic Timeline */}
          <div className="lg:col-span-7 relative pl-2 sm:pl-4">
            
            {/* Vertical Base Gray Line */}
            <div className="absolute left-[26px] sm:left-[30px] top-6 bottom-16 w-0.5 bg-zinc-200 -translate-x-1/2 z-0" />

            {/* Dynamic Traveling Gold Progress Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[26px] sm:left-[30px] top-6 w-0.5 bg-[#F6C53C] -translate-x-1/2 origin-top z-0"
            />

            {/* 4 Process Step Cards */}
            <div className="relative z-10">
              {processSteps.map((step, idx) => (
                <StepItem
                  key={step.num}
                  step={step}
                  index={idx}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

