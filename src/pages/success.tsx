import { NextPage } from 'next';
import Stripe from 'stripe';
import { GetServerSidePropsContext } from 'next';
import { supabase } from '@/lib/supabaseClient'; // Import the shared client
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import { PRICING_TIERS } from '@/features/web/data'; // Import PRICING_TIERS

interface SuccessProps {
  sessionId: string;
  customerName: string;
  planName: string;
  amountPaid: string;
}

const SuccessPage: NextPage<SuccessProps> = ({ sessionId, customerName, planName, amountPaid }) => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-7xl w-full">
          <div className="text-center">
            <svg
              className="w-16 h-16 mx-auto mb-6 text-green-500"
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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful</h1>
            <p className="text-gray-600 mb-2">
              Thank you, <span className="font-semibold text-gray-800">{customerName || 'Customer'}</span>.
            </p>
            <p className="text-gray-700 mb-2">
              Your <span className="font-semibold text-blue-600">{planName || 'plan'}</span> is now active.
            </p>
            <p className="text-gray-700 mb-4">
              Paid: <span className="font-semibold text-green-600">{amountPaid || 'N/A'}</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">Session ID: {sessionId}</p>
            <Link
              href="/"
              className="inline-block w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center shadow-md hover:shadow-lg"
            >
              Return to Home
            </Link>
          </div>
        </div>
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

    // Expand line_items to retrieve price data
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    const customerName = session.metadata?.name || 'Customer';
    // Get the priceId from the first line item and map it to the plan title
    const priceId = session.line_items?.data[0]?.price?.id;
    const planName = PRICING_TIERS.find(tier => tier.priceId === priceId)?.title || 'Unknown Plan';

    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A';
    const currency = session.currency || 'CAD';
    const amountPaid = `${amountTotal} ${currency.toUpperCase()}`;

    // Save subscription data to Supabase (SERVER-SIDE ONLY)
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