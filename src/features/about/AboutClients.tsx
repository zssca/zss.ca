import Image from "next/image";
import { motion } from "framer-motion";

const AboutClients = () => {
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

  return (
    <motion.div 
      className="border-t border-gray-200 pt-16 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-sm font-semibold text-gray-500 mb-8 flex items-center gap-3"
        variants={itemVariants}
      >
        <span className="h-px w-8 bg-gray-400" />
        Trusted By
        <span className="h-px w-8 bg-gray-400" />
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className="flex items-center justify-center h-16">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain h-full w-full grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div className="absolute inset-0 rounded-xl border-2 border-blue-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutClients;