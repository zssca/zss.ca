// data.ts
import React from 'react';
import { FiLayout, FiPenTool, FiServer, FiZap } from 'react-icons/fi';
import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Basic',
    price: '29',
    priceId: 'price_Basic', // Example ID, replace with actual Stripe price ID
    description: 'Get online fast with a simple, stunning website',
    note: 'Perfect for startups and side hustles on a budget',
    features: [
      '3 Page Website (Home, About, Contact)',
      'Mobile-Friendly Design',
      'Basic SEO Setup',
      'Contact Form Included',
      'Social Media Links',
      'Free Domain (1st Year)',
      '6 Months Hosting & Support'
    ],
    cta: 'Start Simple',
    icon: React.createElement(FiZap, { className: "h-6 w-6" }),
  },
  {
    title: 'Starter',
    price: '49',
    priceId: 'price_Starter', // Example ID, replace with actual Stripe price ID
    description: 'Launch your business with a standout online presence',
    note: 'Great for new ventures ready to shine',
    features: [
      '5 Page Website (Customizable)',
      'Mobile-First, Sleek Design',
      'Essential SEO Boost',
      'Contact Form + Google Map',
      'Social Media Integration',
      'Free Domain (1st Year)',
      'Business Hours Showcase',
      '1 Year Hosting & Updates'
    ],
    cta: 'Launch Now',
    icon: React.createElement(FiLayout, { className: "h-6 w-6" }),
  },
  {
    title: 'Professional',
    price: '149',
    priceId: 'price_Professional', // Example ID, replace with actual Stripe price ID
    description: 'Grow confidently with a pro-level website',
    note: 'Ideal for established businesses stepping up',
    features: [
      '15 Page Website (Tailored Layout)',
      'Unique, Custom Design',
      'Advanced SEO + Analytics',
      'Blog with Growth Tips',
      'Appointment Booking Tool',
      'Portfolio or Testimonials',
      'Multi-Contact Options',
      'Premium Features Add-Ons',
      '3 Years Hosting & Care'
    ],
    cta: 'Level Up',
    popular: true,
    icon: React.createElement(FiPenTool, { className: "h-6 w-6" }),
  },
  {
    title: 'Enterprise',
    price: '499',
    priceId: 'price_Enterprise', // Example ID, replace with actual Stripe price ID
    description: 'Scale big with a custom-built digital hub',
    note: 'Designed for businesses ready to dominate',
    features: [
      'Unlimited Pages & Sections',
      'Bespoke Web Solutions',
      'Dedicated Success Manager',
      'Multilingual Capabilities',
      'Seamless API Connections',
      'Top-Tier Security',
      '24/7 Priority Support',
      'Monthly Growth Insights',
      'Team Training Included'
    ],
    cta: 'Go Big',
    icon: React.createElement(FiServer, { className: "h-6 w-6" }),
  },
];