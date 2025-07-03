// src\features\web\data.ts
import React from 'react';
import { FiLayout, FiPenTool, FiServer, FiZap } from 'react-icons/fi';
import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Basic',
    price: '129',
    priceId: 'price_1Qvq87P9fFsmlAaFwG5wtLba', // Replace with your actual Stripe Price ID
    description: 'Launch your presence with a sleek, no-fuss Next.js website—ideal for tight budgets and new ventures.',
    note: 'Get online quickly with the essentials.',
    features: [
      'Quick launch: 3-page Next.js site',
      'Mobile-ready design',
      'Essential SEO & SSL security',
      'Lead capture with contact form',
      'Social media integration',
      'Free domain & hosting (1st year)',
      'Basic upkeep & content tips',
    ],
    cta: 'Start Simple',
    icon: React.createElement(FiZap, { className: 'h-6 w-6' }),
  },
  {
    title: 'Starter',
    price: '249',
    priceId: 'price_1Qvq86P9fFsmlAaFuNiEIMYL', // Replace with your actual Stripe Price ID
    description: 'Strengthen your brand with a polished Next.js website that caters to growing businesses.',
    note: 'Expand your reach with more features.',
    features: [
      'Grow your reach: 5-page site',
      'Boost visibility with enhanced SEO',
      'Custom forms for better engagement',
      'Optional blog to share your story',
      'Track success with analytics',
      'Free domain & hosting (1st year)',
      'Reliable maintenance & support',
    ],
    cta: 'Launch Now',
    icon: React.createElement(FiLayout, { className: 'h-6 w-6' }),
  },
  {
    title: 'Professional',
    price: '449',
    priceId: 'price_1Qvpn7P9fFsmlAaFASKKtnmA', // Replace with your actual Stripe Price ID
    description: 'Scale your online presence with up to 15 pages, advanced SEO, and Next.js performance.',
    note: 'Grow your business with advanced tools.',
    features: [
      'Scale up: 15-page site',
      'Dominate search with advanced SEO',
      'Convert more with custom features',
      'Integrate marketing tools seamlessly',
      'Gain insights with detailed analytics',
      'Free domain & hosting (1st year)',
      'Priority support & expert guidance',
    ],
    cta: 'Level Up',
    popular: true,
    icon: React.createElement(FiPenTool, { className: 'h-6 w-6' }),
  },
  {
    title: 'Enterprise',
    price: '1499',
    priceId: 'price_1Qvq86P9fFsmlAaFFUyGPYpa', // Replace with your actual Stripe Price ID
    description: 'Dominate your industry with a fully customized Next.js platform, built for large-scale operations.',
    note: 'Dominate your industry with a custom solution.',
    features: [
      'Unlimited pages for maximum impact',
      'Global reach with multi-language SEO',
      'Tailored solutions with custom dev',
      'Enterprise-grade security & scalability',
      '24/7 support with dedicated team',
      'Advanced analytics & strategic insights',
      'Free domain & hosting (1st year)',
    ],
    cta: 'Go Big',
    icon: React.createElement(FiServer, { className: 'h-6 w-6' }),
  },
];
