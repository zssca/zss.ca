import React from 'react';
import { 
  FiGlobe, 
  FiLayout,
  FiBookOpen, 
  FiFileText,
  FiLayers,
  FiShare2,
  FiShield,
  FiBox,
  FiRefreshCw,
  FiPrinter,
  FiZap,
  FiUsers
} from 'react-icons/fi';

export default function BrandingServices() {
  const features = [
    { name: "Brand Strategy Development", icon: <FiGlobe /> },
    { name: "Brand Identity Systems", icon: <FiLayout /> },
    { name: "Brand Archetypes", icon: <FiBookOpen /> },
    { name: "Brand Guidelines", icon: <FiFileText /> },
    { name: "Brand Architecture", icon: <FiLayers /> },
    { name: "Brand Touchpoints", icon: <FiShare2 /> },
    { name: "Trademark Guidance", icon: <FiShield /> },
    { name: "Brand Ecosystems", icon: <FiBox /> },
    { name: "Brand Evolution", icon: <FiRefreshCw /> },
    { name: "Brand Collateral", icon: <FiPrinter /> },
    { name: "Brand Activation", icon: <FiZap /> },
    { name: "Brand Management", icon: <FiUsers /> },
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
            <div className="text-blue-600 transition-colors duration-150 group-hover:text-blue-800 flex-shrink-0">
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