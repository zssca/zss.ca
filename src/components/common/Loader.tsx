"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  // Hide loader after all animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200); // Allows color overlays & text animations to finish
    return () => clearTimeout(timer);
  }, []);

  // Easing for smooth + snappy transitions
  const transitionEase = [0.65, 0.05, 0.36, 1];

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      {/* Black (main) overlay with row layout for logo + text */}
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
        transition={{
          delay: 1.2, // Wait before sliding the black overlay up
          duration: 0.7,
          ease: transitionEase,
        }}
      >
        {/* Row container for logo and text */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: transitionEase,
            delay: 0.2,
          }}
        >
          {/* Logo with a slight scale-in animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: transitionEase,
              delay: 0.2,
            }}
          >
            <Image
              src="/dark-logo.svg"
              alt="Zenith Logo"
              width={80}
              height={80}
            />
          </motion.div>

          {/* Text container */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* "Zenith" - bold, sliding in from the right, slower */}
            <motion.h4
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.2, // Slower for emphasis
                ease: transitionEase,
                delay: 0.3,
              }}
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              Zenith
            </motion.h4>

            {/* "Strategic Solutions" - lighter, also slides in from right, even slower */}
            <motion.h5
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.4, // Slightly more delay for a staggered feel
                ease: transitionEase,
                delay: 0.4,
              }}
              style={{
                color: "white",
                fontSize: "1rem",
                fontWeight: 300,
                margin: "0.25rem 0 0 0",
              }}
            >
              Strategic Solutions
            </motion.h5>
          </div>
        </motion.div>
      </motion.div>

      {/* Sequential Gray Overlays (dark to lighter) */}
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
          transition={{
            delay: 1.9 + index * 0.15, // starts after black overlay begins to move
            duration: 0.6,
            ease: transitionEase,
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
