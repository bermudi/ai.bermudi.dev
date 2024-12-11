import React from 'react';
import { BenefitMetric } from './BenefitMetric';
import { ChartBar, Clock, DollarSign, Brain } from 'lucide-react';

const benefitsData = [
  {
    category: 'Productivity Metrics',
    metrics: [
      {
        title: 'Task Completion Speed',
        value: '4.5x faster',
        description: 'AI automation reduces manual task completion time by 78%'
      },
      {
        title: 'Employee Productivity',
        value: '+85%',
        description: 'Workers report higher productivity with AI assistance'
      },
      {
        title: 'Process Automation',
        value: '95%',
        description: 'Percentage of repetitive tasks that can be automated'
      }
    ]
  },
  {
    category: 'Cost Benefits',
    metrics: [
      {
        title: 'Operational Costs',
        value: '-40%',
        description: 'Reduction in operational expenses through AI optimization'
      },
      {
        title: 'ROI',
        value: '312%',
        description: 'Average return on AI implementation investment'
      },
      {
        title: 'Resource Allocation',
        value: '+60%',
        description: 'Improvement in resource utilization efficiency'
      }
    ]
  },
  {
    category: 'Quality Improvements',
    metrics: [
      {
        title: 'Error Reduction',
        value: '99.9%',
        description: 'Accuracy rate in AI-powered quality control'
      },
      {
        title: 'Decision Accuracy',
        value: '+75%',
        description: 'Improvement in decision-making accuracy with AI insights'
      },
      {
        title: 'Compliance Rate',
        value: '100%',
        description: 'Regulatory compliance achievement with AI monitoring'
      }
    ]
  },
  {
    category: 'Innovation Impact',
    metrics: [
      {
        title: 'New Solutions',
        value: '3x more',
        description: 'Increase in innovative solution development speed'
      },
      {
        title: 'Market Response',
        value: '-65%',
        description: 'Reduction in time-to-market for new features'
      },
      {
        title: 'Creative Output',
        value: '+180%',
        description: 'Boost in creative content generation capacity'
      }
    ]
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Measurable Impact
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Discover how AI transforms businesses with concrete, data-driven results across key performance areas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit) => (
            <BenefitMetric key={benefit.category} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};