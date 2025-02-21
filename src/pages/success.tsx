import { NextPage } from 'next';
import Stripe from 'stripe';
import { GetServerSidePropsContext } from 'next';

interface SuccessProps {
  sessionId: string;
}

const SuccessPage: NextPage<SuccessProps> = () => {
  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>Your subscription has been successfully activated.</p>
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { session_id } = query;

  if (!session_id || typeof session_id !== 'string') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-01-27.acacia', // Consistent with create-checkout-session.ts
    });

    const session = await stripe.checkout.sessions.retrieve(session_id);
    // Optionally log session details for debugging or record-keeping
    console.log('Checkout session retrieved:', {
      sessionId: session_id,
      customerEmail: session.customer_email,
      customerName: session.metadata?.name,
      planName: session.line_items?.data[0]?.description,
      amountTotal: session.amount_total ? (session.amount_total / 100).toFixed(2) : 'Unknown',
      currency: session.currency,
    });
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
  }

  return {
    props: {
      sessionId: session_id,
    },
  };
};

export default SuccessPage;