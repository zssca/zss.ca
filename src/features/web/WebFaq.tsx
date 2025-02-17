'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const HomeFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data structure
  const faqColumns = [
    [
      {
        question: "How can a professional website help my local business compete?",
        answer: `A high-quality website acts as your 24/7 sales rep - building credibility and showcasing what makes your business unique. 87% of consumers research online before visiting, and our custom-crafted sites help you win those crucial first impressions against bigger competitors.`,
      },
      {
        question: "What makes your websites better for attracting local customers?",
        answer: `We optimize every site for local SEO with Google Business Profile integration, service area targeting, and mobile-first design. Over 60% of web traffic comes from phones - our responsive designs ensure seamless experiences that convert browsers into buyers.`,
      },
      {
        question: "I'm not tech-savvy - can I manage the website myself?",
        answer: `Absolutely! We build on user-friendly platforms with simple drag-and-drop editors. Plus, we provide free video tutorials and priority support. Most owners learn to update content in under 30 minutes - no coding needed!`,
      },
      {
        question: "How quickly will I see results from my new website?",
        answer: `Our clients typically see 40-60% more web traffic within 90 days. We implement immediate SEO fundamentals during launch and provide monthly performance reports to track your growth.`,
      },
      {
        question: "Can you help with photos and content for my site?",
        answer: `Yes! Our full-service package includes professional photography and copywriting tailored to your brand voice. We'll highlight your unique value proposition and craft compelling calls-to-action that drive conversions.`,
      },
    ],
    [
      {
        question: "What's included in your web design pricing?",
        answer: `Our transparent packages include hosting setup, SSL security, contact forms, SEO optimization, and 12 months of maintenance. No hidden fees - we'll provide a detailed proposal showing exactly how we'll help grow your business.`,
      },
      {
        question: "How do you make websites load faster?",
        answer: `Speed is crucial - 53% of mobile users leave slow sites. We use optimized coding, image compression, and premium hosting to achieve 90+ Google PageSpeed scores. Most client sites load in under 1.5 seconds.`,
      },
      {
        question: "Can you update my existing website?",
        answer: `Absolutely! 70% of our projects are website revamps. We'll analyze your current site, identify improvements, and implement modern designs that convert better while preserving your brand identity.`,
      },
      {
        question: "How will my website handle future growth?",
        answer: `We build scalable sites with easy expansion capabilities. Add new services, team members, or locations with just a few clicks. Our modular designs grow with your business at minimal cost.`,
      },
      {
        question: "Do you help with marketing after launch?",
        answer: `Yes! Choose our Growth Package for Google Ads management, social media integration, and email marketing setup. We'll help implement automated systems to turn visitors into repeat customers.`,
      },
    ]
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Find answers to the most common questions about our services
        </p>
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

export default HomeFaq;