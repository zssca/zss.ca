import React from 'react';
import { FiMonitor, FiSearch, FiZap, FiShield, FiMapPin, FiUsers } from 'react-icons/fi';

export default function Services() {
  const features = [
    { name: "Grow Online Visibility", icon: <FiMonitor /> },
    { name: "Rank Higher on Google", icon: <FiSearch /> },
    { name: "Get Reviews Fast", icon: <FiZap /> },
    { name: "Safe Review Process", icon: <FiShield /> },
    { name: "Google Maps Boost", icon: <FiMapPin /> },
    { name: "Build Customer Trust", icon: <FiUsers /> },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-1 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              group flex items-center 
              p-2 sm:p-2.5 rounded-lg border border-gray-100 
              transition-all duration-150 bg-white hover:border-gray-200 hover:bg-grey-50
              w-full gap-1.5
            "
          >
            <div className="text-green-600 transition-colors duration-150 group-hover:text-green-800 flex-shrink-0">
              {React.cloneElement(feature.icon, {
                className: "w-[16px] h-[16px] sm:w-4 sm:h-4"
              })}
            </div>
            <span className="text-[13px] sm:text-sm font-medium text-gray-600 
                            transition-colors duration-150 group-hover:text-gray-800
                            line-clamp-1 tracking-tight">
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}