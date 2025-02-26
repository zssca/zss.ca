import React from 'react';
import { FiLayout, FiPenTool, FiServer, FiZap } from 'react-icons/fi';
import { PricingTier } from './types';

export const PRICING_TIERS: PricingTier[] = [
  {
    title: 'Basic',
    price: '29',
    priceId: 'price_1Qvq87P9fFsmlAaFwG5wtLba', // Replace with actual recurring Stripe Price ID (e.g., $29/month)
    description: 'Affordable website essentials, billed monthly',
    note: 'Perfect for startups needing a simple online presence',
    features: [
      '3 Page Website (Home, About, Contact)',
      'Mobile-Friendly Design',
      'Basic SEO Setup',
      'Contact Form Included',
      'Social Media Links',
      'Domain & Hosting Included',
      'Monthly Support & Updates'
    ],
    cta: 'Subscribe Now',
    icon: React.createElement(FiZap, { className: "h-6 w-6" }),
  },
  {
    title: 'Starter',
    price: '49',
    priceId: 'price_1Qvq86P9fFsmlAaFuNiEIMYL', // Replace with actual recurring Stripe Price ID (e.g., $49/month)
    description: 'Your business online, with monthly enhancements',
    note: 'Great for growing ventures with ongoing needs',
    features: [
      '5 Page Website (Customizable)',
      'Mobile-First, Sleek Design',
      'Essential SEO Boost',
      'Contact Form + Google Map',
      'Social Media Integration',
      'Domain & Hosting Included',
      'Monthly Updates & Support'
    ],
    cta: 'Subscribe Now',
    icon: React.createElement(FiLayout, { className: "h-6 w-6" }),
  },
  {
    title: 'Professional',
    price: '149',
    priceId: 'price_1Qvpn7P9fFsmlAaFASKKtnmA', // Replace with actual recurring Stripe Price ID (e.g., $149/month)
    description: 'Pro-grade website management, billed monthly',
    note: 'Best for businesses scaling up with premium tools',
    features: [
      '15 Page Website (Tailored Layout)',
      'Unique, Custom Design',
      'Advanced SEO + Analytics',
      'Blog with Growth Tips',
      'Appointment Booking Tool',
      'Portfolio or Testimonials',
      'Domain, Hosting & Ongoing Care'
    ],
    cta: 'Subscribe Now',
    popular: true,
    icon: React.createElement(FiPenTool, { className: "h-6 w-6" }),
  },
  {
    title: 'Enterprise',
    price: '499',
    priceId: 'price_1Qvq86P9fFsmlAaFFUyGPYpa', // Replace with actual recurring Stripe Price ID (e.g., $499/month)
    description: 'Total web domination with monthly bespoke service',
    note: 'Tailored for enterprises aiming to lead',
    features: [
      'Unlimited Pages & Sections',
      'Bespoke Web Solutions',
      'Dedicated Success Manager',
      'Multilingual Capabilities',
      'Seamless API Connections',
      'Top-Tier Security',
      '24/7 Priority Support'
    ],
    cta: 'Subscribe Now',
    icon: React.createElement(FiServer, { className: "h-6 w-6" }),
  },
];