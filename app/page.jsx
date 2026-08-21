import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#fafafa]">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
