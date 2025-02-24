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
      <div className="pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto bg-white rounded-xl transition-all duration-300 hover:shadow-sm max-w-7xl">
            <div className="text-center">
              {/* Animated Checkmark */}
              <div className="mb-8 animate-scale-in">
                <div className="mx-auto flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Header Section */}
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Payment Successful!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Welcome to <span className="font-semibold text-blue-600">{planName}</span> plan
              </p>

              {/* Price Bubble */}
              <div className="inline-flex items-center bg-blue-50 rounded-full py-2 px-6 mb-8">
                <span className="text-2xl font-bold text-blue-700">{amountPaid}</span>
                <span className="ml-2 text-sm font-medium text-blue-600">paid</span>
              </div>

              {/* User Details Grid */}
              <div className="bg-gray-50 rounded-xl p-6 mb-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
                  Subscription Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DetailItem label="Name" value={customerName} icon="user" />
                  <DetailItem label="Email" value={email} icon="email" />
                  <DetailItem label="Company" value={company} icon="business" />
                  <DetailItem label="Phone" value={phone} icon="phone" />
                  <DetailItem 
                    label="Address" 
                    value={`${address}${city ? `, ${city}` : ''}${country ? `, ${country}` : ''}`} 
                    icon="location"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Go to Dashboard
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              {/* Session ID */}
              <p className="mt-8 text-sm text-gray-500">
                Transaction ID: <span className="font-mono text-gray-600">{sessionId}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Reusable DetailItem component
const DetailItem = ({ label, value, icon }: { label: string; value: string; icon: string }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0">
      <span className="text-gray-400">
        {icon === 'user' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )}
        {icon === 'email' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {icon === 'business' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )}
        {icon === 'phone' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )}
        {icon === 'location' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
      </span>
    </div>
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value || 'N/A'}</dd>
    </div>
  </div>
);

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