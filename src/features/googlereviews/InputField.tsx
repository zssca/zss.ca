// InputField.tsx
'use client';
import React from 'react';

// Define specific props for the icon
interface IconProps {
  className?: string;
  [key: string]: unknown; // More specific than 'any' while still allowing flexibility
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Specify that icon is a React element with IconProps
  icon: React.ReactElement<IconProps, string | React.JSXElementConstructor<IconProps>>;
  error?: boolean;
  inputClassName?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
  icon, 
  error = false, 
  className, 
  inputClassName = '',
  ...props 
}) => {
  return (
    <div className={`relative ${className || ''}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {React.cloneElement<IconProps>(icon, { 
          className: `h-4 w-4 ${(icon.props as IconProps).className || ''}`
        })}
      </div>
      <input
        {...props}
        className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 outline-none transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed ${inputClassName} ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
        }`}
      />
    </div>
  );
};

export default InputField;