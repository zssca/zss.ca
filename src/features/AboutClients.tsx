import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", logo: "https://picsum.photos/120/60?random=11" },
  { name: "DigitalHub", logo: "https://picsum.photos/120/60?random=12" },
  { name: "InnovateX", logo: "https://picsum.photos/120/60?random=13" },
  { name: "FutureLabs", logo: "https://picsum.photos/120/60?random=14" },
  { name: "NexaSoft", logo: "https://picsum.photos/120/60?random=15" },
  { name: "CloudSphere", logo: "https://picsum.photos/120/60?random=16" },
  { name: "PixelForge", logo: "https://picsum.photos/120/60?random=17" },
  { name: "CodeWave", logo: "https://picsum.photos/120/60?random=18" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const AboutClients = () => {
  return (
    <motion.div 
      className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-lg font-semibold text-gray-800 text-center mb-6"
        variants={itemVariants}
      >
        Our Esteemed Clients
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutClients; 