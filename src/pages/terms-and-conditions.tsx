import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";

export default function TermsConditions() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>Welcome to Zenith Strategic Solutions! By accessing <a href="https://zss.ca" className="text-blue-600">https://zss.ca</a>, you agree to be bound by these Terms and Conditions. If you disagree with any part, discontinue use immediately.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
          <ul className="list-disc pl-6">
            <li><strong>Client/You:</strong> Website user</li>
            <li><strong>Company/We:</strong> Zenith Strategic Solutions</li>
            <li><strong>Website:</strong> https://zss.ca and subdomains</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Intellectual Property</h2>
          <p>All content (text, graphics, logos) is our property or licensed to us. You may:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>View/store content for personal use</li>
          </ul>
          <p>You may <strong>not</strong>:</p>
          <ul className="list-disc pl-6">
            <li>Republish, sell, or redistribute content</li>
            <li>Use content for commercial purposes without permission</li>
            <li>Reverse engineer or extract source code</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc pl-6">
            <li>Use the Website lawfully</li>
            <li>Not engage in hacking/spamming</li>
            <li>Not impersonate others</li>
            <li>Comply with all applicable laws (Canada Computer Use Act, PIPEDA)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Third-Party Links</h2>
          <p>We may include links to external sites. We:</p>
          <ul className="list-disc pl-6">
            <li>Do not endorse these sites</li>
            <li>Are not responsible for their content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6">
            <li>We exclude all warranties</li>
            <li>We are not liable for any indirect/consequential damages</li>
            <li>Total liability capped at CAD $100</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
          <p>These terms are governed by Ontario laws. Any disputes must be resolved in Toronto courts.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use constitutes acceptance.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Termination</h2>
          <p>We may suspend/terminate access for violations of these terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>Questions? Contact us at <a href="mailto:info@zss.ca" className="text-blue-600">info@zss.ca</a></p>
        </section>

        <p className="text-sm text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
      </motion.div>
    </MainLayout>
  );
}