import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import {
  MdGavel,
  MdDescription,
  MdSecurity,
  MdLink,
  MdWarning,
  MdBalance,
  MdEmail
} from "react-icons/md";
import { FiShield } from "react-icons/fi";

export default function TermsConditions() {
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
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-lg text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Acceptance Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdGavel className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              By accessing and using https://zss.ca (&quot;the Website&quot;), you agree to be bound by these Terms and Conditions. 
              If you disagree with any part, you must immediately discontinue use.
            </p>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-600">
                Continued use after changes constitutes acceptance of revised terms.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdDescription className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Intellectual Property</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Your Rights</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>View content for personal use</li>
                  <li>Share links with proper attribution</li>
                  <li>Use free resources as intended</li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Prohibited Uses</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Commercial reproduction</li>
                  <li>Content modification</li>
                  <li>Reverse engineering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdSecurity className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">User Obligations</h2>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Comply with all applicable laws</li>
                <li>No unauthorized access attempts</li>
              </ul>
            </div>
          </section>

          {/* Third-Party Content */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdLink className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">External Links</h2>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-600 mb-3">
                We may link to third-party services. These:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Are not under our control</li>
                <li>Have separate privacy policies</li>
                <li>May require independent agreements</li>
              </ul>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdWarning className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Limitations</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">No Warranty</h3>
                <p className="text-gray-600">
                  Services provided &quot;as is&quot; without guarantees of accuracy or availability.
                </p>
              </div>
              <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                <h3 className="text-xl font-medium mb-3 text-gray-900">Liability Cap</h3>
                <p className="text-gray-600">
                  Maximum liability limited to CAD $100 for any claim.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdBalance className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Legal Jurisdiction</h2>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Governed by Ontario laws</li>
                <li>Disputes resolved in Toronto courts</li>
                <li>UN Convention on Contracts excluded</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MdEmail className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-semibold text-gray-900">Contact Information</h2>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="space-y-3 text-gray-600">
                <p>Email: <a href="mailto:info@zss.ca" className="text-blue-600 hover:underline">info@zss.ca</a></p>
                <p>Address: 123 Compliance Street, Toronto, ON M5V 2T6</p>
                <p>Response Time: 5 business days</p>
              </div>
            </div>
          </section>

          {/* Compliance Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <FiShield className="w-5 h-5 text-gray-500" />
              <p className="text-sm text-gray-500 text-center">
                Governed by Canadian law • Version 1.2
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}