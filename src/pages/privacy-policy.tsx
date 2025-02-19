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
        {/* Header Section */}
        <div className="mb-4 text-center bg-blue-50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiShield className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdOutlineBook className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Zenith Strategic Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. 
              This policy outlines our practices regarding data collection, use, and disclosure through 
              our website at https://zss.ca.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdOutlineStorage className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Data We Collect</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Contact details (name, email, phone)</li>
                  <li>Professional information</li>
                  <li>Communication records</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Technical Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>IP address & device info</li>
                  <li>Browser details</li>
                  <li>Usage analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookie Usage */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdOutlineCookie className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Cookie Usage</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Essential Cookies</h3>
                <p className="text-gray-600">Required for core functionality</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Analytics Cookies</h3>
                <p className="text-gray-600">Help improve our services</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-600">
                Manage preferences in our <a href="#cookie-settings" className="text-blue-600 font-medium hover:underline">Cookie Center</a>
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdOutlineVerifiedUser className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Your Rights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: MdOutlineVisibility, title: "Access", text: "Request your data records" },
                { icon: MdOutlineEdit, title: "Rectify", text: "Correct inaccurate information" },
                { icon: MdOutlineDelete, title: "Delete", text: "Remove personal data" },
                { icon: MdOutlineInsertChart, title: "Portability", text: "Transfer your data" },
              ].map((right, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <right.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-medium text-gray-900">{right.title}</h3>
                  </div>
                  <p className="text-gray-600">{right.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdOutlineEmail className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Contact Us</h2>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:info@zss.ca" className="text-blue-600 hover:underline">info@zss.ca</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Address:</span>
                  123 Privacy Lane, Toronto, ON M5V 2T6
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Response Time:</span>
                  Within 72 hours
                </p>
              </div>
            </div>
          </section>

          {/* Compliance Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <FiShield className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-gray-500 text-center">
                Complies with PIPEDA (Canada) and GDPR (EU) regulations • Version 2.2
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}