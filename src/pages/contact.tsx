import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import ContactHero from "@/features/contact/ContactHero";
import ContactForm from "@/features/contact/ContactForm";

export default function Contact() {
  // Animation configurations
  const staggerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <MainLayout>
      <motion.div
        variants={staggerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto"
      >
        {/* Flex container for equal height sections */}
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {/* Hero Section */}
          <motion.section
            variants={fadeIn}
            className="flex-1 bg-white p-6 md:p-10 rounded-xl shadow-sm bg-[url('/bg/H.svg')] bg-cover bg-center flex items-top"
          >
            <ContactHero />
          </motion.section>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            className="flex-1 bg-white p-6 md:p-10 rounded-xl shadow-sm flex flex-col"
          >
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <div className="flex-grow">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
