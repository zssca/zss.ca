import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 120 }
  }
};

const AboutMission = () => (
  <motion.div 
    className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={containerVariants}
  >
    <motion.h2 
      className="text-2xl font-bold text-blue-600 mb-4"
      variants={itemVariants}
    >
      Our Mission
    </motion.h2>
    <motion.p 
      className="text-gray-700 text-lg leading-relaxed"
      variants={itemVariants}
    >
      We are committed to merging technical innovation with creative excellence to deliver exceptional solutions that drive growth and success for our clients.
    </motion.p>
  </motion.div>
);

export default AboutMission; 