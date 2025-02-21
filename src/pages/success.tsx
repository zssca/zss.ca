import { NextPage } from 'next';
import Stripe from 'stripe';
import { GetServerSidePropsContext } from 'next';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import { PRICING_TIERS } from '@/features/web/data';

// Define props interface
interface SuccessProps {
  sessionId: string;
  customerName: string;
  planName: string;
  amountPaid: string;
}

// Define error interfaces
interface SupabaseError {
  code?: string;
  message: string;
  details?: string | null;
  hint?: string | null;
}

interface GenericError {
  message: string;
  stack?: string;
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
    console.log('Invalid or missing session_id, redirecting to home');
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    // Validate environment variables
    if (!process.env.STRIPE_SECRET_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing required environment variables');
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-01-27.acacia',
    });

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    const customerName = session.metadata?.name || 'Customer';
    const priceId = session.line_items?.data[0]?.price?.id;
    const planName = PRICING_TIERS.find(tier => tier.priceId === priceId)?.title || 'Unknown Plan';
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A';
    const currency = session.currency || 'CAD';
    const amountPaid = `${amountTotal} ${currency.toUpperCase()}`;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { error } = await supabaseAdmin.from('subscriptions').insert({
      name: customerName,
      email: session.customer_email || '',
      plan_name: planName,
      plan_price: amountPaid,
      stripe_session_id: session_id,
      status: 'active',
    });

    if (error) {
      const supabaseError = error as SupabaseError;
      console.error('Supabase insertion failed:', {
        sessionId: session_id,
        errorCode: supabaseError.code,
        errorMessage: supabaseError.message,
        errorDetails: supabaseError.details,
      });
      // Optionally throw an error to redirect
      // throw new Error(`Supabase error: ${supabaseError.message}`);
    } else {
      console.log('Subscription saved successfully:', {
        sessionId: session_id,
        name: customerName,
        planName,
        planPrice: amountPaid,
      });
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
    const genericError = error as GenericError;
    console.error('Error in getServerSideProps:', {
      session_id,
      message: genericError.message,
      stack: genericError.stack,
    });
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
};

export default SuccessPage;