'use client';
import React, { useState } from 'react';
import { PRICING_TIERS } from './data';
import { Step, PricingTier, UserInfo } from './types';
import PricingCard from './PricingCard';
import { Stepper } from './StepIndicator';
import InfoStep from './InfoStep';
import ConfirmationStep from './ConfirmationStep';
import { getStripe } from './lib/stripe';

const PricingTable = () => {
  const [currentStep, setCurrentStep] = useState<Step>('plan');
  const [selectedPlan, setSelectedPlan] = useState<PricingTier | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    city: '',
    country: 'Canada', // Default country
  });
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added for error feedback

  // Map steps to indices for Stepper
  const getStepIndex = (step: Step): number => {
    const steps: Step[] = ['plan', 'info', 'confirmation'];
    return steps.indexOf(step);
  };

  // Handle plan selection and move to next step
  const handlePlanSelect = (plan: PricingTier) => {
    setSelectedPlan(plan);
    setCurrentStep('info');
    setError(null); // Clear any previous errors
  };

  // Validate user info before proceeding
  const validateUserInfo = (info: UserInfo): boolean => {
    const isNameValid = !!info.name.trim();
    const isEmailValid = !!info.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email);
    return isNameValid && isEmailValid;
  };

  // Handle checkout process
  const handleCheckout = async () => {
    if (!selectedPlan) {
      setError('Please select a plan first.');
      return;
    }

    if (!selectedPlan.priceId || !selectedPlan.priceId.startsWith('price_')) {
      console.error('Invalid price ID:', selectedPlan.priceId);
      setError('Invalid plan selected. Please try again.');
      return;
    }

    if (!validateUserInfo(userInfo)) {
      setError('Please provide a valid name and email.');
      return;
    }

    setIsCheckingOut(true);
    setError(null); // Clear previous errors

    try {
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe.js failed to load');
      }

      // Sanitize userInfo to prevent excessively long inputs (Stripe metadata has limits)
      const sanitizedUserInfo = {
        name: userInfo.name.slice(0, 500),
        email: userInfo.email.slice(0, 500),
        company: userInfo.company.slice(0, 500),
        phone: userInfo.phone.slice(0, 500),
        address: userInfo.address.slice(0, 500),
        city: userInfo.city.slice(0, 500),
        country: userInfo.country.slice(0, 500),
      };

      console.log('Initiating checkout with:', {
        priceId: selectedPlan.priceId,
        userInfo: sanitizedUserInfo,
        planTitle: selectedPlan.title,
      });

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: selectedPlan.priceId,
          userInfo: sanitizedUserInfo,
          planTitle: selectedPlan.title, // Include planTitle as required by API
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error response:', errorData);
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { id: sessionId } = await response.json();
      console.log('Checkout session created:', { sessionId });

      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
      if (stripeError) {
        console.error('Stripe redirect error:', stripeError);
        throw new Error(stripeError.message);
      }

      // Note: onComplete is typically not reached due to redirect, but kept for consistency
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      console.error('Checkout error:', errorMessage);
      setError(`Checkout failed: ${errorMessage}`);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        {/* Stepper */}
        <div className="max-w-sm mx-auto mb-6">
          <Stepper
            steps={['Plan', 'Info', 'Confirm']}
            currentStep={getStepIndex(currentStep)}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-sm max-w-7xl mx-auto">
            {error}
          </div>
        )}

        {/* Step Content */}
        {currentStep === 'plan' ? (
          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <PricingCard
                key={tier.title}
                {...tier}
                onSelect={() => handlePlanSelect(tier)}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {currentStep === 'info' && (
              <InfoStep
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                nextStep={() => {
                  if (validateUserInfo(userInfo)) {
                    setCurrentStep('confirmation');
                    setError(null);
                  } else {
                    setError('Please fill in all required fields (name and email) correctly.');
                  }
                }}
                backStep={() => setCurrentStep('plan')}
                selectedPlan={selectedPlan}
              />
            )}

            {currentStep === 'confirmation' && selectedPlan && (
              <ConfirmationStep
                userInfo={userInfo}
                plan={selectedPlan}
                onComplete={handleCheckout}
                backStep={() => setCurrentStep('info')}
                isLoading={isCheckingOut}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTable;