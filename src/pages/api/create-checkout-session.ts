import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { priceId, userInfo } = req.body;

    console.log('Received priceId:', priceId); // Debug log

    if (!priceId || !priceId.startsWith('price_')) {
      return res.status(400).json({ error: 'Invalid price ID' });
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
        mode: 'payment', // Updated to 'payment' for one-time Prices
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
        customer_email: userInfo.email,
        metadata: {
          name: userInfo.name,
          company: userInfo.company,
          phone: userInfo.phone,
          address: userInfo.address,
          city: userInfo.city,
          country: userInfo.country,
        },
      });
      console.log('Checkout session created with ID:', session.id);
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error('Stripe error:', error);
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}