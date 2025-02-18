'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const SocialMediaFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqColumns = [
    [
      {
        question: "How can social media marketing benefit my business?",
        answer: `Social media increases brand awareness by 70% and drives 3x more website traffic. Our strategies generate authentic engagement and convert followers into customers through targeted content and community building.`,
      },
      {
        question: "Which social platforms do you specialize in?",
        answer: `We excel on Facebook, Instagram, LinkedIn, TikTok, and Twitter. Our platform-specific strategies adapt to each channel's unique audience and algorithm for maximum impact.`,
      },
      {
        question: "How do you create content for different industries?",
        answer: `Our team researches your niche, analyzes competitors, and develops brand-aligned content calendars. We produce 50+ monthly assets including videos, graphics, and captions tailored to your audience.`,
      },
      {
        question: "How do you measure social media success?",
        answer: `We track 15+ KPIs including engagement rate, click-throughs, and conversion value. Clients receive bi-weekly reports with actionable insights and growth recommendations.`,
      },
      {
        question: "Can you handle negative comments/reviews?",
        answer: `Yes! Our reputation management includes 24/7 monitoring, response templates, and crisis protocols. We turn negatives into positives while maintaining brand voice.`,
      },
    ],
    [
      {
        question: "What's included in your social media packages?",
        answer: `All plans include content creation, community management, and performance reporting. Premium tiers add influencer partnerships, paid advertising, and competitor analysis.`,
      },
      {
        question: "How quickly will I see results?",
        answer: `Most clients see engagement boosts in 2-4 weeks. Full strategy impact typically occurs at 3-6 months as algorithms recognize consistent, quality content.`,
      },
      {
        question: "Do I need to provide content ideas?",
        answer: `Not required! Our creative team handles ideation, but we welcome your input. We maintain 2-month content buffers to ensure consistent posting.`,
      },
      {
        question: "How do you optimize ad spend?",
        answer: `Our AI-powered bidding targets high-value audiences. We allocate budgets dynamically across platforms, typically achieving 30-50% lower cost-per-click than industry averages.`,
      },
      {
        question: "Can you manage my existing accounts?",
        answer: `Absolutely! We audit current profiles, preserve successful elements, and implement improvements. 80% of clients see engagement double within 60 days.`,
      },
    ]
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Social Media FAQs
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Answers to common questions about our social media management
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

export default SocialMediaFaq;