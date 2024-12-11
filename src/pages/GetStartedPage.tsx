import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const GetStartedPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    useCase: '',
    budget: 'medium'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Get Started with AI
            </h1>
            <p className="text-xl text-center text-gray-300 mb-12">
              Begin your AI transformation journey in just a few steps
            </p>

            <div className="flex justify-center mb-12">
              {[1, 2, 3].map((number) => (
                <div key={number} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= number ? 'bg-purple-600' : 'bg-gray-700'
                    }`}
                  >
                    {step > number ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-white">{number}</span>
                    )}
                  </div>
                  {number < 3 && (
                    <div
                      className={`w-20 h-1 ${
                        step > number ? 'bg-purple-600' : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center space-x-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center space-x-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Describe Your Use Case</label>
                  <textarea
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                    rows={4}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="low">$1,000 - $5,000</option>
                    <option value="medium">$5,000 - $20,000</option>
                    <option value="high">$20,000+</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center space-x-2"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};