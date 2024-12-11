import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Bot, Brain, Lightbulb, MessageSquare } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const features = [
  {
    icon: Bot,
    title: 'Automation & Efficiency',
    description: 'Enterprise-grade automation powered by machine learning reduces manual workload by up to 80% while maintaining accuracy above 99%',
    before: 'Teams spent 60+ hours weekly on data entry, document processing, and routine task management. Error rates averaged 12% with frequent backlogs.',
    after: 'AI automation handles 90% of routine tasks with 99.9% accuracy. Staff now focuses on strategic work, saving 240+ hours monthly per team.',
    metrics: [
      { label: 'Processing Speed', value: '150x faster' },
      { label: 'Error Reduction', value: '99.9%' },
      { label: 'Cost Savings', value: '$200K/year' }
    ]
  },
  {
    icon: Brain,
    title: 'Decision Support & Analytics',
    description: 'Advanced predictive analytics and machine learning algorithms process millions of data points to provide actionable insights',
    before: 'Decision-making relied on limited historical data and intuition. Market analysis took weeks with 45% accuracy in predictions.',
    after: 'Real-time analytics process 100M+ data points daily. Predictive models achieve 92% accuracy, reducing decision time by 75%.',
    metrics: [
      { label: 'Prediction Accuracy', value: '92%' },
      { label: 'Data Processing', value: '100M+ daily' },
      { label: 'Time Saved', value: '75%' }
    ]
  },
  {
    icon: Lightbulb,
    title: 'Creative Assistance',
    description: 'AI-powered creative tools generate and refine content, designs, and ideas 10x faster than traditional methods',
    before: 'Creative teams spent 70% of time on repetitive tasks. Content creation averaged 12 hours per piece with limited variations.',
    after: 'AI generates 50+ content variations in minutes. Creative productivity increased by 300% with higher quality outputs.',
    metrics: [
      { label: 'Content Generation', value: '50x faster' },
      { label: 'Quality Score', value: '+85%' },
      { label: 'Productivity Gain', value: '300%' }
    ]
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'State-of-the-art language models understand and generate human-like text across 95+ languages with near-native fluency',
    before: 'Language barriers caused 40% communication delays. Translation services cost $0.20/word with 48-hour turnaround.',
    after: 'Real-time translation in 95+ languages. 89% reduction in communication delays. Instant processing at $0.002/word.',
    metrics: [
      { label: 'Languages', value: '95+' },
      { label: 'Cost Reduction', value: '90%' },
      { label: 'Response Time', value: 'Real-time' }
    ]
  },
];

export const Features: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          AI Capabilities
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Transform your business with enterprise-grade AI solutions that deliver measurable results
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transform transition-all duration-700 ${
                isInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};