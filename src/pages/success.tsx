import { NextPage } from 'next';
import Stripe from 'stripe';
import { GetServerSidePropsContext } from 'next';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout'; // Updated import path

// Initialize Supabase client (use environment variables from your .env.local)
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role key for server-side operations
const supabase = createClient(supabaseUrl, supabaseKey);

interface SuccessProps {
  sessionId: string;
  customerName: string;
  planName: string;
  amountPaid: string; // e.g., "29.00 USD"
}

const SuccessPage: NextPage<SuccessProps> = ({ sessionId, customerName, planName, amountPaid }) => {
  return (
    <MainLayout>
      <div className="p-6 text-center">
        <svg
          className="w-12 h-12 mx-auto mb-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-xl font-medium text-gray-900 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-2">
          Thank you, <span className="font-medium">{customerName || 'Customer'}</span>.
        </p>
        <p className="text-gray-700 mb-2">
          Your <span className="font-medium">{planName || 'plan'}</span> is active.
        </p>
        <p className="text-gray-700 mb-4">
          Paid: <span className="font-medium">{amountPaid || 'N/A'}</span>
        </p>
        <p className="text-xs text-gray-500 mb-4">Session ID: {sessionId}</p>
        <Link
          href="/"
          className="inline-block px-3 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-sm"
        >
          Return to Home
        </Link>
      </div>
    </MainLayout>
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
      apiVersion: '2025-01-27.acacia',
    });

    const session = await stripe.checkout.sessions.retrieve(session_id);
    const customerName = session.metadata?.name || 'Customer';
    const planName = session.line_items?.data[0]?.description || 'Unknown Plan';
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A';
    const currency = session.currency || 'USD';
    const amountPaid = `${amountTotal} ${currency.toUpperCase()}`;

    // Save subscription data to Supabase
    const { error } = await supabase.from('subscriptions').insert({
      customer_name: customerName,
      customer_email: session.customer_email || '',
      plan_name: planName,
      amount_paid: amountPaid,
      stripe_session_id: session_id,
      subscription_status: 'active',
    });

    if (error) {
      console.error('Error saving subscription to Supabase:', error);
    }

    console.log('Checkout success: session retrieved and saved:', {
      sessionId: session_id,
      customerName,
      planName,
      amountPaid,
    });

    return {
      props: {
        sessionId: session_id,
        customerName,
        planName,
        amountPaid,
      },
    };
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    return {
      props: {
        sessionId: session_id,
        customerName: 'Customer',
        planName: 'Unknown Plan',
        amountPaid: 'N/A',
      },
    };
  }
};

export default SuccessPage;