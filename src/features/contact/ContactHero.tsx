'use client';

import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="rounded-lg w-full mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-lg bg-blue-100 text-blue-700">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9h8"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Let&apos;s Talk
          </h1>
          <p className="text-base text-gray-600">
            Get in touch with us today
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
          Every business has a story that deserves to be told in a bold, innovative way.
          Let our creative strategies and digital expertise propel your brand into the spotlight,
          connecting you with the right audience and fueling sustainable growth.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-gray-100 text-gray-600">
              <FiMail className="h-5 w-5" />
            </div>
            <p className="text-gray-800 text-base md:text-lg font-medium">
              info@zss.ca
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-gray-100 text-gray-600">
              <FiPhone className="h-5 w-5" />
            </div>
            <p className="text-gray-800 text-base md:text-lg font-medium">
              +1 (403) 909-3133
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-gray-100 text-gray-600">
              <FiMapPin className="h-5 w-5" />
            </div>
            <p className="text-gray-800 text-base md:text-lg font-medium">
              1053 10 St SW, Calgary, AB T2R 1S6, Canada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;