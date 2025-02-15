import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import WebHero from "@/features/web/WebHero";
import WebVideo from "@/features/web/WebVideo";
import WebServices from "@/features/web/WebServices";
import WebTestimonial from "@/features/web/WebTestimonial";
import WebProjects from "@/features/web/WebProjects";
import WebFaq from "@/features/web/WebFaq";

export default function Web() {
  // Staggered animation configuration
  const staggerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delay between child elements
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing curve
      },
    },
  };

  // Responsive animation variants
  const responsiveVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.2 
      }
    },
  };

  return (
    <MainLayout>
      {/* First Section */}
      <motion.div
        variants={staggerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 sm:mt-20 md:mt-28 lg:mt-28 xl:mt-28"
      >
        {/* Text Block */}
        <motion.div
          variants={responsiveVariants}
          className="col-span-1 row-span-1 bg-white py-4 px-6 rounded-xl flex items-top justify-top md:order-1 bg-[url('/bg/F.svg')] bg-cover"
        >
<WebHero />
        </motion.div>

        {/* Video Block */}
        <motion.div
          variants={responsiveVariants}
          className="col-span-1 md:col-span-2 row-span-1 md:row-span-3 bg-white rounded-xl flex items-center justify-center text-white order-2 md:order-2 shadow-sm"
        >
          <WebVideo />
        </motion.div>

        {/* Services Block */}
        <motion.div
          variants={responsiveVariants}
          className="col-span-1 row-span-1 md:row-span-2 bg-white bg-[url('/bg1.svg')] bg-fill bg-bottom rounded-xl flex items-top justify-top order-3 md:order-3 shadow-sm"
        >
          <WebServices />
        </motion.div>
      </motion.div>

      {/* Second Section: Testimonials & Projects */}
      <motion.div
        variants={staggerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        {/* Projects Block */}
        <motion.div
          variants={responsiveVariants}
          className="col-span-1 rounded-xl flex items-center justify-center text-black shadow-sm"
        >
          <WebProjects />
        </motion.div>

        {/* Testimonial Block */}
        <motion.div
          variants={responsiveVariants}
          className="col-span-1 bg-white bg-[url('/bg/E.svg')] bg-cover bg-bottom rounded-xl flex items-center justify-center text-black shadow-sm"
        >
          <WebTestimonial />
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className="bg-white bg-[url('/bg1.svg')] bg-fill bg-bottom rounded-xl p-3 mt-4 shadow-sm"
      >
        <WebFaq />
      </motion.div>
    </MainLayout>
  );
}