"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-neutral-900 z-50 gap-4 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { 
              duration: 1.2,
              ease: [0.83, 0, 0.17, 1]
            }
          }}
        >
          {/* Loading Content */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 1.2,
              opacity: 0,
              transition: { duration: 0.6 }
            }}
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-blue-500 animate-spin" />
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-b-emerald-500 border-l-emerald-500 animate-spin animation-delay-300" />
            </div>
            <div className="h-1 w-48 bg-neutral-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
              />
            </div>
            <span className="text-neutral-300 font-medium tracking-wider text-sm">
              Loading Experience...
            </span>
          </motion.div>

          {/* Circular Reveal Overlay */}
          <motion.div
            className="absolute inset-0 bg-neutral-900 origin-center"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            exit={{
              clipPath: "circle(140% at 50% 50%)",
              transition: {
                delay: 2.2,
                duration: 0.8,
                ease: [0.83, 0, 0.17, 1]
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;