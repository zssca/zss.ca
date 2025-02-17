'use client';
import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FiCode, FiZap, FiGlobe, FiRefreshCw, FiSearch, FiLayout } from 'react-icons/fi';

interface ServiceItem {
  title: string;
  target: number;
  icon: React.ReactElement;
}

const SERVICES: ServiceItem[] = [
  { title: 'Custom Websites Built', target: 250, icon: <FiCode /> },
  { title: 'Business Websites Launched', target: 180, icon: <FiGlobe /> },
  { title: 'SEO-Optimized Websites', target: 220, icon: <FiSearch /> },
  { title: 'Website Redesigns Completed', target: 140, icon: <FiRefreshCw /> },
  { title: 'High-Speed Websites Delivered', target: 190, icon: <FiZap /> },
  { title: 'Landing Pages Created', target: 300, icon: <FiLayout /> },
];

const WebCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <div ref={ref} className="w-full">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
        >
          {SERVICES.map((service, index) => (
            <CounterItem
              key={service.title}
              {...service}
              index={index}
              shouldAnimate={isInView}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface CounterItemProps extends ServiceItem {
  shouldAnimate: boolean;
  index: number;
}

const CounterItem = ({ title, target, shouldAnimate, icon, index }: CounterItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      const animation = animate(0, target, {
        duration: 2.4,
        ease: [0.33, 1, 0.68, 1],
        onUpdate: (latest: number) => setCount(Math.round(latest)),
        delay: index * 0.15,
      });
      return () => animation.stop();
    }
  }, [shouldAnimate, target, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={shouldAnimate ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1],
        scale: { type: 'spring', stiffness: 200, damping: 15 } 
      }}
      className="w-full bg-white rounded-lg border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all"
    >
      <div className="flex flex-col p-3 space-y-3">
        <div className="flex items-center gap-2">
          <div className="text-blue-500 p-1.5 bg-blue-50 rounded-md">
            {React.cloneElement(icon as React.ReactElement<React.ComponentProps<'svg'>>, { 
              className: "h-5 w-5" 
            })}
          </div>
          <span className="text-xl font-semibold text-gray-900">
            {count}
            <span className="text-blue-500/90 ml-0.5">+</span>
          </span>
        </div>
        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide leading-tight">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default WebCounter;