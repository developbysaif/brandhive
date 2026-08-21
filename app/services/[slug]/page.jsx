import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, PROJECTS } from '@/data/siteData';
import ProjectCard from '@/components/ProjectCard';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Layers, Zap } from 'lucide-react';

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Find relevant projects matching this service
  const relevantProjects = PROJECTS.filter((p) =>
    p.category === service.title || p.tags.includes(service.title)
  );

  const displayProjects = relevantProjects.length > 0
    ? relevantProjects.slice(0, 2)
    : PROJECTS.slice(0, 2);

  return (
    <div className="pt-28 md:pt-36 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Service Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
            <span>{service.title}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.12] mb-4">
            {service.headline}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-normal leading-relaxed mb-8">
            {service.longDescription}
          </p>

          {/* Service CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-black hover:bg-zinc-900 text-white text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-95"
            >
              <span>Request {service.title}</span>
              <span className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-zinc-700 transition-colors">
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </Link>
          </div>
        </div>

        {/* 3 Metric Cards */}
        {service.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {service.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-[24px] bg-white border border-zinc-200/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-1">
                  {metric.value}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Big Visual Showcase Render Card */}
        <div className="rounded-[32px] sm:rounded-[40px] overflow-hidden border border-zinc-200 shadow-xl bg-zinc-950 aspect-[16/10] relative mb-16 sm:mb-20">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold border border-white/10">
              {service.title} Architecture
            </span>
            <span className="text-xs font-mono text-zinc-300">
              Brandhive Design Sprint
            </span>
          </div>
        </div>

        {/* Deliverables Section */}
        {service.deliverables && (
          <div className="mb-20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-2">
                <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
                <span>Deliverables</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                What you receive in this service
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white border border-zinc-200/90 p-6 sm:p-7 shadow-sm hover:border-zinc-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center font-bold text-xs mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies / Tools */}
        {service.technologies && (
          <div className="rounded-[28px] bg-white border border-zinc-200/90 p-8 shadow-sm mb-20">
            <h3 className="text-sm uppercase tracking-wider font-bold text-zinc-400 mb-4">
              Technologies & Standards
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-[#f4f5f7] border border-zinc-200/60 text-xs font-semibold text-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Featured Projects for this Service */}
      <div className="border-t border-zinc-200/80 py-16 sm:py-20 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-1">
                <span className="w-1.5 h-1.5 rounded-[2px] bg-[#ea580c]"></span>
                <span>Case Studies</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                Related {service.title} Work
              </h3>
            </div>

            <Link
              href="/projects"
              className="text-xs font-semibold text-zinc-700 hover:text-black flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}
