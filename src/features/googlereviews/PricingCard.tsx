'use client';
import React from 'react';
import { FiCheck, FiZap } from 'react-icons/fi';
import { PricingTier } from './types';

interface PricingCardProps extends PricingTier {
  onSelect: () => void;
  deliveryTime?: string; // Already correctly defined as optional
}

const PricingCard: React.FC<PricingCardProps> = ({ onSelect, deliveryTime, ...tier }) => {
  return (
    <div
      className={`relative bg-white rounded-xl border p-4 w-full ${
        tier.popular ? 'border-blue-200 bg-blue-100/20 shadow-sm' : 'border-gray-200 shadow-sm'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1.5 shadow-sm">
          <FiZap className="h-3 w-3" />
          <span className="uppercase tracking-wide">Best Value</span>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-lg ${
            tier.popular ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {tier.icon}
        </div>
        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
          One-Time Payment
        </span>
      </div>

      <div className="mb-4 space-y-1">
        <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{tier.title}</h3>
        <p className="text-gray-600 text-xs leading-relaxed">{tier.description}</p>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-gray-900">${tier.price}</span>
        </div>
        {tier.note && <p className="mt-1 text-xs text-green-600">{tier.note}</p>}
        {deliveryTime && (
          <p className="mt-1 text-xs text-gray-600">Delivery: {deliveryTime}</p>
        )}
      </div>

      <div className="mb-4 border rounded-lg p-4 bg-gray-50">
        <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
          What You Get
        </p>
        {tier.features.length > 0 && (
          <div className="flex items-center gap-2 text-gray-700">
            <div
              className={`flex-shrink-0 p-1 rounded-md ${
                tier.popular ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              <FiCheck className="h-3 w-3 text-green-500" />
            </div>
            <span className="text-xs leading-tight">{tier.features[0]}</span>
          </div>
        )}
      </div>

      <button
        onClick={onSelect}
        className={`w-full px-4 py-2 rounded-lg font-medium text-sm tracking-wide transition-colors duration-200 shadow-sm ${
          tier.popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
        }`}
      >
        {tier.cta}
      </button>
    </div>
  );
};

export default PricingCard;