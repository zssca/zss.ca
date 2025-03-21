// src\features\web\PricingCard.tsx

'use client';
import React, { useState } from 'react';
import { FiCheck, FiLayout, FiPenTool, FiServer, FiZap, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { PricingTier } from './types';

interface PricingCardProps extends PricingTier {
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ onSelect, ...tier }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const planIcons = {
    'Basic': <FiZap className="h-6 w-6" />,
    'Starter': <FiLayout className="h-6 w-6" />,
    'Professional': <FiPenTool className="h-6 w-6" />,
    'Enterprise': <FiServer className="h-6 w-6" />,
  };

  return (
    <div className={`relative bg-white rounded-xl border p-4
      ${tier.popular 
        ? 'border-blue-200 bg-blue-100/20 shadow-sm'
        : 'border-gray-200 shadow-sm'}
      w-full`}>
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 
          text-xs font-medium rounded-full flex items-center gap-1.5 shadow-sm">
          <FiZap className="h-3 w-3" />
          <span className="uppercase tracking-wide">Most Popular</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg
          ${tier.popular 
            ? 'bg-blue-100 text-blue-700'
            : 'bg-gray-100 text-gray-600'}`}>
          {planIcons[tier.title as keyof typeof planIcons]}
        </div>
        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">Billed Monthly</span>
      </div>

      <div className="mb-4 space-y-1">
        <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{tier.title}</h3>
        <p className="text-gray-600 text-xs leading-relaxed">{tier.description}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-gray-900">${tier.price}</span>
          <span className="text-gray-500 text-sm">/mo</span>
        </div>
        {tier.note && (
          <p className="mt-1 text-xs text-gray-500 italic">{tier.note}</p>
        )}
        {tier.initialSetupTime && (
          <p className="mt-1 text-xs text-gray-600">
            <span className="font-medium">Initial Setup:</span> {tier.initialSetupTime}
          </p>
        )}
      </div>

      <div className="mb-4 border rounded-lg pl-4 pr-2 py-2">
        <button 
          onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
          className="md:hidden w-full flex justify-between items-center text-xs font-medium text-gray-700 uppercase tracking-wide"
          aria-expanded={isFeaturesOpen}
          aria-controls={`features-${tier.title}`}
        >
          <span>Features</span>
          <span className={`p-1 rounded-md bg-blue-50 ${isFeaturesOpen ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}>
            {isFeaturesOpen ? <FiChevronUp className="h-4 w-4" /> : <FiChevronDown className="h-4 w-4" />}
          </span>
        </button>
        
        <div 
          id={`features-${tier.title}`}
          className={`${isFeaturesOpen ? 'block' : 'hidden'} md:block`}
        >
          <h4 className="hidden md:block text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">Included</h4>
          <ul className="space-y-2 pt-4 pb-2">
            {tier.features.map((feature, i) => (
              <li 
                key={i} 
                className="flex items-start gap-2 text-gray-700"
              >
                <div className={`flex-shrink-0 p-1 rounded-md ${tier.popular ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  <FiCheck className="h-3 w-3 text-green-500" />
                </div>
                <span className="text-xs pt-[3px] leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={onSelect}
        className={`w-full px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-colors duration-200 shadow-sm
          ${tier.popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'}`}
      >
        {tier.cta}
      </button>
    </div>
  );
};

export default PricingCard;