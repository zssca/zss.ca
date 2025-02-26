export type Step = 'plan' | 'info' | 'confirmation';

export interface PricingTier {
  title: string;
  price: string;
  priceId: string;
  description: string;
  note?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactElement;
  deliveryTime?: string; // Added deliveryTime as an optional property
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