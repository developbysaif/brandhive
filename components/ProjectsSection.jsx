'use client';

import React from 'react';
import { PROJECTS } from '@/data/siteData';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  const displayProjects = PROJECTS.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 relative bg-[#fafafa]" id="projects">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag & Heading */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-3">
            <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
            <span>Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
            Here's what <br />
            <span className="text-[#64748b] font-medium">the momentum looks like.</span>
          </h2>
        </div>

        {/* 2x2 Projects Grid inside White Card Wrapper */}
        <div className="rounded-[32px] sm:rounded-[44px] bg-white border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {displayProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
