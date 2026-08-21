import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[#fafafa] pt-28">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 mb-6 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
        <span>404 Error</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 mb-4">
        Page not found
      </h1>

      <p className="text-sm text-zinc-600 max-w-sm mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
