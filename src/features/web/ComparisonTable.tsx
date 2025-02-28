'use client';
import React from 'react';
import { FiCheck, FiX, FiStar } from 'react-icons/fi';

const ComparisonTable: React.FC = () => {
  const features = [
    { name: 'FREE Hosting', zenith: true, diy: false, agency: false },
    { name: 'FREE Domain', zenith: true, diy: false, agency: false },
    { name: 'Custom Design', zenith: true, diy: false, agency: true },
    { name: 'Responsive Layout', zenith: true, diy: true, agency: true },
    { name: 'Advanced SEO Optimization', zenith: true, diy: false, agency: true },
    { name: 'Easy Content Updates', zenith: true, diy: true, agency: true },
    { name: 'E-commerce Functionality', zenith: true, diy: false, agency: true },
    { name: 'Automatic Software Updates', zenith: true, diy: false, agency: false },
    { name: 'Analytics Setup', zenith: true, diy: false, agency: true },
    { name: 'Security Monitoring', zenith: true, diy: false, agency: true },
    { name: 'Scalable Infrastructure', zenith: true, diy: false, agency: true },
    { name: 'Performance Optimization', zenith: true, diy: false, agency: true },
    { name: 'Professional UX/UI Design', zenith: true, diy: false, agency: true },
    { name: 'Brand Alignment', zenith: true, diy: false, agency: true },
    { name: 'Third-Party Integrations', zenith: true, diy: false, agency: true },
    { name: 'Training & Support', zenith: true, diy: false, agency: true },
    { name: 'Quick Launch', zenith: true, diy: false, agency: false },
    { name: 'Budget-Friendly', zenith: true, diy: true, agency: false },
    { name: 'Regular Backups', zenith: true, diy: false, agency: true },
    { name: 'Access to New Features', zenith: true, diy: false, agency: false },
  ];

  const pricing = {
    zenith: '$29/mo',
    diy: '~$100/mo',
    agency: '$5,000+',
  };

  return (
    <div className="bg-white w-full">
      {/* Header with Icon on Left */}
      <div className="mb-4 ml-4 flex items-start gap-3">
        <span className="bg-yellow-100 p-1.5 rounded-lg">
          <FiStar className="h-9 w-9 text-yellow-600" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
            Why Zenith Strategic Solutions?
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Compare Us with other options.
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <div className="rounded-lg border border-gray-200 min-w-fit overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-medium text-gray-600 uppercase tracking-wide">
                  Feature
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-medium text-gray-900 uppercase tracking-wide text-center bg-yellow-50">
                  <span className="inline-flex items-center gap-1">
                    Zenith
                    <span className="bg-yellow-100 p-1 rounded-full">
                      <FiStar className="h-2 w-2 md:h-3 md:w-4 text-yellow-600" />
                    </span>
                  </span>
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-medium text-gray-600 uppercase tracking-wide text-center">
                  Do it yourself
                </th>
                <th className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-medium text-gray-600 uppercase tracking-wide text-center">
                  Other Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                >
                  <td className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs text-gray-700">{feature.name}</td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-center bg-yellow-50">
                    {feature.zenith ? (
                      <FiCheck className="h-3 w-3 md:h-4 md:w-4 text-green-600 mx-auto" />
                    ) : (
                      <FiX className="h-3 w-3 md:h-4 md:w-4 text-red-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-center">
                    {feature.diy ? (
                      <FiCheck className="h-3 w-3 md:h-4 md:w-4 text-green-600 mx-auto" />
                    ) : (
                      <FiX className="h-3 w-3 md:h-4 md:w-4 text-red-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-center">
                    {feature.agency ? (
                      <FiCheck className="h-3 w-3 md:h-4 md:w-4 text-green-600 mx-auto" />
                    ) : (
                      <FiX className="h-3 w-3 md:h-4 md:w-4 text-red-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-medium text-gray-700 uppercase tracking-wide">
                  Pricing
                </td>
                <td className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-bold text-gray-900 text-center bg-yellow-50">
                  {pricing.zenith}
                </td>
                <td className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-bold text-gray-900 text-center">
                  {pricing.diy}
                </td>
                <td className="py-2 px-2 md:py-3 md:px-4 text-[10px] md:text-xs font-bold text-gray-900 text-center">
                  {pricing.agency}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;