import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import { BenefitsSection } from '../components/Benefits/BenefitsSection';
import { StatsSection } from '../components/Stats/StatsSection';
import { CaseStudiesSection } from '../components/CaseStudies/CaseStudiesSection';
import { CTASection } from '../components/CTA/CTASection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <BenefitsSection />
      <StatsSection />
      <CaseStudiesSection />
      <CTASection />
    </main>
  );
};