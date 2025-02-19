import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <MainLayout>
      <section className="">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(220px,auto)]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Hero Section */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-10 md:col-span-5 md:row-span-2 flex flex-col justify-center border border-gray-100"
              variants={itemVariants}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">
                Pioneering Digital Success
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 2010, we’ve empowered global brands with transformative digital solutions. From startups to Fortune 500s, our 15+ years of expertise deliver innovative websites, apps, and strategies that redefine industries and drive unparalleled growth.
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl overflow-hidden md:col-span-7 md:row-span-2 shadow-sm"
              variants={itemVariants}
            >
              <Image
                src="/zss-team.webp"
                alt="Collaborative workspace in action"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                width={800}
                height={600}
              />
            </motion.div>

            {/* 2. Vision */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-4 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We’re building a world where every digital interaction is seamless, intelligent, and impactful. By integrating AI, blockchain, and next-gen cloud tech, we aim to set the standard for scalable, sustainable innovation that powers businesses into the future.
              </p>
            </motion.div>

            {/* 3. Collaborative Approach */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-5 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-600">
                We align with your vision through deep discovery, iterative design, and relentless execution. Our multidisciplinary teams—spanning UX experts, developers, and strategists—work as an extension of your business, delivering tailored solutions that exceed goals.
              </p>
            </motion.div>

            {/* 4. Mission */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-3 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To craft digital experiences that captivate, convert, and endure. We combine technical precision with creative flair to amplify your brand’s reach, engagement, and revenue across every platform and touchpoint.
              </p>
            </motion.div>

            {/* 5. Stats */}
            <motion.div
              className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl shadow-sm p-8 md:col-span-4"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Proven Results</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "45%", text: "KPI Success Rate", color: "text-indigo-600" },
                  { value: "3.5x", text: "Lead Growth", color: "text-emerald-600" },
                  { value: "30%", text: "Traffic Increase", color: "text-amber-600" },
                  { value: "50%", text: "ROI Improvement", color: "text-cyan-600" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={itemVariants}
                  >
                    <p className={`text-4xl font-extrabold ${stat.color}`}>{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-2">{stat.text}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-sm">Data-driven impact, every time.</p>
            </motion.div>

            {/* 6. Core Principles */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-3 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-4">
                {[
                  { title: "Innovation", text: "Breaking new ground with every project" },
                  { title: "Integrity", text: "Transparent, honest partnerships" },
                  { title: "Excellence", text: "Uncompromising quality in all we do" },
                  { title: "Adaptability", text: "Thriving in a fast-changing world" },
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* 7. Development Philosophy */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-5 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Strategic Foundations",
                    text: "We start with in-depth research—market trends, user behavior, and your KPIs—to build solutions that win.",
                  },
                  {
                    title: "Agile Innovation",
                    text: "Our sprint-based process delivers rapid prototypes, continuous feedback, and polished outcomes.",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 8. Milestones */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-6 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Legacy</h2>
              <ol className="relative border-l border-indigo-200">
                {[
                  { year: "2010", title: "Founded", desc: "Began with a mission to innovate." },
                  { year: "2013", title: "First Major Win", desc: "Doubled revenue for a retail giant." },
                  { year: "2017", title: "Global Reach", desc: "Expanded to Asia and Europe." },
                  { year: "2020", title: "Industry Leader", desc: "Awarded for groundbreaking UX." },
                  { year: "2025", title: "AI Revolution", desc: "Launched full-stack AI solutions." },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="mb-8 ml-6"
                    variants={itemVariants}
                  >
                    <div className="absolute w-4 h-4 bg-indigo-500 rounded-full mt-1.5 -left-2" />
                    <time className="text-sm text-gray-500">{item.year}</time>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            {/* 9. Our Process */}
            <motion.div
              className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl shadow-sm p-8 md:col-span-6"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {[
                  { step: "Discover", desc: "Uncover insights through workshops and audits." },
                  { step: "Design", desc: "Craft intuitive, stunning interfaces." },
                  { step: "Develop", desc: "Build robust, scalable systems." },
                  { step: "Deliver", desc: "Launch and optimize for success." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                  >
                    <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.step}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 10. Case Studies */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-6 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Retail E-Commerce Overhaul",
                    result: "Boosted sales by 200% in 6 months.",
                  },
                  {
                    title: "SaaS Platform Redesign",
                    desc: "Increased user retention by 40% with AI-driven UX.",
                  },
                  {
                    title: "Healthcare App",
                    desc: "Streamlined patient care, cutting wait times by 25%.",
                  },
                ].map((study, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-indigo-500 pl-4"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{study.title}</h3>
                    <p className="text-gray-600 text-sm">{study.result || study.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 11. Industry Expertise */}
            <motion.div
              className="bg-gradient-to-br from-cyan-50 to-indigo-50 rounded-xl shadow-sm p-8 md:col-span-6"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Expertise</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { sector: "E-Commerce", desc: "Conversion-focused platforms." },
                  { sector: "Healthcare", desc: "Secure, compliant solutions." },
                  { sector: "Finance", desc: "Robust fintech innovations." },
                  { sector: "Education", desc: "Engaging learning tools." },
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <h3 className="text-lg font-semibold text-gray-900">{item.sector}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 12. Testimonials */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm p-8 md:col-span-6 border border-gray-100"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Voices</h2>
              <div className="space-y-6">
                {[
                  { quote: "A game-changer for our business.", client: "RetailCo" },
                  { quote: "Innovative and reliable.", client: "HealthTech" },
                  { quote: "Exceeded every expectation.", client: "EduPlus" },
                ].map((testimonial, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                    <p className="text-sm text-gray-500 mt-2">— {testimonial.client}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 13. CTA */}
            <motion.div
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-xl p-10 md:col-span-12 text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-white text-lg max-w-2xl mx-auto mb-8">
                Partner with us to create standout digital experiences that drive results. Let’s turn your vision into reality—starting today.
              </p>
              <Link href="/contact">
                <motion.span
                  className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}