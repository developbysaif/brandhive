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
        <div className="hidden lg:flex items-center gap-1">
          {/* Home Link */}
          <Link
            href="/"
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              pathname === '/'
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            Home
          </Link>

          {/* Services Link */}
          <Link
            href="/services"
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              pathname.startsWith('/services')
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            Services
          </Link>

          {/* Projects Link */}
          <Link
            href="/projects"
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              pathname.startsWith('/projects')
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            <span>Projects</span>
            <span className="px-1.5 py-0.2 text-[9px] uppercase font-bold bg-[#ea580c]/10 text-[#ea580c] rounded-full">
              New
            </span>
          </Link>

          {/* Our Team Link */}
          <Link
            href="/team"
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              pathname === '/team'
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            Our Team
          </Link>

          {/* Pricing & Plans Link */}
          <Link
            href="/pricing"
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              pathname === '/pricing'
                ? 'text-black bg-zinc-100 font-semibold'
                : 'text-zinc-600 hover:text-black hover:bg-zinc-100/60'
            }`}
          >
            Pricing & Plans
          </Link>
        </div>

        {/* Action Button: Contact Us */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact-us"
            className={`group relative inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
              pathname === '/contact-us'
                ? 'bg-zinc-900 text-white ring-2 ring-zinc-400'
                : 'bg-black hover:bg-zinc-800 text-white'
            }`}
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-full text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-2xl border border-zinc-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/' ? 'bg-zinc-100 text-black font-semibold' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname.startsWith('/services') ? 'bg-zinc-100 text-black font-semibold' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>Services</span>
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname.startsWith('/projects') ? 'bg-zinc-100 text-black font-semibold' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>Projects</span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c] rounded-full">
                New
              </span>
            </Link>

            <Link
              href="/team"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/team' ? 'bg-zinc-100 text-black font-semibold' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>Our Team</span>
            </Link>

            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/pricing' ? 'bg-zinc-100 text-black font-semibold' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>Pricing & Plans</span>
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/contact-us' ? 'bg-zinc-100 text-black font-semibold' : 'text-zinc-800 hover:bg-zinc-100'
              }`}
            >
              <span>Contact Us</span>
            </Link>

            <div className="pt-2 mt-2 border-t border-zinc-100 flex flex-col gap-1">
              <Link
                href="/legal-pages/privacy-policy"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:bg-zinc-100"
              >
                <span>Privacy Policy</span>
              </Link>
              <Link
                href="/legal-pages/terms-of-service"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:bg-zinc-100"
              >
                <span>Terms of Service</span>
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-100">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-md"
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
