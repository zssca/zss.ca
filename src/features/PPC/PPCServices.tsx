import React from 'react';
import { 
  FiBarChart2, 
  FiTarget,
  FiSearch, 
  FiEdit,
  FiActivity,
  FiDollarSign,
  FiRefreshCw,
  FiGlobe,
  FiPieChart,
  FiRepeat,
  FiTrendingUp,
  FiClipboard
} from 'react-icons/fi';

export default function PPCServices() {
  const features = [
    { name: "Campaign Strategy & Setup", icon: <FiBarChart2 /> },
    { name: "Ad Copywriting & Optimization", icon: <FiEdit /> },
    { name: "Keyword Research & Management", icon: <FiSearch /> },
    { name: "Conversion Rate Optimization", icon: <FiActivity /> },
    { name: "Audience Targeting & Segmentation", icon: <FiTarget /> },
    { name: "A/B Testing & Experimentation", icon: <FiRefreshCw /> },
    { name: "ROI & Performance Analysis", icon: <FiDollarSign /> },
    { name: "Remarketing & Retargeting", icon: <FiRepeat /> },
    { name: "Multi-Platform Ad Management", icon: <FiGlobe /> },
    { name: "Budget Allocation & Bidding", icon: <FiPieChart /> },
    { name: "Competitor Analysis & Benchmarking", icon: <FiTrendingUp /> },
    { name: "Real-Time Performance Monitoring", icon: <FiClipboard /> },
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