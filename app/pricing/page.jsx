'use client';

import React from 'react';
import Link from 'next/link';
import { PRICING_PLANS, TESTIMONIALS } from '@/data/siteData';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import { ArrowRight, ArrowUpRight, Check, Star, Calendar, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const guarantees = [
    {
      icon: <Zap className="w-4 h-4 text-[#ea580c]" />,
      title: "Fast Turnaround",
      desc: "Get your requests and deliverables in days, not weeks, with dedicated priority sprints."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#ea580c]" />,
      title: "100% Satisfaction",
      desc: "Iterative revisions until you are completely satisfied with the craft and outcome."
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#ea580c]" />,
      title: "No Hidden Costs",
      desc: "Transparent upfront pricing with zero surprise charges or vendor lock-in."
    }
  ];

  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
            <span>Pricing & Plans</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12] mb-4">
            Predictable investment. <br />
            <span className="text-[#64748b] font-medium">Uncapped creative impact.</span>
          </h1>

          <p className="text-zinc-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6">
            Choose a plan designed for your stage—from high-velocity launch sprints to full-scale monthly growth partnerships.
          </p>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-6">
            {guarantees.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-sm">
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-xs font-bold text-zinc-900 mb-1">{item.title}</h3>
                <p className="text-[11px] text-zinc-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Main Pricing Cards Component */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
