import React from 'react';
import { 
  FiMonitor, 
  FiDroplet,
  FiSearch, 
  FiShare2,
  FiShield,
  FiZap,
  FiLayout,
  FiCloud,
  FiUsers,
  FiMapPin,
  FiPhoneCall
} from 'react-icons/fi';

export default function Services() {
  const features = [
    { name: "Mobile-Friendly Design", icon: <FiMonitor /> },
    { name: "Strong Local Branding", icon: <FiDroplet /> },
    { name: "SEO for Local Search", icon: <FiSearch /> },
    { name: "Social Media Connection", icon: <FiShare2 /> },
    { name: "Fast Loading & Performance", icon: <FiZap /> },
    { name: "Secure & Reliable Hosting", icon: <FiShield /> },
    { name: "User-Friendly Navigation", icon: <FiLayout /> },
    { name: "Easy Online Booking", icon: <FiPhoneCall /> },
    { name: "Google Maps Integration", icon: <FiMapPin /> },
    { name: "Cloud-Based Scalability", icon: <FiCloud /> },
    { name: "Customer Engagement Features", icon: <FiUsers /> },
    { name: "Comprehensive Contact Options", icon: <FiPhoneCall /> },
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
              transition-all duration-150 bg-white hover:border-green-200 hover:bg-green-50
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