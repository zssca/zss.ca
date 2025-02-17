'use client';
import React from 'react';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import {
  FiCode,
  FiDroplet,
  FiGlobe,
  FiBarChart2,
  FiSearch,
  FiHash,
} from 'react-icons/fi';

interface ServiceItem {
  title: string;
  target: number;
  icon: React.ReactElement;
}

const SERVICES: ServiceItem[] = [
  { title: 'Web Design', target: 350, icon: <FiCode /> },
  { title: 'Branding', target: 50, icon: <FiDroplet /> },
  { title: 'Platforms', target: 500, icon: <FiGlobe /> },
  { title: 'Marketing', target: 100, icon: <FiBarChart2 /> },
  { title: 'SEO', target: 200, icon: <FiSearch /> },
  { title: 'Social', target: 150, icon: <FiHash /> },
];

const HomeCounter = () => {
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
          className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-2"
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
      className="group w-full bg-white rounded-xl border border-gray-100/70"
    >
      <div className="flex flex-col items-center p-5 md:p-6 space-y-3.5">
        <div className="text-blue-500/90 text-3xl p-3 bg-blue-50/50 rounded-lg">
          {React.cloneElement(icon as React.ReactElement<React.ComponentProps<'svg'>>, { className: "h-6 w-6 md:h-7 md:w-7" })}
        </div>
        <span className="text-2xl md:text-3xl font-medium text-gray-900 font-display">
          {count}
          <span className="text-blue-500/90 ml-0.5">+</span>
        </span>
        <p className="text-xs md:text-sm font-medium text-gray-600/90 uppercase tracking-wide">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default HomeCounter;
