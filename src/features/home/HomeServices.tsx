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
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {services.map((service) => (
          <a
            key={service.url}
            href={service.url}
            className="
              group flex items-center justify-between
              pr-3 rounded-lg
              transition-all duration-200 ease-in-out
              hover:bg-gray-50
              border border-gray-100
              hover:border-gray-200
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
            "
          >
            <div className="flex items-center space-x-4">
              <div className="
                p-2 rounded-lg
                bg-gray-50
                group-hover:bg-white 
                transition-colors duration-200
              ">
                {React.cloneElement(service.icon, {
                  className: "w-6 h-6 text-gray-600 group-hover:text-gray-800"
                })}
              </div>
              <span className="text-base font-medium text-gray-700 
                             group-hover:text-gray-900">
                {service.name}
              </span>
            </div>
            <FiArrowRight 
              className="
                w-5 h-5 text-gray-400
                transition-all duration-300 ease-in-out
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