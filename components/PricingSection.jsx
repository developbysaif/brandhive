'use client';

import React from 'react';
import { PRICING_PLANS, TESTIMONIALS } from '@/data/siteData';
import { Check, ArrowUpRight, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const featuredReview = TESTIMONIALS[3];

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]" id="pricing">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#F6C53C]"></span>
            <span>Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Choose a plan. <br />
            <span className="text-[#64748b] font-medium">That fits your needs.</span>
          </h2>
        </motion.div>

        {/* 3 Pricing Cards with Staggered Scroll-Up Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {PRICING_PLANS.map((plan, idx) => {
            const isDark = plan.id === 'enterprise';
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-[#09090b] text-white shadow-xl border border-zinc-800'
                    : 'bg-white border border-zinc-200 shadow-sm text-zinc-900'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                        isDark
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-zinc-200/20">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-[#F6C53C]' : 'text-[#F6C53C]'}`} />
                        <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div>
                  <Link
                    href="/contact-us"
                    className={`w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isDark
                        ? 'bg-white hover:bg-[#F6C53C] hover:text-black text-black'
                        : 'bg-black hover:bg-[#F6C53C] hover:text-black text-white'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Below Pricing: Testimonial Card + Dark Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Left Review Card */}
          <div className="md:col-span-7 p-7 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between hover:border-[#F6C53C]/70 transition-colors">
            <div>
              <div className="flex items-center gap-1 text-[#F6C53C] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F6C53C] text-[#F6C53C]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-4">
                "{featuredReview.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
              <img
                src={featuredReview.avatar}
                alt={featuredReview.author}
                className="w-8 h-8 rounded-full object-cover border border-zinc-200"
              />
              <div>
                <h4 className="text-xs font-bold text-zinc-900">
                  {featuredReview.author}
                </h4>
                <p className="text-[11px] text-zinc-500">
                  {featuredReview.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Dark Callout Box */}
          <div className="md:col-span-5 p-7 rounded-3xl bg-[#09090b] text-white shadow-xl flex flex-col justify-between border border-zinc-800 hover:border-[#F6C53C]/50 transition-colors">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#F6C53C] font-semibold block mb-1">
                Custom Inquiry
              </span>
              <h3 className="text-base font-bold mb-1">
                Can't decide yet?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Let's have a free 15-min discovery call to discuss roadmap and scope.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F6C53C] hover:text-black text-black text-xs font-semibold transition-all shadow"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
