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
    country: 'Canada',
  });

  const getStepIndex = (step: Step): number => {
    const steps: Step[] = ['plan', 'info', 'confirmation'];
    return steps.indexOf(step);
  };

  const handlePlanSelect = (plan: PricingTier) => {
    setSelectedPlan(plan);
    setCurrentStep('info');
  };

  const handleCheckout = async () => {
    if (!selectedPlan) {
      alert('Please select a plan first.');
      return;
    }

    const stripe = await getStripe();
    if (!stripe) {
      alert('Stripe failed to load. Please try again.');
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: selectedPlan.priceId, userInfo }),
      });

      const { id } = await response.json();

      const result = await stripe.redirectToCheckout({ sessionId: id });
      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred during checkout. Please try again.');
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
                nextStep={() => setCurrentStep('confirmation')}
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
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTable;