'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const WebFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data structure tailored for small business owners and startups
  const faqColumns = [
    [
      {
        question: "How can a Zenith website boost my small business in Canada?",
        answer: `A Zenith website is your 24/7 growth engine—custom-built to showcase your unique brand and attract local customers. With over 87% of people researching online before buying, our sleek, mobile-first designs help you stand out and win against bigger competitors.`,
      },
      {
        question: "How do you help me dominate local search results?",
        answer: `We bake advanced local SEO into every site—think Google Maps integration, service area targeting, and keyword optimization. With 220+ SEO-optimized sites delivered, we ensure your business ranks high when nearby customers search for your services.`,
      },
      {
        question: "How fast can I get my business online with Zenith?",
        answer: `Our Basic plan launches a 3-page site in days, perfect for startups. Clients like Sarah’s Artisan Bakery saw 40-50% more traffic within 90 days. We handle the heavy lifting so you can focus on running your business.`,
      },
      {
        question: "Can Zenith create content and visuals for my website?",
        answer: `Absolutely! We offer professional photography and copywriting that reflect your brand—like we did for Mei’s Tea House, doubling their online orders. Your site will pop with compelling visuals and words that convert.`,
      },
      {
        question: "What’s included in your pricing plans?",
        answer: `Every plan includes free hosting, a domain (1st year), SSL security, SEO basics, and maintenance. From $29/mo for Basic to $499/mo for Enterprise, you get transparent value—no hidden fees, just results.`,
      },
      {
        question: "How do you ensure my site loads lightning-fast?",
        answer: `Speed matters—53% of mobile users ditch slow sites. With 190+ high-speed sites delivered, we use optimized code, image compression, and premium hosting to hit 90+ Google PageSpeed scores, loading in under 1.5 seconds.`,
      },
      {
        question: "Can you revamp my outdated website?",
        answer: `Yes! We’ve completed 140+ redesigns, like TechFix Solutions, boosting their visibility. We’ll modernize your site, keep your brand intact, and make it a customer magnet with better conversions.`,
      },
    ],
    [
      {
        question: "How will my site grow with my business?",
        answer: `Our scalable, cloud-powered designs—like those for Wilson Home Decor—let you add pages, services, or bookings effortlessly. Start small with 3 pages or scale to unlimited with our Enterprise plan.`,
      },
      {
        question: "Will my site turn visitors into loyal customers?",
        answer: `Yes! With custom features like hassle-free booking (think Tranquil Yoga Studio) and lead-capturing forms, plus 300+ landing pages created, we craft experiences that keep customers coming back.`,
      },
      {
        question: "How do you amplify my social media reach?",
        answer: `We integrate your site with social platforms, driving traffic both ways. Clients like Adjei Music Studio use this to promote offers and book clients seamlessly, growing their audience fast.`,
      },
      {
        question: "What security measures protect my website?",
        answer: `Rock-solid security is standard—SSL encryption, regular backups, and monitoring keep your site safe. Our Enterprise clients, like Elite Fitness Center, enjoy enterprise-grade protection for peace of mind.`,
      },
      {
        question: "Can Zenith help with marketing after launch?",
        answer: `Definitely! Add our Growth Package for Google Ads, social media tools, and email marketing—like we did for Al-Sayed Travel Agency. We’ll set up systems to turn visitors into repeat buyers.`,
      },
      {
        question: "How does Zenith ensure a great user experience?",
        answer: `Our professional UX/UI designs—like those for Gupta Language Academy—make navigation effortless on any device. With 60% of traffic from mobile, we prioritize sleek, responsive layouts that delight users.`,
      },
      {
        question: "Why choose Zenith over DIY or other agencies?",
        answer: `Unlike DIY struggles or pricey agencies ($5,000+), Zenith offers custom designs, advanced SEO, and support from $29/mo. With 180+ businesses launched, we deliver results that scale your success without breaking the bank.`,
      },
    ],
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="mb-4 ml-4 flex items-start gap-3">
        <span className="bg-blue-100 p-1.5 rounded-lg">
          <FiHelpCircle className="h-9 w-9 text-blue-600" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed">
  Got questions? We’ve got answers—learn how Zenith’s website design make growing your small business or startup a breeze.
</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {faqColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2">
            {column.map((faq, index) => {
              const globalIndex = colIndex * column.length + index;
              return (
                <div
                  key={globalIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(globalIndex)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === globalIndex ? 180 : 0 }}
                      className="text-gray-500 ml-2 shrink-0"
                    >
                      <FiChevronDown size={20} />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === globalIndex ? "auto" : 0,
                      opacity: activeIndex === globalIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-xs text-gray-600 bg-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebFaq;