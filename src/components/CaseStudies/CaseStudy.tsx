import React from 'react';
import { useInView } from '../../hooks/useInView';
import { LucideIcon } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  icon: LucideIcon;
  image: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  company,
  industry,
  challenge,
  solution,
  results,
  icon: Icon,
  image,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-white/5 rounded-2xl overflow-hidden transform transition-all duration-700 ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={company}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
        </div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
          <div className="p-2 bg-purple-600 rounded-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{company}</h3>
            <p className="text-sm text-gray-300">{industry}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-4">{title}</h4>
        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-2">Challenge</h5>
            <p className="text-sm text-gray-400">{challenge}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-2">Solution</h5>
            <p className="text-sm text-gray-400">{solution}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Results</h5>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};