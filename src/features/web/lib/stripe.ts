import { loadStripe } from '@stripe/stripe-js';

export const getStripe = async () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  const stripe = await stripePromise;
  if (!stripe) {
    console.error('Stripe failed to initialize');
  }
  return stripe;
};