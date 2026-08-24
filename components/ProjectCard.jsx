'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col"
    >
      {/* Top Header Row: Title & Tags on Left, View ( -> ) Button on Right */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-zinc-100/90 text-zinc-600 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View ( -> ) Pill Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F6C53C] hover:border-[#F6C53C] border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-black shadow-sm transition-all active:scale-95 flex-shrink-0"
        >
          <span>View</span>
          <span className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-black group-hover:text-[#F6C53C] transition-colors">
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      {/* Hardware Device Render Showcase Card */}
      <Link
        href={`/projects/${project.slug}`}
        className="block rounded-[28px] overflow-hidden bg-[#111] border border-zinc-200/80 group-hover:border-[#F6C53C]/80 shadow-md relative aspect-[16/11] group-hover:shadow-[0_16px_40px_rgba(246,197,60,0.12)] transition-all duration-500"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </Link>
    </motion.div>
  );
}
