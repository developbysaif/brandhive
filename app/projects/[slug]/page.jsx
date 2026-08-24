import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS } from '@/data/siteData';
import ProjectCard from '@/components/ProjectCard';
import CtaBanner from '@/components/CtaBanner';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const otherProjects = PROJECTS.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 hover:text-black mb-8 transition-colors bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F6C53C]"></span>
            <span>Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-zinc-200 mb-12 text-xs shadow-sm">
          <div>
            <span className="text-zinc-500 block mb-1">Client</span>
            <span className="font-semibold text-zinc-900">{project.client}</span>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">Year</span>
            <span className="font-semibold text-zinc-900">{project.year}</span>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">Service</span>
            <span className="font-semibold text-zinc-900">{project.category}</span>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">Status</span>
            <span className="font-semibold text-zinc-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6C53C]"></span>
              <span>Live & Deployed</span>
            </span>
          </div>
        </div>

        {/* Big Showcase Image */}
        <div className="rounded-3xl overflow-hidden border border-zinc-200 mb-16 shadow-lg bg-zinc-900 aspect-[16/10]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Case Study Content Breakdown */}
        <div className="space-y-10 mb-20 text-zinc-700">
          
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
              {project.description}
            </p>
          </div>

          {project.challenge && (
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                The Challenge
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                The Solution
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {project.results && (
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">
                Key Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.results.map((res, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-[#F6C53C]/80 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#F6C53C] mb-2" />
                    <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* More Projects */}
      <div className="border-t border-zinc-200 py-16 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-zinc-900">
              More Projects
            </h3>
            <Link
              href="/projects"
              className="text-xs font-semibold text-zinc-600 hover:text-black flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
