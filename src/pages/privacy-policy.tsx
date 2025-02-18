import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import {
  MdOutlineBook,
  MdOutlineStorage,
  MdOutlineCookie,
  MdOutlineVerifiedUser,
  MdOutlineEmail,
  MdOutlineVisibility,
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineInsertChart
} from "react-icons/md";
import { FiShield } from "react-icons/fi";

export default function PrivacyPolicy() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }));
  }, []);

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="container mx-auto max-w-7xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
            <FiShield className="w-5 h-5" />
            <p className="text-sm">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <MdOutlineBook className="mr-2 w-6 h-6" />
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Zenith Strategic Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. 
              This policy outlines our practices regarding data collection, use, and disclosure through 
              our website at https://zss.ca. By using our services, you agree to the terms outlined here.
            </p>
          </section>

          {/* Data Collection Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <MdOutlineStorage className="mr-2 w-6 h-6" />
              Data We Collect
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-white">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Contact details (name, email, phone number)</li>
                  <li>Professional information (company, job title)</li>
                  <li>Communication records</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-medium mb-2 text-gray-800 dark:text-white">Technical Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>IP address & device information</li>
                  <li>Browser type and version</li>
                  <li>Usage patterns and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Management */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <MdOutlineCookie className="mr-2 w-6 h-6" />
              Cookie Usage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-3 text-gray-800 dark:text-white">Essential Cookies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Required for basic functionality. Always active.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-3 text-gray-800 dark:text-white">Analytics Cookies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Help us improve services. Optional.
                </p>
              </div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Manage preferences through our <a href="#cookie-settings" className="text-blue-600 hover:underline">Cookie Center</a> or browser settings.
            </p>
          </section>

          {/* Data Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <MdOutlineVerifiedUser className="mr-2 w-6 h-6" />
              Your Rights
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { icon: MdOutlineVisibility, title: "Access", text: "Request copies of your data" },
                { icon: MdOutlineEdit, title: "Rectification", text: "Update inaccurate information" },
                { icon: MdOutlineDelete, title: "Erasure", text: "Delete personal data" },
                { icon: MdOutlineInsertChart, title: "Portability", text: "Obtain data in machine-readable format" },
              ].map((right, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-center mb-2">
                    <right.icon className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="font-medium text-gray-800 dark:text-white">{right.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{right.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-gray-800 dark:text-white">
              <MdOutlineEmail className="mr-2 w-6 h-6" />
              Contact
            </h2>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>Email: <a href="mailto:info@zss.ca" className="text-blue-600 hover:underline">info@zss.ca</a></p>
              <p>Address: 123 Privacy Lane, Toronto, ON M5V 2T6</p>
              <p>Response Time: Within 72 hours</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This document complies with PIPEDA (Canada) and GDPR (EU) regulations. Version 2.1
            </p>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}