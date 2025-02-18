import React from 'react';
import { 
  FiSearch, 
  FiActivity,
  FiTrendingUp,
  FiAnchor,
  FiFileText,
  FiGlobe,
  FiBarChart,
  FiShield,
  FiUsers,
  FiRepeat,
  FiList,
  FiZap
} from 'react-icons/fi';

export default function SEOServices() {
  const features = [
    { name: "Keyword Research & Strategy", icon: <FiSearch /> },
    { name: "Technical SEO Audits", icon: <FiActivity /> },
    { name: "Ranking Improvement", icon: <FiTrendingUp /> },
    { name: "Backlink Analysis & Building", icon: <FiAnchor /> },
    { name: "Content Optimization", icon: <FiFileText /> },
    { name: "Local SEO Optimization", icon: <FiGlobe /> },
    { name: "SEO Performance Analytics", icon: <FiBarChart /> },
    { name: "Core Web Vitals Optimization", icon: <FiShield /> },
    { name: "User Intent Optimization", icon: <FiUsers /> },
    { name: "Monthly Progress Reporting", icon: <FiRepeat /> },
    { name: "Competitor Analysis", icon: <FiList /> },
    { name: "Site Speed Optimization", icon: <FiZap /> },
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