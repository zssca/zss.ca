import React from 'react';
import { 
  FiShare2, 
  FiCamera,
  FiDollarSign,
  FiUsers,
  FiActivity,
  FiGrid,
  FiStar,
  FiGlobe,
  FiAlertOctagon,
  FiHash,
  FiShoppingCart,
  FiRepeat
} from 'react-icons/fi';

export default function SocialMediaServices() {
  const features = [
    { name: "Content Strategy & Creation", icon: <FiCamera /> },
    { name: "Social Media Advertising", icon: <FiDollarSign /> },
    { name: "Community Management", icon: <FiUsers /> },
    { name: "Platform-Specific Campaigns", icon: <FiGrid /> },
    { name: "Influencer Partnerships", icon: <FiStar /> },
    { name: "Analytics & Reporting", icon: <FiActivity /> },
    { name: "Brand Awareness Campaigns", icon: <FiGlobe /> },
    { name: "Crisis Management", icon: <FiAlertOctagon /> },
    { name: "Hashtag Strategy Development", icon: <FiHash /> },
    { name: "Social Commerce Setup", icon: <FiShoppingCart /> },
    { name: "Reputation Management", icon: <FiRepeat /> },
    { name: "Engagement Optimization", icon: <FiShare2 /> },
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
              transition-all duration-150 bg-white hover:border-gray-200 hover:bg-gray-50
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