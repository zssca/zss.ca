import { loadStripe, Stripe } from '@stripe/stripe-js';

export const getStripe = async (): Promise<Stripe | null> => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  console.log('Stripe Publishable Key:', publishableKey);

  if (!publishableKey) {
    console.error('Stripe publishable key is not configured');
    throw new Error('Stripe publishable key is not configured');
  }

  try {
    console.log('Attempting to load Stripe with key:', publishableKey);
    const stripe = await loadStripe(publishableKey);
    if (!stripe) {
      console.error('Failed to load Stripe library');
      return null;
    }
    console.log('Stripe loaded successfully');
    return stripe;
  } catch (error) {
    console.error('Error loading Stripe:', error);
    return null;
  }
};