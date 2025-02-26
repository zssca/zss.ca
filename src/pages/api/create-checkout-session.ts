// src/pages/api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { priceId, userInfo, planTitle, mode } = req.body;

  // Validate required fields
  if (!priceId || !userInfo || !planTitle || !mode) {
    return res.status(400).json({ error: 'Missing required fields: priceId, userInfo, planTitle, or mode' });
  }

  // Ensure mode is valid
  if (!['payment', 'subscription'].includes(mode)) {
    return res.status(400).json({ error: 'Invalid mode: must be "payment" or "subscription"' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: mode, // Dynamically set to 'payment' or 'subscription' based on client input
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/canceled`,
      customer_email: userInfo.email,
      metadata: {
        name: userInfo.name || '',
        company: userInfo.company || '',
        phone: userInfo.phone || '',
        address: userInfo.address || '',
        city: userInfo.city || '',
        country: userInfo.country || '',
        planTitle,
        mode, // Store mode in metadata for debugging
      },
    });

    console.log('Checkout Session Created:', {
      sessionId: session.id,
      priceId,
      planTitle,
      mode,
      userInfo,
    });
    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe checkout session:', {
      message: (error as Error).message,
      stack: (error as Error).stack,
      priceId,
      userInfo,
      planTitle,
      mode,
    });
    return res.status(500).json({ error: (error as Error).message });
  }
}