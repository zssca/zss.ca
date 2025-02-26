import React from 'react';
import { FiStar, FiMessageSquare, FiTrendingUp, FiAward } from 'react-icons/fi';
import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Basic',
    price: '149',
    priceId: 'price_1QwoQ8P9fFsmlAaFEAd2nl51', // Replace with your actual Stripe Price ID
    description: 'Get a quick boost with reviews from us',
    note: 'Great for new businesses',
    features: ['10 Reviews'],
    cta: 'Buy Now',
    icon: React.createElement(FiStar, { className: "h-6 w-6" }),
    deliveryTime: '30-45 days', // Updated from '24-48 hours'
  },
  {
    title: 'Standard',
    price: '299',
    priceId: 'price_1QwoQwP9fFsmlAaFokTeB5H2', // Replace with your actual Stripe Price ID
    description: 'Build buzz with more reviews from ReviewBoost',
    note: 'Save $50 - Best Value!',
    features: ['25 Reviews'],
    cta: 'Buy Now',
    popular: true,
    icon: React.createElement(FiMessageSquare, { className: "h-6 w-6" }),
    deliveryTime: '45-60 days', // Updated from '48-72 hours'
  },
  {
    title: 'Pro',
    price: '499',
    priceId: 'price_1QwoRbP9fFsmlAaF5VjILX19', // Replace with your actual Stripe Price ID
    description: 'Grow fast with a big review boost from us',
    note: 'Save $146!',
    features: ['50 Reviews'],
    cta: 'Buy Now',
    icon: React.createElement(FiTrendingUp, { className: "h-6 w-6" }),
    deliveryTime: '60-75 days', // Updated from '5-7 days'
  },
  {
    title: 'Elite',
    price: '799',
    priceId: 'price_1QwoSZP9fFsmlAaFLB7RDPdX', // Replace with your actual Stripe Price ID
    description: 'Dominate with top-tier reviews from ReviewBoost',
    note: 'Save $391!',
    features: ['100 Reviews'],
    cta: 'Buy Now',
    icon: React.createElement(FiAward, { className: "h-6 w-6" }),
    deliveryTime: '75-90 days', // Updated from '7-10 days'
  },
];