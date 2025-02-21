// src\features\web\types.ts
export type Step = 'plan' | 'info' | 'confirmation';

export interface PricingTier {
  title: string;
  price: string;
  priceId: string; // Add this line to include priceId
  description: string;
  note?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactElement;
}

export interface UserInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  address: string;
  city: string;
  country: string;
}