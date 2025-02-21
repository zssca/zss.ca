import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia', // Use the correct pre-release version
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { priceId, userInfo } = req.body;

  // Log incoming request for debugging
  console.log('Received request:', { priceId, userInfo });

  // Validate priceId and userInfo
  if (!priceId || !priceId.startsWith('price_')) {
    console.error('Invalid priceId:', priceId);
    return res.status(400).json({ error: 'Invalid price ID' });
  }
  if (!userInfo || !userInfo.email) {
    console.error('Missing or invalid userInfo:', userInfo);
    return res.status(400).json({ error: 'User info with email is required' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // Changed to 'subscription' for recurring plans
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      customer_email: userInfo.email,
      metadata: {
        name: userInfo.name || '',
        company: userInfo.company || '',
        phone: userInfo.phone || '',
        address: userInfo.address || '',
        city: userInfo.city || '',
        country: userInfo.country || '',
      },
    });

    console.log('Checkout session created:', { id: session.id, priceId });
    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Stripe error creating checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return res.status(500).json({ 
      error: 'Failed to create checkout session', 
      details: errorMessage 
    });
  }
}