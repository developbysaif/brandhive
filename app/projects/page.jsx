'use client';

import React from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/data/siteData';
import ProjectCard from '@/components/ProjectCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Page Header with Scroll-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-4">
            Bold ideas, <br />
            <span className="text-[#64748b] font-medium">Stunning results.</span>
          </h1>
          <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Have a project in mind or need guidance? Explore our portfolio of conversion-engineered digital products.
          </p>
        </motion.div>

        {/* 2x2 Projects Showcase Grid inside Large White Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="px-6 py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              Load More
            </button>
          </div>
        </motion.div>

      </div>

      {/* Testimonials Bento Section */}
      <TestimonialsSection />

      {/* Testimonials Footer Bar (View All Reviews & Rating) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 mb-16 flex flex-col items-center gap-4 select-none"
      >
        <Link
          href="/contact-us"
          className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800 shadow-sm transition-all"
        >
          <span>View All Reviews</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* 4 Avatars + 5 Stars + From 150+ reviews */}
        <div className="flex items-center gap-3 mt-1">
          <div className="flex -space-x-2">
            <img
              src="https://framerusercontent.com/images/IjJa1vBDDNzASjXZGBTLcNObHc.jpg"
              alt="Client 1"
              className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://framerusercontent.com/images/30H4QgT6gjZSasw0DBCbxLWLY.jpg"
              alt="Client 2"
              className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://framerusercontent.com/images/fTIxNsAqL5kAuPvnKO17blaBlqc.jpg"
              alt="Client 3"
              className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://framerusercontent.com/images/UKNBT47BxbtxXCLRDY5cWmNUeYQ.jpg"
              alt="Client 4"
              className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center gap-0.5 text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-black text-black" />
              ))}
            </div>
            <span className="text-[10px] text-zinc-500 font-medium">
              From 150+ reviews
            </span>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
