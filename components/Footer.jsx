'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  return (
    <footer className="border-t border-zinc-200/80 bg-[#fafafa] pt-16 sm:pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center text-white font-bold text-xs shadow-sm">
                L
              </div>
              <span className="text-black font-bold text-lg tracking-tight">
                Lamosa<span className="text-[#ea580c]">.</span>
              </span>
            </Link>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-zinc-900 mb-1">
                Join our newsletter
              </h4>
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed mb-4">
                Stay ahead with insights and strategies spanning design, technology, and marketing built to drive measurable growth.
              </p>

              {newsletterSubscribed ? (
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-full inline-block border border-emerald-200">
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center max-w-xs relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-[#f4f5f7] border border-zinc-200/80 focus:border-zinc-400 focus:bg-white rounded-full pl-4 pr-11 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 w-7 h-7 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-sm"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600 font-medium">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-black transition-colors flex items-center gap-1.5">
                  <span>Projects</span>
                  <span className="px-1.5 py-0.2 text-[9px] uppercase font-bold bg-[#ea580c]/10 text-[#ea580c] rounded-full">
                    New
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-black transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-900 mb-4">
              Socials
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600 font-medium">
              <li>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href="https://framer.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  <span>Framer</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors inline-flex items-center gap-1">
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Giant Watermark from screenshot */}
        <div className="select-none pointer-events-none my-6 sm:my-8 overflow-hidden">
          <span className="text-[16vw] font-black tracking-tighter text-zinc-200/60 leading-none block text-center">
            Lamosa<span className="text-[#ea580c]/30">.</span>
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-normal">
          <div>
            © {new Date().getFullYear()} Built in Next.js by <span className="text-zinc-800 font-semibold">Lamosa Studio</span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/legal-pages/privacy-policy" className="hover:text-black transition-colors">
              Privacy policy
            </Link>
            <Link href="/legal-pages/terms-of-service" className="hover:text-black transition-colors">
              Terms of services
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
