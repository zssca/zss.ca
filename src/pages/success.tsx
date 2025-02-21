import { NextPage } from 'next';
import Stripe from 'stripe';
import { GetServerSidePropsContext } from 'next';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import { PRICING_TIERS } from '@/features/web/data';

// Define props interface with all user info fields
interface SuccessProps {
  sessionId: string;
  customerName: string;
  planName: string;
  amountPaid: string;
  email: string;
  company: string;
  phone: string;
  address: string;
  city: string;
  country: string;
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

const SuccessPage: NextPage<SuccessProps> = ({
  sessionId,
  customerName,
  planName,
  amountPaid,
  email,
  company,
  phone,
  address,
  city,
  country,
}) => {
  return (
    <MainLayout>
      <div className="items-center justify-center">
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
            <p className="text-gray-700 mb-4">
              Your <span className="font-semibold text-blue-600">{planName || 'plan'}</span> is now active.
            </p>
            <p className="text-gray-700 mb-6">
              Paid: <span className="font-semibold text-green-600">{amountPaid || 'N/A'}</span>
            </p>

            {/* Additional User Info */}
            <div className="text-left max-w-md mx-auto mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Subscription Details</h3>
              <dl className="space-y-2 text-gray-700">
                <div>
                  <dt className="text-sm font-medium text-gray-600">Email</dt>
                  <dd className="text-sm">{email || 'N/A'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Company</dt>
                  <dd className="text-sm">{company || 'N/A'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Phone</dt>
                  <dd className="text-sm">{phone || 'N/A'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Address</dt>
                  <dd className="text-sm">
                    {address || city || country
                      ? `${address || ''}${address && (city || country) ? ', ' : ''}${city || ''}${
                          city && country ? ', ' : ''
                        }${country || ''}`.trim()
                      : 'N/A'}
                  </dd>
                </div>
              </dl>
            </div>

            <p className="text-sm text-gray-500 mb-6">Session ID: {sessionId}</p>
            <Link
              href="/"
              className="inline-block w-full max-w-xs px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-center shadow-md hover:shadow-lg"
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

  // Validate session_id
  if (!session_id || typeof session_id !== 'string') {
    console.log('Invalid or missing session_id:', session_id, 'Redirecting to home');
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    // Validate environment variables
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Missing STRIPE_SECRET_KEY environment variable');
    }
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing Supabase environment variables');
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-01-27.acacia',
    });

    // Retrieve Stripe session with expanded line_items
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

    // Extract data from session metadata
    const customerName = session.metadata?.name || 'Customer';
    const email = session.metadata?.email || session.customer_email || 'N/A';
    const company = session.metadata?.company || 'N/A';
    const phone = session.metadata?.phone || 'N/A';
    const address = session.metadata?.address || 'N/A';
    const city = session.metadata?.city || 'N/A';
    const country = session.metadata?.country || 'N/A';
    const planName = session.metadata?.planTitle || PRICING_TIERS.find(tier => tier.priceId === session.line_items?.data[0]?.price?.id)?.title || 'Unknown Plan';
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : 'N/A';
    const currency = session.currency || 'CAD';
    const amountPaid = `${amountTotal} ${currency.toUpperCase()}`;

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Insert subscription data into Supabase
    const { error } = await supabaseAdmin.from('subscriptions').insert({
      name: customerName,
      email,
      plan_name: planName,
      plan_price: amountPaid,
      stripe_session_id: session_id,
      status: 'active',
      company,
      phone,
      address: `${address}${city ? `, ${city}` : ''}${country ? `, ${country}` : ''}`.trim(),
    });

    if (error) {
      const supabaseError = error as SupabaseError;
      console.error('Supabase insertion failed:', {
        sessionId: session_id,
        errorCode: supabaseError.code,
        errorMessage: supabaseError.message,
        errorDetails: supabaseError.details,
        errorHint: supabaseError.hint,
      });
      // Continue despite error (logging only), but you could redirect if critical
    } else {
      console.log('Subscription saved successfully:', {
        sessionId: session_id,
        name: customerName,
        email,
        planName,
        planPrice: amountPaid,
        company,
        phone,
        address: `${address}${city ? `, ${city}` : ''}${country ? `, ${country}` : ''}`.trim(),
      });
    }

    // Return props to the page
    return {
      props: {
        sessionId: session_id,
        customerName,
        planName,
        amountPaid,
        email,
        company,
        phone,
        address,
        city,
        country,
      },
    };
  } catch (error) {
    const genericError = error as GenericError;
    console.error('Error in getServerSideProps:', {
      sessionId: session_id,
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