import React from 'react';
import { useInView } from '../../hooks/useInView';

interface BenefitMetricProps {
  category: string;
  metrics: {
    title: string;
    value: string;
    description: string;
  }[];
}

export const BenefitMetric: React.FC<BenefitMetricProps> = ({ category, metrics }) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.title}
            className={`transform transition-all duration-700 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-sm text-gray-300">{metric.title}</span>
              <span className="text-lg font-bold text-white">{metric.value}</span>
            </div>
            <p className="text-sm text-gray-400">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};