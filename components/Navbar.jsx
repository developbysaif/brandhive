'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowRight, Folder, Users, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsCompanyOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsCompanyOpen(false);
    }, 180);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-4xl mx-auto rounded-full px-5 py-2.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-zinc-200/80 shadow-lg shadow-black/5'
            : 'bg-white/70 backdrop-blur-md border-zinc-200/60 shadow-sm'
        }`}
      >
        {/* Brandhive Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/Brandhive_logo Black.png"
            alt="Brandhive"
            className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          
          {/* Company NavLink with Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                isCompanyOpen || pathname === '/'
                  ? 'text-black bg-zinc-100 font-semibold'
                  : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
              }`}
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCompanyOpen ? 'rotate-180 text-black' : 'text-zinc-400'}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isCompanyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-3.5 w-[520px] rounded-[32px] bg-white border border-zinc-200/90 shadow-[0_24px_50px_rgba(0,0,0,0.12)] p-4 sm:p-5 flex gap-4 z-50"
                >
                  {/* Left Side: Company Items */}
                  <div className="flex-1 flex flex-col justify-between pr-2">
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-400 mb-3 px-1">
                        Company
                      </h4>

                      <div className="flex flex-col gap-2">
                        {/* Projects Item */}
                        <Link
                          href="/projects"
                          onClick={() => setIsCompanyOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-2xl hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-2xl border border-zinc-200/80 bg-white flex items-center justify-center text-zinc-600 group-hover:border-zinc-300 shadow-sm flex-shrink-0">
                            <Folder className="w-4 h-4 text-zinc-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-black">
                                Projects
                              </span>
                              <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase bg-[#ea580c] text-white rounded-full">
                                new
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 font-normal leading-tight mt-0.5">
                              See our work that we've built.
                            </p>
                          </div>
                        </Link>

                        {/* Team Item */}
                        <Link
                          href="/team"
                          onClick={() => setIsCompanyOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-2xl hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-2xl border border-zinc-200/80 bg-white flex items-center justify-center text-zinc-600 group-hover:border-zinc-300 shadow-sm flex-shrink-0">
                            <Users className="w-4 h-4 text-zinc-600" />
                          </div>
                          <div>
                            <span className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-black block">
                              Team
                            </span>
                            <p className="text-[11px] text-zinc-500 font-normal leading-tight mt-0.5">
                              Meet our creative leads & engineers.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Book A Call Pill Button */}
                    <Link
                      href="/contact-us"
                      onClick={() => setIsCompanyOpen(false)}
                      className="group/btn mt-4 px-4 py-2.5 rounded-full bg-black hover:bg-zinc-900 text-white flex items-center justify-between text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
                    >
                      <span>Book A Call</span>
                      <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover/btn:bg-zinc-700 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>

                  {/* Right Side: Pages Column */}
                  <div className="w-48 bg-[#f4f5f7] rounded-[24px] p-4 sm:p-5 flex flex-col justify-start">
                    <h4 className="text-xs font-semibold text-zinc-400 mb-3">
                      Pages
                    </h4>

                    <div className="flex flex-col gap-2 text-xs sm:text-[13px] font-semibold text-zinc-800">
                      <Link
                        href="/contact-us"
                        onClick={() => setIsCompanyOpen(false)}
                        className="group/page flex items-center justify-between hover:text-black transition-colors py-1 cursor-pointer"
                      >
                        <span>Contact us</span>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-800 opacity-0 -translate-x-1 group-hover/page:opacity-100 group-hover/page:translate-x-0 transition-all duration-200" />
                      </Link>

                      <Link
                        href="/legal-pages/privacy-policy"
                        onClick={() => setIsCompanyOpen(false)}
                        className="group/page flex items-center justify-between hover:text-black transition-colors py-1 cursor-pointer"
                      >
                        <span>Privacy Policy</span>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-800 opacity-0 -translate-x-1 group-hover/page:opacity-100 group-hover/page:translate-x-0 transition-all duration-200" />
                      </Link>

                      <Link
                        href="/legal-pages/terms-of-service"
                        onClick={() => setIsCompanyOpen(false)}
                        className="group/page flex items-center justify-between hover:text-black transition-colors py-1 cursor-pointer"
                      >
                        <span>Terms of Service</span>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-800 opacity-0 -translate-x-1 group-hover/page:opacity-100 group-hover/page:translate-x-0 transition-all duration-200" />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Projects Link */}
          <Link
            href="/projects"
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              pathname === '/projects'
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            <span>Projects</span>
            <span className="px-1.5 py-0.2 text-[9px] uppercase font-bold bg-[#ea580c]/10 text-[#ea580c] rounded-full">
              New
            </span>
          </Link>

          {/* Team Link (Replaces Contact in Navlinks) */}
          <Link
            href="/team"
            className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              pathname === '/team'
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            Team
          </Link>
        </div>

        {/* Action Button: Replaced 'Get Template' with 'Contact Us' */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-black hover:bg-zinc-800 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-2xl border border-zinc-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              <span>Projects</span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c] rounded-full">
                New
              </span>
            </Link>
            <Link
              href="/team"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              <span>Team</span>
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-800 hover:bg-zinc-100"
            >
              <span>Contact Us</span>
            </Link>
            <Link
              href="/legal-pages/privacy-policy"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 hover:bg-zinc-100"
            >
              <span>Privacy Policy</span>
            </Link>
            <Link
              href="/legal-pages/terms-of-service"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-600 hover:bg-zinc-100"
            >
              <span>Terms of Service</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-zinc-100">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
