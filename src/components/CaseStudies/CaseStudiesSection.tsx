import React from 'react';
import { CaseStudy } from './CaseStudy';
import { Building2, Briefcase, ShoppingBag, Stethoscope } from 'lucide-react';

const caseStudies = [
  {
    title: "AI-Powered Financial Analysis Revolution",
    company: "Global Investment Corp",
    industry: "Financial Services",
    challenge: "Manual analysis of market data took weeks, leading to missed opportunities and delayed decision-making in fast-moving markets.",
    solution: "Implemented AI-driven real-time market analysis system with predictive modeling and automated risk assessment.",
    results: [
      "Reduced analysis time from weeks to minutes",
      "Improved investment accuracy by 45%",
      "Generated $50M additional revenue",
      "Automated 85% of routine analysis tasks"
    ],
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200"
  },
  {
    title: "Manufacturing Efficiency Transformation",
    company: "TechManufacture Inc",
    industry: "Manufacturing",
    challenge: "Production line inefficiencies and quality control issues resulted in 15% defect rate and significant waste.",
    solution: "Deployed AI-powered predictive maintenance and real-time quality control systems across production lines.",
    results: [
      "Reduced defect rate to 0.5%",
      "Increased production efficiency by 35%",
      "Saved $2M annually in maintenance",
      "Decreased downtime by 60%"
    ],
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1565465295423-68c959a599ba?auto=format&fit=crop&w=1200"
  },
  {
    title: "Retail Inventory Revolution",
    company: "SmartRetail Solutions",
    industry: "Retail",
    challenge: "Inventory management inefficiencies led to $2M annual losses from stockouts and overstock situations.",
    solution: "Implemented AI-driven demand forecasting and automated inventory management system.",
    results: [
      "Reduced inventory costs by 40%",
      "Improved stock accuracy to 99.9%",
      "Increased sales by 25%",
      "Eliminated stockouts completely"
    ],
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200"
  },
  {
    title: "Healthcare Diagnostics Enhancement",
    company: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "Traditional diagnostic processes were time-consuming and had a 15% error rate in initial assessments.",
    solution: "Integrated AI diagnostic support system with machine learning-based image analysis.",
    results: [
      "Reduced diagnostic time by 75%",
      "Improved accuracy to 99.5%",
      "Saved $3M in operational costs",
      "Increased patient satisfaction by 60%"
    ],
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200"
  }
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#16213e] to-[#1a1a2e]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Success Stories
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Real-world transformations achieved through our AI solutions across different industries
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudy key={study.company} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};