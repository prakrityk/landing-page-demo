import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';
import { PRICING_TIERS } from '../components/utils/constants';

const Pricing = ({ onBookingOpen }) => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 mesh-gradient">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-plum-dark mb-4 tracking-tight">
            Pricing Plans
          </h2>
          <p className="text-lg md:text-xl text-plum-dark/80 max-w-2xl mx-auto">
            Choose the perfect plan for your wellness journey
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-plum-dark text-cream px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Sparkles size={16} />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              <GlassCard 
                className={`h-full flex flex-col p-8 ${
                  tier.popular 
                    ? 'border-2 border-plum shadow-2xl' 
                    : 'border border-lavender/30'
                }`}
                variant="strong"
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-semibold text-plum-dark mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-plum-dark">
                    {tier.price}
                  </span>
                  <span className="text-plum-dark/70 ml-2">
                    {tier.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-lavender/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-plum-dark" strokeWidth={3} />
                      </div>
                      <span className="text-plum-dark/90 text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onBookingOpen(tier.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-plum-dark hover:bg-plum text-cream shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-plum hover:bg-plum-dark text-cream hover:scale-105'
                  }`}
                >
                  Get Started
                </button>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;