'use client';
import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface StepIndicatorProps {
  label: string;
  active: boolean;
  stepNumber: number;
  isLast?: boolean;
  completed?: boolean;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ label, active, completed, stepNumber, isLast }) => {
  const circleVariants = {
    inactive: {
      scale: 1,
      backgroundColor: '#F3F4F6', // Light gray
      borderColor: '#D1D5DB', // Gray-300
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
    active: {
      scale: 1.1,
      backgroundColor: '#FFFFFF',
      borderColor: '#10B981', // Emerald-500
      boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2)', // Subtle green glow
    },
    completed: {
      scale: 1,
      backgroundColor: '#10B981', // Emerald-500
      borderColor: '#10B981',
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
  };

  const textVariants = {
    inactive: { color: '#6B7280' }, // Gray-500
    active: { color: '#10B981' },   // Emerald-500
    completed: { color: '#FFFFFF' }, // White
  };

  const lineVariants = {
    initial: { scaleX: 0, originX: 0 }, // Start from left
    completed: { scaleX: 1, originX: 0 }, // Expand to right
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute top-5 left-1/2 translate-x-5 h-1 w-[calc(100%+6rem)] bg-gray-200 rounded-full overflow-hidden z-0">
          <motion.div
            className="h-full bg-emerald-500 origin-left" // Green fill, origin-left for CSS fallback
            variants={lineVariants}
            initial="initial"
            animate={completed ? 'completed' : 'initial'}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />
        </div>
      )}

      {/* Step Circle */}
      <motion.div
        className="relative z-10 h-10 w-10 rounded-full flex items-center justify-center border-2"
        variants={circleVariants}
        initial="inactive"
        animate={completed ? 'completed' : active ? 'active' : 'inactive'}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      >
        <motion.span
          className="text-sm font-semibold"
          variants={textVariants}
          initial="inactive"
          animate={completed ? 'completed' : active ? 'active' : 'inactive'}
          transition={{ duration: 0.3 }}
        >
          {completed ? (
            <FiCheck className="w-5 h-5 stroke-[2]" />
          ) : (
            stepNumber
          )}
        </motion.span>
      </motion.div>

      {/* Label */}
      <motion.span
        className="mt-2 text-xs font-medium tracking-wide"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        {label}
      </motion.span>
    </div>
  );
};

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-start max-w-4xl mx-auto px-4 py-4">
      {steps.map((step, index) => (
        <StepIndicator
          key={step}
          label={step}
          stepNumber={index + 1}
          active={index === currentStep}
          completed={index < currentStep}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
};