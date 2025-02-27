import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Define props interface for the component
interface WhatsAppButtonProps {
  message?: string; // Optional prop for custom message
}

const WhatsAppButton: FC<WhatsAppButtonProps> = ({ message }) => {
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = "+14039093133";
  const defaultMessage = message || "Hi! I'd like to chat about your services. Are you available?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  const contactUsUrl = "/contact";

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is typical mobile breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const buttonVariants = {
    hover: isMobile 
      ? { 
          background: 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.95), rgba(22, 101, 52, 0.95))',
        }
      : { 
          background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95))',
        },
    tap: { y: 1 }
  };

  const iconVariants = {
    hover: { rotate: [0, 5, -5, 0], transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full">
      <Link href={isMobile ? whatsappUrl : contactUsUrl} target={isMobile ? "_blank" : "_self"} rel={isMobile ? "noopener noreferrer" : undefined}>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className={`w-full rounded-xl shadow-sm transition-all duration-300 ${
            isMobile 
              ? 'bg-gradient-to-br from-green-500 to-green-700' 
              : 'bg-gradient-to-br from-blue-500 to-blue-700'
          }`}
        >
          <div className="flex items-center justify-between p-3 sm:p-4 relative overflow-hidden">
            {/* Left Section: Icon and Text */}
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                variants={iconVariants}
                className="flex-shrink-0 p-2 bg-white/20 rounded-lg"
              >
                {isMobile ? (
                  <FaWhatsapp className="w-5 h-5 text-white md:w-6 md:h-6 animate-pulse" />
                ) : (
                  <span className="w-5 h-5 text-white md:w-6 md:h-6">✉️</span>
                )}
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xs text-white/90 uppercase tracking-wider font-medium md:text-sm">
                  {isMobile ? 'Online Now' : 'Get in Touch'}
                </span>
                <span className="text-base font-semibold text-white leading-tight md:text-lg">
                  {isMobile ? 'Chat About Our Services' : 'Contact Us'}
                </span>
              </div>
            </div>

            {/* Right Section: Status */}
            <div className="flex items-center gap-2">
              <span className="hidden px-2.5 py-1 text-xs font-semibold text-white bg-green-800/50 rounded-full sm:inline-block">
                {isMobile ? 'Instant Response' : 'Quick Reply'}
              </span>
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 border border-white/30 md:w-8 md:h-8">
                <span className={`w-2 h-2 rounded-full animate-pulse ${isMobile ? 'bg-green-300' : 'bg-blue-300'}`}></span>
              </div>
            </div>

            {/* Subtle Background Effect */}
            <motion.div
              className="absolute inset-0 opacity-15"
              animate={{
                background: [
                  'radial-gradient(circle at 10% 10%, rgba(255,255,255,0.25), transparent 60%)',
                  'radial-gradient(circle at 90% 90%, rgba(255,255,255,0.25), transparent 60%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default WhatsAppButton;