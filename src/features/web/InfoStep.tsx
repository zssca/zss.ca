'use client';
import React from 'react';
import { FiUser, FiBriefcase, FiMapPin, FiPhone, FiGlobe, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import InputField from './InputField';
import { UserInfo, PricingTier } from './types';

export interface InfoStepProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  nextStep: () => void;
  backStep: () => void;
  selectedPlan: PricingTier | null;
}

const InfoStep: React.FC<InfoStepProps> = ({ userInfo, setUserInfo, nextStep, backStep }) => {
  const isValid = userInfo.name.trim() !== '' && /^\S+@\S+\.\S+$/.test(userInfo.email);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-w-2xl w-full mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
          <FiUser className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Contact Information</h3>
          <p className="text-xs text-gray-600">Provide your details to proceed</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField 
            icon={<FiUser className="h-4 w-4 text-gray-600" />}
            placeholder="Full Name *"
            value={userInfo.name}
            onChange={e => setUserInfo(prev => ({ ...prev, name: e.target.value }))} 
          />
          <InputField 
            icon={<FiGlobe className="h-4 w-4 text-gray-600" />}
            type="email"
            placeholder="Email Address *"
            value={userInfo.email}
            onChange={e => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
          />
          <InputField 
            icon={<FiBriefcase className="h-4 w-4 text-gray-600" />}
            placeholder="Company"
            value={userInfo.company}
            onChange={e => setUserInfo(prev => ({ ...prev, company: e.target.value }))}
          />
          <InputField 
            icon={<FiPhone className="h-4 w-4 text-gray-600" />}
            type="tel"
            placeholder="Phone Number"
            value={userInfo.phone}
            onChange={e => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
          />
          <InputField 
            icon={<FiMapPin className="h-4 w-4 text-gray-600" />}
            placeholder="Address"
            value={userInfo.address}
            onChange={e => setUserInfo(prev => ({ ...prev, address: e.target.value }))}
          />
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <InputField 
              icon={<FiMapPin className="h-4 w-4 text-gray-600" />}
              placeholder="City"
              value={userInfo.city}
              onChange={e => setUserInfo(prev => ({ ...prev, city: e.target.value }))}
            />
            <InputField 
              icon={<FiGlobe className="h-4 w-4 text-gray-600" />}
              placeholder="Country"
              value="Canada"
              disabled
            />
          </div>
        </div>

        <p className="text-xs text-gray-500 italic">* Required fields</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-6">
        <button
          type="button"
          onClick={backStep}
          className="flex-1 px-4 py-2 rounded-lg font-medium text-sm text-gray-600 border border-gray-200 
                   hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center shadow-sm"
        >
          <FiArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
        
        <button
          onClick={nextStep}
          disabled={!isValid}
          className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center justify-center shadow-sm
            ${isValid ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
        >
          Next
          <FiArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default InfoStep;