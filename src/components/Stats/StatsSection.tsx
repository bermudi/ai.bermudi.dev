import React from 'react';
import { useInView } from '../../hooks/useInView';
import { CountUp } from './CountUp';

const stats = [
  { value: 85, label: 'Productivity Increase', suffix: '%' },
  { value: 3000, label: 'Hours Saved Monthly', suffix: '+' },
  { value: 60, label: 'Cost Reduction', suffix: '%' },
  { value: 95, label: 'Accuracy Rate', suffix: '%' },
];

export const StatsSection: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#16213e] to-[#1a1a2e]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          AI Impact by Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transform transition-all duration-700 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {isInView && <CountUp end={stat.value} />}{stat.suffix}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};