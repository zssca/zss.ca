import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [count, value]);

  return <motion.span>{rounded}</motion.span>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const AboutStatsGrid = () => {
  const stats = [
    { title: "Client Outcomes", value: 45, suffix: "%" },
    { title: "Traffic Growth", value: 30, suffix: "%" },
    { title: "Lead Increase", value: 3.5, suffix: "x" },
    { title: "ROI Boost", value: 50, suffix: "%" },
  ];

  return (
    <motion.div 
      className="p-8 bg-white rounded-xl shadow-md border border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            className="text-center"
            variants={itemVariants}
          >
            <div className="text-4xl font-extrabold text-blue-600">
              {stat.value % 1 === 0 ? (
                <Counter value={stat.value} />
              ) : (
                <>{stat.value}</>
              )}
              {stat.suffix}
            </div>
            <p className="mt-2 text-gray-600 text-sm font-medium">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutStatsGrid; 