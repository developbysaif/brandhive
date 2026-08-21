'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  {
    name: 'Hyperion',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 19h20L12 2zm0 4l6.5 11H5.5L12 6z" />
      </svg>
    ),
  },
  {
    name: 'Nexus Lab',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Acme Corp',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 18l7-6-7-6v12zm9-12v12l7-6-7-6z" />
      </svg>
    ),
  },
  {
    name: 'Quantum',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    ),
  },
  {
    name: 'APEX',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 22,22 2,22" />
      </svg>
    ),
  },
  {
    name: 'Celestial',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 6.6L21 11l-5.6 4.4L17 22l-5-4-5 4 1.6-6.6L3 11l6.6-2.4L12 2z" />
      </svg>
    ),
  },
  {
    name: 'Vortex',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
      </svg>
    ),
  },
];

export function ClientTicker() {
  const tickerItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="w-full max-w-4xl mx-auto py-2 relative flex flex-col items-center select-none">
      {/* Subtitle */}
      <span className="text-[11px] font-medium text-zinc-400 mb-3 tracking-wide">
        Trusted by top founders.
      </span>

      {/* Infinite Ticker Bar with edge gradient masks */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-[#fafafa] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-[#fafafa] to-transparent" />

        <motion.div
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          className="flex items-center gap-10 whitespace-nowrap"
        >
          {tickerItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-2 text-zinc-700 hover:text-black transition-colors"
            >
              <span className="text-zinc-600">{partner.icon}</span>
              <span className="text-xs font-semibold tracking-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function MarqueeTicker() {
  return <ClientTicker />;
}
