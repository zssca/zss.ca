'use client';
import React, { useEffect, useState } from 'react';
import { animate } from 'framer-motion';
import { FiShare2, FiActivity, FiUsers, FiCamera, FiTrendingUp, FiGrid } from 'react-icons/fi';

interface SocialMediaServiceItem {
  title: string;
  target: number;
  icon: React.ReactElement;
}

const SOCIAL_MEDIA_SERVICES: SocialMediaServiceItem[] = [
  { title: 'Campaigns Managed', target: 850, icon: <FiShare2 /> },
  { title: 'Social Posts Created', target: 15000, icon: <FiActivity /> },
  { title: 'Engagement Rate Increased', target: 420, icon: <FiTrendingUp /> },
  { title: 'Followers Gained', target: 2500000, icon: <FiUsers /> },
  { title: 'Ad Creatives Designed', target: 3800, icon: <FiCamera /> },
  { title: 'Platforms Supported', target: 12, icon: <FiGrid /> },
];

const SocialMediaCounter = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {SOCIAL_MEDIA_SERVICES.map((service) => (
            <SocialCounterItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialCounterItem = ({ title, target, icon }: SocialMediaServiceItem) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animation = animate(0, target, {
      duration: 2.4,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (latest: number) => setCount(Math.round(latest)),
    });
    return () => animation.stop();
  }, [target]);

  return (
    <div className="w-full bg-white rounded-lg border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all">
      <div className="flex flex-col p-3 space-y-3">
        <div className="flex items-center gap-2">
          <div className="text-blue-500 p-1.5 bg-blue-50 rounded-md">
            {React.cloneElement(icon as React.ReactElement<React.ComponentProps<'svg'>>, { 
              className: "h-5 w-5" 
            })}
          </div>
          <span className="text-xl font-semibold text-gray-900">
            {count.toLocaleString()}
            <span className="text-blue-500/90 ml-0.5">+</span>
          </span>
        </div>
        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaCounter;