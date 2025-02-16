import { motion } from 'framer-motion';

const HomeHero = () => (
  <section aria-labelledby="hero-heading" className="px-6 py-2 md:py-3 lg:py-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.h1 
        id="hero-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="text-5xl md:text-6xl lg:text-6xl font-bold
                   bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500
                   text-transparent bg-clip-text tracking-tight"
      >
        Zenith is a Canadian branding agency
      </motion.h1>
    </div>
  </section>
);

export default HomeHero;
