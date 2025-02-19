"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Reduced from 4200ms to 2800ms
    return () => clearTimeout(timer);
  }, []);

  const transitionEase = [0.65, 0.05, 0.36, 1];

  if (!loading) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 99999, pointerEvents: "none" }}>
      {/* Black overlay */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#121212",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99999,
        }}
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1, duration: 0.5, ease: transitionEase }} // Faster: 1.5->1, 0.7->0.5
      >
        {/* Logo + Text container */}
        <motion.div
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { 
                staggerChildren: 0.1, // Faster: 0.15->0.1
                delayChildren: 0.1 // Faster: 0.2->0.1
              }
            }
          }}
        >
          {/* Enhanced Logo Animation for Triangle */}
          <motion.div
            initial={{ 
              scale: 0.6, 
              y: -20,
              opacity: 0,
              filter: "blur(5px)"
            }}
            animate={{ 
              scale: 1,
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 250, // Increased for faster snap
                damping: 20,
                mass: 0.6,
                delay: 0.2 // Faster: 0.3->0.2
              }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { duration: 0.15 } // Faster: 0.2->0.15
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/light-logo.svg"
              alt="Zenith Logo"
              width={80}
              height={80}
            />
          </motion.div>

          {/* Text Container with Enhanced Staggered Animations */}
          <motion.div style={{ overflow: "hidden" }}>
            <motion.h4
              style={{ 
                color: "white", 
                fontSize: "2rem", 
                fontWeight: "bold", 
                margin: 0,
                letterSpacing: "-0.02em"
              }}
              initial={{ 
                y: 50, 
                opacity: 0,
                skewY: 5,
                filter: "blur(3px)"
              }}
              animate={{
                y: 0,
                opacity: 1,
                skewY: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  stiffness: 220, // Increased for speed
                  damping: 16,
                  mass: 0.6,
                  delay: 0.3, // Faster: 0.5->0.3
                  duration: 0.4 // Faster: 0.6->0.4
                }
              }}
              whileHover={{
                letterSpacing: "0.02em",
                transition: { duration: 0.2 } // Faster: 0.3->0.2
              }}
            >
              Zenith
            </motion.h4>
            
            <motion.h5
              style={{
                color: "white",
                fontSize: "1rem",
                fontWeight: 300,
                margin: "0.1rem 0 0 0",
                letterSpacing: "0.05em"
              }}
              initial={{ 
                y: 30, 
                opacity: 0,
                scale: 0.95,
                filter: "blur(2px)"
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  stiffness: 200, // Increased for speed
                  damping: 18,
                  mass: 0.5,
                  delay: 0.4, // Faster: 0.7->0.4
                  duration: 0.3 // Faster: 0.5->0.3
                }
              }}
              whileHover={{
                x: 5,
                transition: { duration: 0.15 } // Faster: 0.2->0.15
              }}
            >
              Strategic Solutions
            </motion.h5>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gray Overlays */}
      {[15, 25, 35, 45, 55, 65].map((lightness, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: `hsl(0, 0%, ${lightness}%)`,
            zIndex: 99998 - index,
          }}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ delay: 1.4 + index * 0.1, duration: 0.4, ease: transitionEase }} // Faster: 2.1->1.4, 0.15->0.1, 0.6->0.4
        />
      ))}
    </div>
  );
};
export default Loader;