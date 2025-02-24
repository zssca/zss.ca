import { NextPage } from 'next';
import Stripe from 'stripe';
import { GetServerSidePropsContext } from 'next';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import { PRICING_TIERS } from '@/features/web/data';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaEnvelope, 
  FaBuilding, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaArrowRight 
} from 'react-icons/fa';

// Props interface
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

// Error interfaces
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
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mx-auto bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              {/* Animated Checkmark */}
              <motion.div 
                className="mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="mx-auto flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                  <motion.svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </div>
              </motion.div>

              {/* Header Section */}
              <motion.h1 
                className="text-4xl font-extrabold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Payment Successful!
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Welcome to <span className="font-semibold text-blue-600">{planName}</span> plan
              </motion.p>

              {/* Price Bubble */}
              <motion.div 
                className="inline-flex items-center bg-blue-50 rounded-full py-2 px-6 mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-2xl font-bold text-blue-700">{amountPaid}</span>
                <span className="ml-2 text-sm font-medium text-blue-600">paid</span>
              </motion.div>

              {/* User Details Grid */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
                  Subscription Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DetailItem label="Name" value={customerName} icon={<FaUser />} />
                  <DetailItem label="Email" value={email} icon={<FaEnvelope />} />
                  <DetailItem label="Company" value={company} icon={<FaBuilding />} />
                  <DetailItem label="Phone" value={phone} icon={<FaPhone />} />
                  <DetailItem 
                    label="Address" 
                    value={`${address}${city ? `, ${city}` : ''}${country ? `, ${country}` : ''}`} 
                    icon={<FaMapMarkerAlt />}
                  />
                </div>
              </motion.div>

              {/* Action Button */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Go to Dashboard
                  <FaArrowRight className="ml-2 -mr-1 w-5 h-5" />
                </Link>
              </motion.div>

              {/* Session ID */}
              <motion.p 
                className="mt-8 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Transaction ID: <span className="font-mono text-xs text-gray-600">{sessionId}</span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

// Reusable DetailItem component
const DetailItem = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 text-gray-400">
      {icon}
    </div>
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value || 'N/A'}</dd>
    </div>
  </div>
);

// getServerSideProps remains unchanged
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context;
  const { session_id } = query;

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
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Missing STRIPE_SECRET_KEY environment variable');
    }
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing Supabase environment variables');
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-01-27.acacia',
    });

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['line_items'],
    });

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

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

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