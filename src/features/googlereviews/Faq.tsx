'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data structure for Google Reviews service
  const faqColumns = [
    [
      {
        question: "How do Google Reviews help my local business grow?",
        answer: `More Google Reviews boost your credibility and visibility. Over 85% of customers trust online reviews as much as personal recommendations, and our service helps you stand out on Google Maps, driving more foot traffic and sales.`,
      },
      {
        question: "What makes your review service effective?",
        answer: `We focus on strategic review enhancement, targeting your happy customers to share positive feedback. With over 60% of searches happening on mobile, our approach ensures your Google Maps profile shines, attracting more local clients fast.`,
      },
      {
        question: "Do I need to manage the reviews myself?",
        answer: `No tech skills needed! We handle the process for you, from outreach to delivery. You get a simple dashboard to track progress, and most clients see results in under 30 days with zero effort on their part.`,
      },
      {
        question: "How soon will I see results from more reviews?",
        answer: `Our clients typically see a 50-70% increase in visibility and trust within 60 days. We kickstart your review boost immediately, and you’ll get monthly reports to see your Google Maps ranking climb.`,
      },
      {
        question: "Can you customize reviews for my business?",
        answer: `Yes! We tailor the review strategy to your brand, including specific services or products you want highlighted. Our team crafts a plan that reflects your unique strengths to maximize customer appeal.`,
      },
    ],
    [
      {
        question: "What’s included in your review service pricing?",
        answer: `Our packages cover review acquisition, Google Maps integration, progress tracking, and 12 months of support. No hidden costs—just a clear plan to elevate your online reputation and bring in more business.`,
      },
      {
        question: "How do you ensure the reviews are safe and reliable?",
        answer: `Safety is key—88% of businesses worry about review authenticity. We use secure, compliant methods to encourage genuine feedback, keeping your Google profile penalty-free and trustworthy.`,
      },
      {
        question: "Can you boost my existing Google Reviews?",
        answer: `Yes! Over 65% of our clients start with existing reviews. We analyze your current profile, enhance it with more positive feedback, and optimize your Google Maps presence for better results.`,
      },
      {
        question: "Will my review plan scale with my business?",
        answer: `Absolutely! Our plans are flexible—add more reviews as your business grows. Whether you’re a single location or expanding, we adapt to keep your reputation strong with minimal hassle.`,
      },
      {
        question: "Do you offer marketing help after the reviews?",
        answer: `Yes! Opt for our Growth Boost package, which includes Google Ads setup, social media promotion, and email campaigns. We’ll turn your new reviews into a powerful marketing tool for repeat customers.`,
      },
    ],
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Answers to common questions about our Google Reviews service
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

export default Faq;