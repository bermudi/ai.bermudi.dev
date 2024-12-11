import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ParticleBackground } from './ParticleBackground';
import { Brain } from 'lucide-react';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Brain className="w-20 h-20 mx-auto text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            AI Transforming Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Discover how artificial intelligence is revolutionizing the way we work, create, and innovate
          </p>
          <button
            onClick={() => navigate('/solutions')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 focus:ring-4 ring-purple-400 ring-opacity-50"
          >
            Explore AI Solutions
          </button>
        </div>
      </div>
    </section>
  );
};