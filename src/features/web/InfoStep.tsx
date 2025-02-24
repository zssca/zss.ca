'use client';
import React from 'react';
import { FiUser, FiBriefcase, FiMapPin, FiPhone, FiMail, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import InputField from './InputField';
import { UserInfo, PricingTier } from './types'; // Added PricingTier import

export interface InfoStepProps {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  nextStep: () => void;
  backStep: () => void;
  selectedPlan?: PricingTier | null; // Updated to match PricingTable's type
}

const InfoStep: React.FC<InfoStepProps> = ({ 
  userInfo, 
  setUserInfo, 
  nextStep, 
  backStep,
  // selectedPlan is still unused in this component, but typed correctly
}) => {
  const errors = {
    name: userInfo.name.trim() === '' && userInfo.name !== '',
    email: !/^\S+@\S+\.\S+$/.test(userInfo.email) && userInfo.email !== '',
  };
  
  const isValid = userInfo.name.trim() !== '' && /^\S+@\S+\.\S+$/.test(userInfo.email);

  const handleInputChange = (field: keyof UserInfo) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInfo(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 w-full mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
          <FiUser className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Contact Information</h3>
          <p className="text-sm text-gray-600">Provide your details to proceed</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField 
            icon={<FiUser />}
            placeholder="Full Name *"
            value={userInfo.name}
            onChange={handleInputChange('name')}
            error={errors.name}
            required
          />
          <InputField 
            icon={<FiMail />}
            type="email"
            placeholder="Email Address *"
            value={userInfo.email}
            onChange={handleInputChange('email')}
            error={errors.email}
            required
          />
          <InputField 
            icon={<FiBriefcase />}
            placeholder="Company"
            value={userInfo.company}
            onChange={handleInputChange('company')}
          />
          <InputField 
            icon={<FiPhone />}
            type="tel"
            placeholder="Phone Number"
            value={userInfo.phone}
            onChange={handleInputChange('phone')}
          />
          <InputField 
            icon={<FiMapPin />}
            placeholder="Address"
            value={userInfo.address}
            onChange={handleInputChange('address')}
          />
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <InputField 
              icon={<FiMapPin />}
              placeholder="City"
              value={userInfo.city}
              onChange={handleInputChange('city')}
            />
            <div className="relative">
              <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-colors duration-200 appearance-none bg-white disabled:bg-gray-50"
                value={userInfo.country}
                onChange={handleInputChange('country')}
              >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 italic">* Required fields</p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-8">
        <button
          type="button"
          onClick={backStep}
          className="flex-1 px-4 py-2 rounded-md font-medium text-sm text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>
        
        <button
          onClick={nextStep}
          disabled={!isValid}
          className="flex-1 px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 flex items-center justify-center shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-500"
        >
          Next
          <FiArrowRight className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default InfoStep;