import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaBullhorn,
  FaPenNib,
  FaChartLine,
  FaSearch,
  FaUsers,
} from "react-icons/fa";

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const services = [
    {
      title: "Web Design",
      description:
        "We create visually stunning, high-performance websites that serve as the cornerstone of your digital presence. Our process begins with a deep understanding of your brand and audience, followed by crafting responsive, intuitive designs optimized for user experience and conversion. Using the latest technologies—such as Next.js, Tailwind CSS, and custom CMS integrations—we deliver fast-loading, scalable sites that adapt to your business needs. Whether it’s an e-commerce platform or a corporate site, we ensure your online identity captivates visitors and drives measurable results.",
      icon: <FaPaintBrush className="w-10 h-10 text-blue-500" />,
      link: "https://www.zss.ca/web-design-canada",
      gridClass: "md:col-span-2",
    },
    {
      title: "Branding",
      description:
        "Your brand is more than a logo—it’s the story that defines you. We develop comprehensive branding strategies that align with your vision, values, and market position. From competitor analysis to mood boards, we design cohesive visual identities—including color palettes, typography, and messaging—that resonate with your target audience. Our expertise ensures your brand stands out in a crowded market, fostering trust, recognition, and long-term loyalty across all touchpoints.",
      icon: <FaBullhorn className="w-10 h-10 text-blue-500" />,
      link: "https://www.zss.ca/branding-canada",
      gridClass: "md:col-span-1",
    },
    {
      title: "Logo Design",
      description:
        "A logo is the heartbeat of your brand’s identity. Our designers craft logos that are distinctive, memorable, and timeless, tailored to reflect your unique essence. We explore multiple concepts, refine them through iterative feedback, and deliver versatile designs that work seamlessly across digital and print media. Whether you need a minimalist mark or a bold emblem, we ensure your logo becomes a powerful symbol of your business’s character and ambition.",
      icon: <FaPenNib className="w-10 h-10 text-blue-500" />,
      link: "https://www.zss.ca/logo-design-canada",
      gridClass: "md:col-span-1",
    },
    {
      title: "PPC Advertising",
      description:
        "Unlock immediate growth with expertly managed Pay-Per-Click (PPC) campaigns. We design data-driven strategies that target the right audience at the right time, leveraging platforms like Google Ads and social media channels. From keyword research to ad copywriting and bid optimization, we maximize your return on investment by ensuring every click counts. Our continuous monitoring and A/B testing refine performance, boosting traffic, leads, and sales with precision and efficiency.",
      icon: <FaChartLine className="w-10 h-10 text-blue-500" />,
      link: "https://www.zss.ca/ppc-canada",
      gridClass: "md:col-span-2",
    },
    {
      title: "SEO",
      description:
        "Climb search engine rankings and dominate your niche with our proven SEO services. We conduct thorough audits, optimize on-page elements (like meta tags, headings, and content), and build authoritative backlinks to enhance your site’s credibility. Our approach combines technical expertise—such as site speed optimization and mobile responsiveness—with keyword strategies that attract organic traffic. The result? Long-term visibility and a steady stream of high-intent visitors to fuel your growth.",
      icon: <FaSearch className="w-10 h-10 text-blue-500" />,
      link: "https://www.zss.ca/seo-canada",
      gridClass: "md:col-span-1",
    },
    {
      title: "Social Media",
      description:
        "Amplify your voice and connect with your audience through strategic social media management. We craft compelling content—posts, stories, and campaigns—that engages followers and builds community across platforms like Instagram, LinkedIn, and Facebook. Our services include audience analysis, content scheduling, and performance tracking to ensure your brand’s message cuts through the noise. From organic growth to paid social ads, we drive reach, engagement, and conversions with creativity and precision.",
      icon: <FaUsers className="w-10 h-10 text-blue-500" />,
      link: "http://localhost:3000/social-media-canada",
      gridClass: "md:col-span-2",
    },
  ];

  return (
    <MainLayout>
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-tight"
              variants={itemVariants}
            >
              Tailored Digital Excellence
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              At ZSS, we deliver bespoke solutions that empower your business to thrive in the digital age. Explore our services and see how we can transform your vision into reality.
            </motion.p>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl border border-gray-200 p-6 flex flex-col ${service.gridClass}`}
                variants={itemVariants}
                whileHover={{ boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-xl font-normal text-gray-800 mb-3">{service.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                <Link href={service.link}>
                  <motion.span
                    className="mt-4 inline-block text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors duration-300"
                  >
                    Explore Service →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 bg-gray-100 rounded-lg p-8 text-center"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-normal text-gray-800 mb-4">
              Let’s Build Your Future
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Ready to elevate your digital presence? Contact us today to discuss your project and unlock tailored solutions that deliver results.
            </p>
            <Link href="/contact">
              <motion.span
                className="inline-block px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Get Started
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}