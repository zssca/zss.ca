'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const SEOFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // SEO-focused FAQ data
  const faqColumns = [
    [
      {
        question: "How can SEO improve my online visibility?",
        answer: `SEO boosts organic visibility by optimizing 200+ ranking factors. Our strategies increase keyword rankings by 3-5 positions monthly, driving 50-300% more qualified traffic through technical optimization and content enhancement.`,
      },
      {
        question: "How long until I see SEO results?",
        answer: `Most clients see initial improvements in 3-4 months, with full results in 6-12 months. We provide monthly progress reports tracking 50+ metrics including keyword rankings, organic traffic, and conversion rates.`,
      },
      {
        question: "Do I need technical skills to manage SEO?",
        answer: `No! We handle all technical aspects including schema markup, site speed optimization, and crawl error resolution. You receive simple monthly reports with actionable insights and progress updates.`,
      },
      {
        question: "How do you handle keyword research?",
        answer: `Our AI-powered process analyzes 1M+ data points to identify high-value keywords. We target commercial intent phrases with 30-50% less competition, prioritizing terms that drive conversions, not just traffic.`,
      },
      {
        question: "Can you fix penalty issues?",
        answer: `Yes! Our penalty recovery service has 95% success rate. We conduct deep technical audits, remove toxic backlinks, and implement white-hat solutions to restore rankings and search visibility.`,
      },
    ],
    [
      {
        question: "What's included in your SEO packages?",
        answer: `Comprehensive service includes technical audit, content optimization, backlink building, and monthly reporting. Premium tiers add local SEO, e-commerce optimization, and competitor analysis.`,
      },
      {
        question: "How do you improve website speed?",
        answer: `Our speed optimization process achieves 90+ PageSpeed scores through image compression, code minification, and server optimization. Most sites load 2-3x faster, reducing bounce rates by 40-60%.`,
      },
      {
        question: "Can you optimize existing content?",
        answer: `We enhance existing pages through semantic SEO, adding latent semantic indexing keywords and improving content structure. Typical optimizations increase organic traffic by 50-150% per page.`,
      },
      {
        question: "How do you build quality backlinks?",
        answer: `Our white-hat outreach generates 15-30 authoritative links/month through guest posts, resource pages, and digital PR. All links pass strict quality checks for domain authority and relevance.`,
      },
      {
        question: "Do you support e-commerce SEO?",
        answer: `Yes! We optimize product schema, category pages, and faceted navigation. Our strategies typically increase organic product page traffic by 200-400% for online stores.`,
      },
    ]
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          SEO Service FAQs
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Answers to common questions about our search engine optimization
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

export default SEOFaq;