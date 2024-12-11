import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  before: string;
  after: string;
  metrics: Metric[];
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  before,
  after,
  metrics,
}) => {
  return (
    <div className="group perspective-1000">
      <div className="relative transform-gpu transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
        {/* Front of card */}
        <div className="backface-hidden p-6 bg-white/10 backdrop-blur-lg rounded-2xl">
          <Icon className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-lg font-bold text-purple-400">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 bg-[#1a1a2e] rounded-2xl border border-purple-500/20">
          <div className="space-y-4">
            <div className="p-4 bg-[#16213e] rounded-lg border border-gray-700">
              <h4 className="text-sm font-semibold text-purple-400 mb-2">Before AI</h4>
              <p className="text-sm text-gray-300">{before}</p>
            </div>
            <div className="p-4 bg-purple-900/90 rounded-lg border border-purple-500/30">
              <h4 className="text-sm font-semibold text-purple-300 mb-2">After AI</h4>
              <p className="text-sm text-gray-200">{after}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};