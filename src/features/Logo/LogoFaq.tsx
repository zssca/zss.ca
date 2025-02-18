'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const LogoFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Updated FAQ data for logo design
  const faqColumns = [
    [
      {
        question: "Why is professional logo design crucial for my brand?",
        answer: `A professional logo increases brand recognition by 80% and forms the foundation of your visual identity. Our custom designs communicate your brand values instantly, helping you stand out in competitive markets and build trust with your audience.`,
      },
      {
        question: "What file formats will I receive?",
        answer: `You'll receive all essential formats: vector (AI, EPS) for printing, PNG for digital use, PDF for presentations, and SVG for web. Plus source files and a style guide ensuring consistent brand application across all mediums.`,
      },
      {
        question: "How many design concepts do you provide?",
        answer: `We deliver 3 unique initial concepts based on your brief. After your feedback, we refine the chosen direction through 2-3 revision cycles until you're 100% satisfied.`,
      },
      {
        question: "Can you redesign my existing logo?",
        answer: `Absolutely! 60% of our projects are logo modernizations. We analyze your current mark, preserve brand equity while injecting fresh creativity, and ensure scalability for digital applications.`,
      },
      {
        question: "Do you provide brand style guides?",
        answer: `Yes, our premium package includes a comprehensive style guide with color codes (Pantone, CMYK, RGB), typography rules, spacing guidelines, and logo usage examples for various applications.`,
      },
    ],
    [
      {
        question: "What's included in your logo design packages?",
        answer: `Our transparent pricing includes initial concepts, revisions, final files, and copyright ownership. Premium tiers add stationery design, social media kits, and brand guidelines. No hidden fees - just professional results.`,
      },
      {
        question: "How long does the design process take?",
        answer: `Most projects complete in 7-10 days. We work through 5 key phases: discovery, conceptualization, refinement, finalization, and delivery. Rush services available for 3-day turnaround.`,
      },
      {
        question: "Can you design matching stationery?",
        answer: `Yes! 85% of clients choose our brand package for business cards, letterheads, and email signatures. We ensure cohesive branding across all touchpoints.`,
      },
      {
        question: "What if I need to trademark the logo?",
        answer: `We conduct thorough trademark checks and provide vector files meeting legal requirements. Our legal partners can assist with registration at discounted rates.`,
      },
      {
        question: "How do you ensure logo scalability?",
        answer: `We design in vector format for infinite scalability. Every logo is tested at various sizes - from favicon (16x16px) to billboard dimensions - ensuring perfect clarity in all applications.`,
      },
    ]
  ];

  return (
    <section className="pt-4 mx-auto max-w-7xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Logo Design FAQs
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Answers to common questions about our logo design process
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

export default LogoFaq;