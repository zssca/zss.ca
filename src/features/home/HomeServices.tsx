import React from 'react';
import { 
  FiMonitor,
  FiDroplet,
  FiEdit,
  FiDollarSign,
  FiSearch,
  FiShare2,
  FiArrowRight
} from 'react-icons/fi';

export default function Services() {
  const services = [
    { name: "Web Design", url: "/web-design-canada", icon: <FiMonitor /> },
    { name: "Branding", url: "/branding-canada", icon: <FiDroplet /> },
    { name: "Logo Design", url: "/logo-design-canada", icon: <FiEdit /> },
    { name: "PPC", url: "/ppc-canada", icon: <FiDollarSign /> },
    { name: "SEO", url: "/seo-canada", icon: <FiSearch /> },
    { name: "Social Media", url: "/social-media-canada", icon: <FiShare2 /> },
  ];

  return (
    <div className="w-full p-1 max-w-md mx-auto">
      <div className="flex flex-col space-y-1">
        {services.map((service) => (
          <a
            key={service.url}
            href={service.url}
            className="
              group flex items-center justify-between
              px-1 py-1 rounded-lg
              transition-all duration-200 
              hover:bg-gray-50
              text-gray-600
              w-full
              border border-gray-100
              hover:border-gray-200
            "
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-500 p-1 bg-gray-50 rounded-md transition-all duration-200 group-hover:bg-white group-hover:text-gray-700">
                {React.cloneElement(service.icon, {
                  className: "w-5 h-5 flex-shrink-0"
                })}
              </div>
              <span className="text-sm font-medium text-gray-700 
                            transition-colors duration-200 group-hover:text-gray-900">
                {service.name}
              </span>
            </div>
            <FiArrowRight 
              className="
                w-4 h-4 text-gray-400 mr-2
                transition-all duration-300 
                group-hover:translate-x-1
                group-hover:text-gray-600
              " 
            />
          </a>
        ))}
      </div>
    </div>
  );
}