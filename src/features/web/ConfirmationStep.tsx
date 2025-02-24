'use client';
import React, { useState } from 'react';
import { FiCheck, FiArrowLeft, FiArrowRight, FiLayout, FiPenTool, FiServer, FiZap } from 'react-icons/fi';
import { PricingTier, UserInfo } from './types';

interface ConfirmationStepProps {
  userInfo: UserInfo;
  plan: PricingTier;
  onComplete: () => void;
  backStep: () => void;
  isLoading?: boolean;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  userInfo,
  plan,
  onComplete,
  backStep,
  isLoading = false,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);

    if (!plan || !userInfo.name || !userInfo.email) {
      setError('Please ensure a plan is selected and required user information (name and email) is provided.');
      return;
    }

    onComplete();
  };

  const planIcons = {
    Starter: <FiLayout className="h-6 w-6" />,
    Professional: <FiPenTool className="h-6 w-6" />,
    Enterprise: <FiServer className="h-6 w-6" />,
    Basic: <FiZap className="h-6 w-6" />,
  };

  return (
    <div className="bg-blue-50/10 rounded-lg border border-gray-200 shadow-sm p-4 max-w-4xl w-full mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center bg-green-100 text-green-700 p-2 rounded-lg mb-2">
          <FiCheck className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Order Confirmation</h3>
        <p className="text-xs text-gray-600">Review your subscription details</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">{error}</div>
      )}

      {/* Plan and User Info Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Chosen Subscription Plan Card */}
        <div
          className={`relative bg-white rounded-lg border p-6 ${
            plan.popular ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-gray-200 shadow-sm'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1.5 shadow-sm">
              <FiZap className="h-3 w-3" />
              <span className="uppercase tracking-wide">Most Popular</span>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-2 rounded-lg ${
                plan.popular ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {planIcons[plan.title as keyof typeof planIcons] || <FiZap className="h-6 w-6" />}
            </div>
            <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">Monthly</span>
          </div>

          <div className="mb-4 space-y-1">
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{plan.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{plan.description}</p>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-500 text-sm">/mo</span>
            </div>
            {plan.note && <p className="mt-1 text-xs text-gray-500 italic">{plan.note}</p>}
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">Included</h4>
            <ul className="space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <div
                    className={`flex-shrink-0 p-1 rounded-md ${
                      plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    <FiCheck className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-xs pt-[2px] leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Improved Contact Information Section */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h4>
          <div className="space-y-3">
            {/* Individual Field Containers */}
            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 bg-gray-50 border border-gray-200 rounded-md p-3">
              <dt className="text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-sm">Full Name</dt>
              <dd className="text-gray-900 font-medium text-sm">{userInfo.name || ''}</dd>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 bg-gray-50 border border-gray-200 rounded-md p-3">
              <dt className="text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-sm">Email</dt>
              <dd className="text-gray-900 font-medium text-sm">{userInfo.email || ''}</dd>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 bg-gray-50 border border-gray-200 rounded-md p-3">
              <dt className="text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-sm">Company</dt>
              <dd className="text-gray-900 font-medium text-sm">{userInfo.company || ''}</dd>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 bg-gray-50 border border-gray-200 rounded-md p-3">
              <dt className="text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-sm">Phone</dt>
              <dd className="text-gray-900 font-medium text-sm">{userInfo.phone || ''}</dd>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 bg-gray-50 border border-gray-200 rounded-md p-3">
              <dt className="text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-sm">Address</dt>
              <dd className="text-gray-900 font-medium text-sm">
                {userInfo.address || userInfo.city || userInfo.country ? (
                  <div className="space-y-1">
                    {userInfo.address && <div>{userInfo.address}</div>}
                    {(userInfo.city || userInfo.country) && (
                      <div className="text-gray-700">
                        {userInfo.city && `${userInfo.city}, `}{userInfo.country || ''}
                      </div>
                    )}
                  </div>
                ) : (
                  ''
                )}
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row gap-3 mt-6">
        <button
          onClick={backStep}
          disabled={isLoading}
          className="flex-1 px-4 py-2 rounded-lg font-medium text-sm bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={isLoading || !plan || !userInfo.name || !userInfo.email}
          className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center shadow-sm ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label={`Confirm purchase for ${plan.title} plan${isLoading ? ' (processing)' : ''}`}
        >
          {isLoading ? 'Processing...' : 'Proceed to Payment'}
          <FiArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;