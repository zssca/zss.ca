import React from 'react';
import { 
  FiPenTool, 
  FiLayers,
  FiCopy, 
  FiFileText,
  FiBriefcase,
  FiShare2,
  FiShield,
  FiBox,
  FiRefreshCw,
  FiPrinter,
  FiZap,
  FiUser
} from 'react-icons/fi';

export default function Services() {
  const features = [
    { name: "Custom Logo Design", icon: <FiPenTool /> },
    { name: "Vector-Based Files", icon: <FiLayers /> },
    { name: "Multiple Concepts", icon: <FiCopy /> },
    { name: "Brand Style Guides", icon: <FiFileText /> },
    { name: "Stationery Design", icon: <FiBriefcase /> },
    { name: "Social Media Kits", icon: <FiShare2 /> },
    { name: "Copyright Ownership", icon: <FiShield /> },
    { name: "3D Mockups", icon: <FiBox /> },
    { name: "Unlimited Revisions", icon: <FiRefreshCw /> },
    { name: "Print-Ready Files", icon: <FiPrinter /> },
    { name: "Fast Turnaround", icon: <FiZap /> },
    { name: "Dedicated Support", icon: <FiUser /> },
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