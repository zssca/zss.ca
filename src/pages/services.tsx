import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";

// Stagger animation for grid container
const staggerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

// Responsive animation for individual service items
const responsiveVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
  },
};

// Individual service components

const WebDesign = () => (
  <motion.div
    variants={responsiveVariants}
    className="bg-white p-6 rounded-xl"
  >
    <h2 className="text-2xl font-bold mb-2">Web Design</h2>
    <p className="text-gray-700">
      Our web design services help small businesses establish a modern, responsive, and user-friendly online presence that converts visitors into customers.
    </p>
  </motion.div>
);

const Branding = () => (
  <motion.div
    variants={responsiveVariants}
    className="bg-white p-6 rounded-xl"
  >
    <h2 className="text-2xl font-bold mb-2">Branding</h2>
    <p className="text-gray-700">
      We create unique brand identities that communicate your business values and set you apart in a crowded marketplace.
    </p>
  </motion.div>
);

const LogoDesign = () => (
  <motion.div
    variants={responsiveVariants}
    className="bg-white p-6 rounded-xl"
  >
    <h2 className="text-2xl font-bold mb-2">Logo Design</h2>
    <p className="text-gray-700">
      Our custom logo design service ensures you have a memorable and professional symbol to represent your brand.
    </p>
  </motion.div>
);

const PPC = () => (
  <motion.div
    variants={responsiveVariants}
    className="bg-white p-6 rounded-xl"
  >
    <h2 className="text-2xl font-bold mb-2">PPC</h2>
    <p className="text-gray-700">
      We manage pay-per-click campaigns that maximize your advertising budget and drive targeted traffic to your site.
    </p>
  </motion.div>
);

const SEO = () => (
  <motion.div
    variants={responsiveVariants}
    className="bg-white p-6 rounded-xl"
  >
    <h2 className="text-2xl font-bold mb-2">SEO</h2>
    <p className="text-gray-700">
      Our SEO strategies improve your search rankings, increasing your visibility and organic traffic from potential customers.
    </p>
  </motion.div>
);

const SocialMedia = () => (
  <motion.div
    variants={responsiveVariants}
    className="bg-white p-6 rounded-xl"
  >
    <h2 className="text-2xl font-bold mb-2">Social Media</h2>
    <p className="text-gray-700">
      We develop comprehensive social media strategies to build your online community and engage with your audience effectively.
    </p>
  </motion.div>
);

export default function Services() {
  return (
    <MainLayout>
      <section className="py-12 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerAnimation}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold text-center mb-8">Our Services</h1>
          <p className="text-center text-gray-700 mb-12">
            We offer comprehensive solutions tailored for small businesses. Explore our services below to learn how we can elevate your brand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WebDesign />
            <Branding />
            <LogoDesign />
            <PPC />
            <SEO />
            <SocialMedia />
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
}
