import React from 'react';
import { ArrowRight, Bot, Brain, Lightbulb, MessageSquare } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const solutions = [
  {
    icon: Bot,
    title: 'Enterprise Automation',
    description: 'End-to-end automation solutions powered by advanced AI',
    features: [
      'Intelligent Process Automation',
      'Document Processing & Analysis',
      'Workflow Optimization',
      'Quality Control Automation'
    ],
    price: '$2,999',
    popular: false
  },
  {
    icon: Brain,
    title: 'Advanced Analytics',
    description: 'Transform data into actionable business insights',
    features: [
      'Predictive Analytics',
      'Real-time Data Processing',
      'Custom ML Models',
      'Automated Reporting'
    ],
    price: '$3,999',
    popular: true
  },
  {
    icon: Lightbulb,
    title: 'Creative AI Suite',
    description: 'AI-powered tools for content creation and design',
    features: [
      'Content Generation',
      'Design Automation',
      'Image Enhancement',
      'Brand Asset Creation'
    ],
    price: '$1,999',
    popular: false
  },
  {
    icon: MessageSquare,
    title: 'NLP Solutions',
    description: 'Advanced language processing and analysis tools',
    features: [
      'Multi-language Support',
      'Sentiment Analysis',
      'Automated Translation',
      'Conversation Analytics'
    ],
    price: '$2,499',
    popular: false
  }
];

export const SolutionsPage: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Choose the perfect AI solution to transform your business operations
          </p>
          
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 transform transition-all duration-700 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {solution.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-purple-600/20 mb-6">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <ArrowRight className="h-4 w-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-white mb-6">{solution.price}</div>
                  
                  <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};