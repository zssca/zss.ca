import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Buffer } from 'node:buffer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// Extend NextApiRequest to include ReadableStream methods if needed, or cast directly
interface CustomNextApiRequest extends NextApiRequest {
  arrayBuffer(): Promise<ArrayBuffer>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const sig = req.headers['stripe-signature'] as string;
  if (!sig) {
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).json({ error: 'Stripe webhook secret not configured' });
  }

  let event: Stripe.Event;
  const rawBody = Buffer.from(await (req as CustomNextApiRequest).arrayBuffer()); // Cast req to access arrayBuffer()

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).json({ error: `Webhook Error: ${(err as Error).message}` });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('Checkout Session Completed:', session);

      const customerEmail = session.customer_email || 'No email provided';
      const customerName = session.metadata?.name || 'No name provided';
      const planName = session.line_items?.data[0]?.description || 'Unknown plan';
      const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'Unknown';
      const currency = session.currency || 'USD';

      const emailHtml = `
        <h1>Purchase Confirmation</h1>
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Customer Email:</strong> ${customerEmail}</p>
        <p><strong>Plan Purchased:</strong> ${planName}</p>
        <p><strong>Amount Paid:</strong> ${amountTotal} ${currency.toUpperCase()}</p>
        <p><strong>Session ID:</strong> ${session.id}</p>
      `;

      try {
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: process.env.EMAIL || 'info@zss.ca',
            subject: 'Purchase Confirmation',
            html: emailHtml,
          }),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error('Failed to send purchase confirmation email via API:', errorText);
        } else {
          console.log('Purchase confirmation email triggered via API');
        }
      } catch (error) {
        console.error('Error triggering purchase confirmation email:', error);
        // Continue processing even if email fails
      }

      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return res.status(200).json({ received: true });
}