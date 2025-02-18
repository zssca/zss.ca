'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const PPCFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqColumns = [
    [
      {
        question: "How quickly can PPC drive results for my business?",
        answer: `PPC campaigns typically start generating qualified leads within 48 hours of launch. Our clients see an average 35% increase in conversion rates within the first 30 days through continuous optimization.`,
      },
      {
        question: "What's your approach to managing ad budgets?",
        answer: `We use daily budget pacing algorithms and ROAS-based bidding strategies. 85% of our clients achieve 20-40% lower CPA than industry averages through our granular budget allocation methods.`,
      },
      {
        question: "Do you handle both Google and Facebook Ads?",
        answer: `Yes, we're certified experts in all major platforms including Google Ads, Microsoft Advertising, Facebook/Instagram, and LinkedIn. We create platform-specific strategies that maximize cross-channel synergy.`,
      },
      {
        question: "How do you prevent wasted ad spend?",
        answer: `Our triple-layer verification process includes negative keyword mining, placement exclusions, and AI-powered fraud detection. Clients typically see 30-50% reduction in invalid clicks.`,
      },
      {
        question: "Can PPC work for competitive industries?",
        answer: `We've helped clients in hyper-competitive sectors achieve 400%+ ROAS through advanced strategies like custom intent audiences, RLSA campaigns, and premium landing page experiences.`,
      },
    ],
    [
      {
        question: "What makes your PPC management different?",
        answer: `We combine machine learning with human expertise - daily optimizations, weekly A/B tests, and monthly strategy overhauls. Our clients average 22% lower CPAs than industry benchmarks.`,
      },
      {
        question: "How transparent is your reporting?",
        answer: `Get real-time dashboards tracking 40+ KPIs including Quality Score trends, impression share, and conversion paths. Monthly reports include executive summaries and actionable insights.`,
      },
      {
        question: "Do you optimize existing campaigns?",
        answer: `Yes! Our audit process identifies quick wins - we've boosted ROAS by 150%+ for 60% of inherited accounts through bid strategy adjustments and ad copy optimization.`,
      },
      {
        question: "How do you handle keyword research?",
        answer: `Our proprietary process combines SEMrush data, competitor reverse-engineering, and AI prediction models. We typically identify 30-50 high-value keywords competitors miss.`,
      },
      {
        question: "What about remarketing strategies?",
        answer: `We implement dynamic remarketing funnels with personalized ad sequences. Current clients see 3-8x higher conversion rates from remarketing versus cold audiences.`,
      },
    ]
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          PPC Advertising FAQs
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Answers to common questions about our PPC management services
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

export default PPCFaq;