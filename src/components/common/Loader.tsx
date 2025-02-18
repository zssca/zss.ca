"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200);
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
        transition={{ delay: 1.5, duration: 0.7, ease: transitionEase }}
      >
        {/* Logo + Text container */}
        <motion.div
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* Enhanced Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 10,
                delay: 0.2
              }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/light-logo.svg"
              alt="Zenith Logo"
              width={80}
              height={80}
            />
          </motion.div>

          {/* Text Container with Staggered Animations */}
          <motion.div style={{ overflow: "hidden" }}>
            <motion.h4
              style={{ color: "white", fontSize: "2rem", fontWeight: "bold", margin: 0 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay: 0.4
                }
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
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay: 0.6
                }
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
          transition={{ delay: 2.1 + index * 0.15, duration: 0.6, ease: transitionEase }}
        />
      ))}
    </div>
  );
};
export default Loader;