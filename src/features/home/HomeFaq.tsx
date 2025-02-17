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
        question: "Why should I pay for professional web design instead of using a DIY website builder?",
        answer: `DIY builders lack the strategic optimization that drives sales. We design sites focused on user experience and conversions – 65% of visitors leave poorly designed sites immediately. Our mobile-first approach ensures 90+ PageSpeed scores, SEO readiness, and layouts proven to keep visitors engaged 3x longer.`,
      },
      {
        question: "Do I really need social media for my service business?",
        answer: `92% of customers check social profiles before contacting a business. We create platform-specific strategies – LinkedIn for B2B services, Instagram/Facebook for visual businesses. Our managed plans increase engagement by 150% on average while saving you 10+ hours/month.`,
      },
      {
        question: "What if I need to update my logo later as my business grows?",
        answer: `We create timeless, scalable logos with full ownership rights. You’ll receive vector files and a brand style guide, making it easy to adapt colors or layouts for future needs – no extra fees. Most clients use our logos for 7-10+ years without needing redesigns.`,
      },
      {
        question: "Can PPC ads work for my small budget?",
        answer: `Absolutely. Our hyper-local targeting prevents wasted spend – clients average $2 earned for every $1 spent. We focus on high-intent keywords like "emergency plumber [Your City]" or "best bakery near me". Campaigns start at $300/month with real-time performance tracking.`,
      },
      {
        question: "How quickly will SEO get me more customers?",
        answer: `Local SEO typically shows results in 60-90 days. We accelerate this by optimizing your Google Business Profile, building local citations, and creating location-specific content. 83% of our clients see increased calls and form submissions within 3 months.`,
      },
    ],
    [
      {
        question: "How does branding help my small local business compete with bigger companies?",
        answer: `Strong branding creates an emotional connection with your community. We craft unique visual identities and messaging that highlight what makes you different – 78% of customers choose locally owned businesses when branding resonates. Consistent branding across all touchpoints can increase revenue by 23% year-over-year.`,
      },
      {
        question: "What’s included in your web design package?",
        answer: `Turnkey solution: mobile-responsive design, SEO setup, contact forms, hosting, SSL security, and 1 year of maintenance. Plus, we optimize all content for voice search – crucial since 55% of local searches now happen through voice assistants.`,
      },
      {
        question: "Can you help create social media content that actually converts?",
        answer: `Yes! Our team produces platform-specific content – Reels for Instagram, carousels for Facebook, case studies for LinkedIn. Clients using our social packages see 25-50% increases in website referrals within 60 days.`,
      },
      {
        question: "How do I know if my branding is effective?",
        answer: `We track brand recognition through surveys and social listening tools. Effective branding shows measurable results: 3x higher recall than competitors, 30%+ increases in customer loyalty, and consistent visual identity across all channels.`,
      },
      {
        question: "Should I prioritize SEO or PPC for quick results?",
        answer: `We recommend both: PPC for immediate visibility (shows results in 48 hours) while SEO builds long-term growth. Our bundled clients get 15% discounts on combined strategies – the most cost-effective way to dominate local searches.`,
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
                  className="border border-gray-200 bg-white rounded-lg overflow-hidden"
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