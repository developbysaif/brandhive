'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { ClientTicker } from '@/components/MarqueeTicker';

const heroSlides = [
  {
    title: "Finlytics",
    slug: "finlytics",
    image: "/images/project-sensor.jpg"
  },
  {
    title: "Atlas Technologies",
    slug: "atlas-technologies",
    image: "/images/hero-device.jpg"
  },
  {
    title: "Orbital Bank",
    slug: "orbital-bank",
    image: "/images/project-stylus.jpg"
  },
  {
    title: "Echo Analytics",
    slug: "echo-analytics",
    image: "/images/project-audio.jpg"
  }
];

export default function Hero() {
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [isHeroSliderPaused, setIsHeroSliderPaused] = useState(false);

  // Auto-slide every 4.5 seconds unless hovered
  useEffect(() => {
    if (isHeroSliderPaused) return;

    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHeroSliderPaused]);

  const leftCards = [
    {
      quote: "Helped me go live in days, not weeks—highly recommend.",
      author: "Marcus T",
      faded: true,
      offset: "-translate-x-6 opacity-40",
    },
    {
      quote: "The updates and attention to detail are unmatched.",
      author: "Nora S",
      faded: false,
      offset: "translate-x-0 opacity-100 shadow-[0_16px_40px_rgba(0,0,0,0.07)]",
    },
    {
      quote: "Saved me weeks of work, and the result looks professional.",
      author: "Ethan J.",
      faded: true,
      offset: "-translate-x-6 opacity-40",
    },
  ];

  const rightCards = [
    {
      quote: "Super smooth experience—launched my site in no time!",
      author: "Daniel K",
      faded: true,
      offset: "translate-x-6 opacity-40",
    },
    {
      quote: "Beautiful template, easy to customize, and worth every penny.",
      author: "Amelia R",
      faded: false,
      offset: "translate-x-0 opacity-100 shadow-[0_16px_40px_rgba(0,0,0,0.07)]",
    },
    {
      quote: "Exactly what I needed to kickstart my SaaS project fast.",
      author: "Leo M.",
      faded: true,
      offset: "translate-x-6 opacity-40",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#fafafa]">
      {/* Subtle background dot pattern */}
      <div className="absolute inset-0 hero-dot-pattern pointer-events-none opacity-60" />

      {/* Left Floating Review Cards (Desktop) */}
      <div className="hidden lg:flex flex-col gap-4 xl:gap-5 absolute left-0 xl:left-4 top-32 w-60 xl:w-64 z-20 pointer-events-auto select-none">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] -translate-x-4 opacity-40 hover:opacity-100 hover:translate-x-0 transition-all duration-300"
        >
          <span className="absolute top-3.5 right-4 text-zinc-300 text-lg leading-none font-serif select-none">”</span>
          <p className="text-xs text-zinc-700 leading-relaxed font-normal mb-2 pr-4">
            "{leftCards[0].quote}"
          </p>
          <span className="text-[11px] font-medium text-zinc-500 block">
            - {leftCards[0].author}
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="relative bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-[0_16px_40px_rgba(0,0,0,0.08)] translate-x-2 z-10 hover:scale-[1.02] transition-transform duration-300"
        >
          <span className="absolute top-3.5 right-4 text-zinc-300 text-lg leading-none font-serif select-none">”</span>
          <p className="text-xs text-zinc-800 leading-relaxed font-medium mb-2 pr-4">
            "{leftCards[1].quote}"
          </p>
          <span className="text-[11px] font-semibold text-zinc-900 block">
            - {leftCards[1].author}
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] -translate-x-4 opacity-40 hover:opacity-100 hover:translate-x-0 transition-all duration-300"
        >
          <span className="absolute top-3.5 right-4 text-zinc-300 text-lg leading-none font-serif select-none">”</span>
          <p className="text-xs text-zinc-700 leading-relaxed font-normal mb-2 pr-4">
            "{leftCards[2].quote}"
          </p>
          <span className="text-[11px] font-medium text-zinc-500 block">
            - {leftCards[2].author}
          </span>
        </motion.div>
      </div>

      {/* Right Floating Review Cards (Desktop) */}
      <div className="hidden lg:flex flex-col gap-4 xl:gap-5 absolute right-0 xl:right-4 top-32 w-60 xl:w-64 z-20 pointer-events-auto select-none">
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="relative bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] translate-x-4 opacity-40 hover:opacity-100 hover:translate-x-0 transition-all duration-300"
        >
          <span className="absolute top-3.5 right-4 text-zinc-300 text-lg leading-none font-serif select-none">”</span>
          <p className="text-xs text-zinc-700 leading-relaxed font-normal mb-2 pr-4">
            "{rightCards[0].quote}"
          </p>
          <span className="text-[11px] font-medium text-zinc-500 block">
            - {rightCards[0].author}
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="relative bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-[0_16px_40px_rgba(0,0,0,0.08)] -translate-x-2 z-10 hover:scale-[1.02] transition-transform duration-300"
        >
          <span className="absolute top-3.5 right-4 text-zinc-300 text-lg leading-none font-serif select-none">”</span>
          <p className="text-xs text-zinc-800 leading-relaxed font-medium mb-2 pr-4">
            "{rightCards[1].quote}"
          </p>
          <span className="text-[11px] font-semibold text-zinc-900 block">
            - {rightCards[1].author}
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="relative bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.04)] translate-x-4 opacity-40 hover:opacity-100 hover:translate-x-0 transition-all duration-300"
        >
          <span className="absolute top-3.5 right-4 text-zinc-300 text-lg leading-none font-serif select-none">”</span>
          <p className="text-xs text-zinc-700 leading-relaxed font-normal mb-2 pr-4">
            "{rightCards[2].quote}"
          </p>
          <span className="text-[11px] font-medium text-zinc-500 block">
            - {rightCards[2].author}
          </span>
        </motion.div>
      </div>

      {/* Center Hero Content */}
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Open for Work Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs text-zinc-800 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span className="font-medium">Open for Work</span>
          </motion.div>

          {/* Headline - Balanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-bold tracking-tight text-zinc-900 leading-[1.12] mb-4 max-w-2xl"
          >
            Build a Brand <br className="hidden sm:inline" />
            People Remember.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed mb-8"
          >
            Brandhive.creatives is a creative digital agency specializing in branding, graphic design, web development, UI/UX design, digital marketing, SEO, social media, and AI-powered content to help businesses stand out and grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3.5 mb-8 w-full sm:w-auto"
          >
            <Link
              href="/contact-us"
              className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-3.5 rounded-full bg-black hover:bg-[#F6C53C] hover:text-black text-white text-xs sm:text-sm font-medium shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book A Call</span>
              <span className="w-5 h-5 rounded-full bg-zinc-800 group-hover:bg-black/80 flex items-center justify-center text-zinc-300 group-hover:text-[#F6C53C] transition-colors">
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-[#F6C53C]/15 hover:border-[#F6C53C]/80 text-zinc-800 border border-zinc-200/90 text-xs sm:text-sm font-medium shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
            </Link>
          </motion.div>

          {/* Social Proof Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-12 sm:mb-16 select-none"
          >
            <div className="flex -space-x-2">
              <img
                src="https://framerusercontent.com/images/IjJa1vBDDNzASjXZGBTLcNObHc.jpg"
                alt="Client 1"
                className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="https://framerusercontent.com/images/30H4QgT6gjZSasw0DBCbxLWLY.jpg"
                alt="Client 2"
                className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="https://framerusercontent.com/images/fTIxNsAqL5kAuPvnKO17blaBlqc.jpg"
                alt="Client 3"
                className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <img
                src="https://framerusercontent.com/images/UKNBT47BxbtxXCLRDY5cWmNUeYQ.jpg"
                alt="Client 4"
                className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm"
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center gap-0.5 text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-black text-black" />
                ))}
              </div>
              <span className="text-[11px] text-zinc-500 font-medium">
                From 150+ reviews
              </span>
            </div>
          </motion.div>

        </div>

        {/* Large AI Hardware Showcase Mockup Slider (Larger & Prominent Size) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-[32px] sm:rounded-[44px] overflow-hidden bg-white border border-zinc-200/90 shadow-[0_24px_60px_rgba(0,0,0,0.08)] p-2.5 sm:p-3.5 mb-8 sm:mb-10 relative group select-none"
        >
          <div
            className="rounded-[24px] sm:rounded-[36px] overflow-hidden relative aspect-[16/11] sm:aspect-[16/9] md:aspect-[21/11] min-h-[340px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[580px] bg-zinc-950"
            onMouseEnter={() => setIsHeroSliderPaused(true)}
            onMouseLeave={() => setIsHeroSliderPaused(false)}
          >
            {/* Sliding Images */}
            <AnimatePresence mode="wait">
              <motion.img
                key={heroSlides[heroSlideIdx].image}
                src={heroSlides[heroSlideIdx].image}
                alt={heroSlides[heroSlideIdx].title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Top Left Project Name Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 z-20">
              <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/15 shadow-sm transition-all">
                {heroSlides[heroSlideIdx].title}
              </span>
            </div>

            {/* Top Right View Project Button */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
              <Link
                href={`/projects/${heroSlides[heroSlideIdx].slug}`}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-[#F6C53C] hover:text-black transition-all shadow-md hover:scale-105"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Bottom Preview Image Thumbnails matching screenshot */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex items-center gap-2 sm:gap-3.5 z-20">
              {heroSlides.map((slide, idx) => {
                const isActive = heroSlideIdx === idx;
                return (
                  <button
                    key={slide.slug}
                    type="button"
                    onClick={() => setHeroSlideIdx(idx)}
                    className={`relative w-16 sm:w-24 md:w-28 aspect-[16/10] rounded-[14px] sm:rounded-[18px] overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-2 border-white ring-2 ring-black/40 shadow-2xl scale-105 opacity-100 z-10'
                        : 'border border-white/25 opacity-45 hover:opacity-95 hover:scale-[1.03] bg-black/40 backdrop-blur-sm'
                    }`}
                    aria-label={`Select ${slide.title}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-transparent' : 'bg-black/20'}`} />
                  </button>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* Small & Sleek Client Ticker Directly Under the Image Card */}
        <div className="w-full flex justify-center">
          <ClientTicker />
        </div>

      </div>
    </section>
  );
}
