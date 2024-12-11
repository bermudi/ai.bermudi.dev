import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

export const CTASection: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
    >
      <div className="container mx-auto px-6">
        <div 
          className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-block p-2 bg-purple-500/20 rounded-full mb-8">
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of businesses already leveraging AI to revolutionize their operations
          </p>
          <button
            onClick={() => navigate('/get-started')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 focus:ring-4 ring-purple-400 ring-opacity-50"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=2000')] opacity-5 mix-blend-overlay"></div>
    </section>
  );
};