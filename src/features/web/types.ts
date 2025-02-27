// src\features\web\types.ts
export type Step = 'plan' | 'info' | 'confirmation';

export interface PricingTier {
  title: string;
  price: string;
  priceId: string;
  description: string;
  note?: string;
  initialSetupTime?: string; // Added optional field
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