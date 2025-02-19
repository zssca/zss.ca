import { NextPage } from 'next';
import { sendEmail } from '@/features/web/lib/sendgrid'; // Adjust the path as needed
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
      apiVersion: "2025-01-27.acacia",
    });

    const session = await stripe.checkout.sessions.retrieve(session_id);
    const customerEmail = session.customer_email || 'No email provided';
    const customerName = session.metadata?.name || 'No name provided';
    const planName = session.line_items?.data[0]?.description || 'Unknown plan';
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'Unknown';
    const currency = session.currency || 'USD';

    const emailHtml = `
      <h1>New Purchase Confirmation</h1>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Customer Email:</strong> ${customerEmail}</p>
      <p><strong>Plan Purchased:</strong> ${planName}</p>
      <p><strong>Amount Paid:</strong> ${amountTotal} ${currency.toUpperCase()}</p>
      <p><strong>Session ID:</strong> ${session_id}</p>
    `;

    await sendEmail(
      process.env.EMAIL || 'info@zss.ca',
      'New Purchase Confirmation',
      emailHtml
    );
  } catch (error) {
    console.error('Error sending success email:', error);
  }

  return {
    props: {
      sessionId: session_id,
    },
  };
};

export default SuccessPage;