import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Initialize Stripe with secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia', // Use the specified pre-release version
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Restrict to POST requests only
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Extract data from request body
  const { priceId, userInfo, planTitle } = req.body;

  // Log incoming request for debugging purposes
  console.log('Received checkout session request:', { priceId, userInfo, planTitle });

  // Validate environment variables
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('Missing STRIPE_SECRET_KEY in environment variables');
    return res.status(500).json({ error: 'Server configuration error: Stripe key missing' });
  }

  // Validate required fields
  if (!priceId || typeof priceId !== 'string' || !priceId.startsWith('price_')) {
    console.error('Invalid or missing priceId:', priceId);
    return res.status(400).json({ error: 'Invalid or missing price ID' });
  }

  if (!userInfo || typeof userInfo !== 'object') {
    console.error('Missing or invalid userInfo:', userInfo);
    return res.status(400).json({ error: 'User information is required' });
  }

  if (!userInfo.email || typeof userInfo.email !== 'string' || !/\S+@\S+\.\S+/.test(userInfo.email)) {
    console.error('Invalid or missing email in userInfo:', userInfo.email);
    return res.status(400).json({ error: 'A valid email is required' });
  }

  if (!planTitle || typeof planTitle !== 'string') {
    console.error('Invalid or missing planTitle:', planTitle);
    return res.status(400).json({ error: 'Plan title is required' });
  }

  try {
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // For recurring subscription plans
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/pricing`, // Updated to a more relevant cancel URL
      customer_email: userInfo.email, // Pre-fill email for Stripe
      metadata: {
        name: userInfo.name || '',
        email: userInfo.email, // Duplicate in metadata for consistency
        company: userInfo.company || '',
        phone: userInfo.phone || '',
        address: userInfo.address || '',
        city: userInfo.city || '',
        country: userInfo.country || '',
        planTitle, // Include plan title in metadata
      },
      // Optionally collect billing address if needed
      billing_address_collection: 'auto',
    });

    // Log successful session creation
    console.log('Checkout session created successfully:', {
      id: session.id,
      priceId,
      email: userInfo.email,
      planTitle,
    });

    // Return session ID to client
    return res.status(200).json({ id: session.id });
  } catch (error) {
    // Enhanced error logging and response
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error creating Stripe checkout session:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      priceId,
      userInfo,
      planTitle,
    });

    return res.status(500).json({
      error: 'Failed to create checkout session',
      details: errorMessage,
    });
  }
}