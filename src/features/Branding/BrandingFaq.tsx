'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const BrandingFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data without icon references
  const faqColumns = [
    [
      {
        question: "What's included in a complete branding package?",
        answer: `Our full brand identity package includes logo system, color palette, typography suite, brand guidelines, marketing collateral templates, and digital asset kit. Plus 3D brand elements and motion guidelines for digital platforms.`,
      },
      {
        question: "How do you ensure brand consistency?",
        answer: `We develop comprehensive brand guidelines covering logo usage, color systems (Pantone/CMYK/RGB/HEX), typography hierarchy, image styles, and voice/tone recommendations. Includes 50+ page PDF with application examples.`,
      },
      {
        question: "Can you create brand assets for digital platforms?",
        answer: `Yes! We design responsive logo variants, social media kits, email signatures, and UI/UX elements. All files optimized for web/mobile with dark/light mode variations and accessibility compliance.`,
      },
      {
        question: "Do you conduct brand strategy workshops?",
        answer: `Our 2-day intensive workshops define brand positioning, audience personas, and competitive differentiation. Includes moodboard development, stakeholder alignment, and roadmap planning.`,
      },
      {
        question: "How do you handle brand evolution?",
        answer: `We create flexible identity systems with primary and secondary marks, allowing controlled evolution while maintaining recognition. Includes legacy version transition guides for smooth rebranding.`,
      },
    ],
    [
      {
        question: "What market research do you conduct?",
        answer: `Our process includes competitive analysis, audience surveys, and cultural trend reports. We examine 150+ data points to inform strategic brand positioning and visual direction.`,
      },
      {
        question: "Can you design complete brand ecosystems?",
        answer: `We specialize in multi-tier brand architectures for parent/child brands. Includes master brand system, sub-brand relationships, and co-branding guidelines for partnerships.`,
      },
      {
        question: "How do you ensure cross-platform consistency?",
        answer: `We test all brand elements across 20+ touchpoints - from business cards to mobile apps. Provide optimized file formats (vector/raster) and size-specific adaptations for each use case.`,
      },
      {
        question: "What's your approach to rebranding?",
        answer: `Our 4-phase rebrand process: 1) Brand audit 2) Equity analysis 3) Strategic evolution 4) Launch planning. We preserve valuable equity while modernizing for current markets.`,
      },
      {
        question: "How do you measure branding effectiveness?",
        answer: `We provide brand tracking tools measuring recognition, recall, and perception. Includes quarterly reports with improvement recommendations to keep your brand competitive.`,
      },
    ]
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Brand Strategy FAQs
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Expert answers for comprehensive brand identity development
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
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleAccordion(globalIndex)}
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-800 flex-1">
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

export default BrandingFaq;