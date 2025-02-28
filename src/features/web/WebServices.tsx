'use client';
import React from 'react';
import { 
  FiMonitor, 
  FiStar, 
  FiSearch, 
  FiShare2, 
  FiShield, 
  FiZap, 
  FiLayout, 
  FiCloud, 
  FiUsers, 
  FiMapPin, 
  FiPhoneCall, 
  FiCalendar 
} from 'react-icons/fi';

const Services: React.FC = () => {
  const features = [
    { name: "Sleek Mobile-First Design", icon: <FiMonitor />, id: "mobile-design" },
    { name: "Bold Local Brand Identity", icon: <FiStar />, id: "local-branding" },
    { name: "Dominate Local SEO", icon: <FiSearch />, id: "seo-local" },
    { name: "Amplify Your Social Reach", icon: <FiShare2 />, id: "social-media" },
    { name: "Lightning-Fast Load Times", icon: <FiZap />, id: "performance" },
    { name: "Rock-Solid Security & Hosting", icon: <FiShield />, id: "hosting" },
    { name: "Effortless User Experience", icon: <FiLayout />, id: "navigation" },
    { name: "Hassle-Free Online Booking", icon: <FiCalendar />, id: "booking" },
    { name: "Pinpoint Google Maps Presence", icon: <FiMapPin />, id: "maps" },
    { name: "Grow Big with Cloud Power", icon: <FiCloud />, id: "scalability" },
    { name: "Turn Visitors into Loyal Clients", icon: <FiUsers />, id: "engagement" },
    { name: "Connect Instantly with Customers", icon: <FiPhoneCall />, id: "contact" },
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

export default Services;