'use client';
import React, { useState } from 'react';
import { PRICING_TIERS } from './data';
import { Step, PricingTier, UserInfo } from './types';
import PricingCard from './PricingCard';
import { Stepper } from './StepIndicator';
import InfoStep from './InfoStep';
import ConfirmationStep from './ConfirmationStep';
import { getStripe } from './lib/stripe';
import { sendEmail } from './lib/sendgrid'; // Adjust path as needed

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
    country: 'Canada',
  });
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const getStepIndex = (step: Step): number => {
    const steps: Step[] = ['plan', 'info', 'confirmation'];
    return steps.indexOf(step);
  };

  const handlePlanSelect = (plan: PricingTier) => {
    setSelectedPlan(plan);
    setCurrentStep('info');
  };

  const validateUserInfo = (info: UserInfo): boolean => {
    return !!info.name.trim() && !!info.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email);
  };

  const handleCheckout = async () => {
    if (!selectedPlan) {
      alert('Please select a plan first.');
      return;
    }

    if (!selectedPlan.priceId || !selectedPlan.priceId.startsWith('price_')) {
      console.error('Invalid price ID:', selectedPlan.priceId);
      alert('Invalid plan selected. Please try again.');
      return;
    }

    setIsCheckingOut(true);
    const stripe = await getStripe();
    if (!stripe) {
      setIsCheckingOut(false);
      console.error('Stripe failed to load');
      alert('Stripe failed to load. Please try again.');
      return;
    }

    try {
      const sanitizedUserInfo = {
        name: userInfo.name.slice(0, 500),
        email: userInfo.email.slice(0, 500),
        company: userInfo.company.slice(0, 500),
        phone: userInfo.phone.slice(0, 500),
        address: userInfo.address.slice(0, 500),
        city: userInfo.city.slice(0, 500),
        country: userInfo.country.slice(0, 500),
      };

      console.log('Sending request to create checkout session with priceId:', selectedPlan.priceId, 'and userInfo:', sanitizedUserInfo);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: selectedPlan.priceId, userInfo: sanitizedUserInfo }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API response error:', errorText);
        throw new Error(`Failed to create checkout session: ${errorText}`);
      }

      const { id } = await response.json();
      console.log('Checkout session created with ID:', id);

      // Send email notification for checkout initiation
      const emailHtml = `
        <h1>Checkout Initiated</h1>
        <p><strong>Customer Name:</strong> ${sanitizedUserInfo.name}</p>
        <p><strong>Customer Email:</strong> ${sanitizedUserInfo.email}</p>
        <p><strong>Selected Plan:</strong> ${selectedPlan.title}</p>
        <p><strong>Plan Price:</strong> ${selectedPlan.price} CAD</p>
        <p><strong>Checkout Session ID:</strong> ${id}</p>
      `;
      try {
        await sendEmail(
          process.env.EMAIL || 'info@zss.ca',
          'New Checkout Initiated',
          emailHtml
        );
        console.log('Checkout initiation email sent');
      } catch (emailError) {
        console.error('Failed to send checkout initiation email:', emailError);
      }

      const result = await stripe.redirectToCheckout({ sessionId: id });
      console.log('Redirect result:', result); // Debug logging
      if (result.error) {
        console.error('Stripe redirect error:', result.error);
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred during checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-sm mx-auto mb-4">
          <Stepper 
            steps={['Plan', 'Info', 'Confirm']}
            currentStep={getStepIndex(currentStep)}
          />
        </div>

        {currentStep === 'plan' ? (
          <div className="grid grid-cols-1 pt-8 md:grid-cols-4 gap-4">
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
                  } else {
                    alert('Please fill in all required fields (name and email) correctly.');
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