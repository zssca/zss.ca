import { loadStripe, Stripe } from '@stripe/stripe-js';

export const getStripe = (): Promise<Stripe | null> => {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error('Stripe publishable key is not configured');
  }
  return loadStripe(publishableKey);
};