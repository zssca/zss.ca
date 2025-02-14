import { FaHandshake, FaMapMarkerAlt, FaUserCheck, FaChartLine } from "react-icons/fa";
import { FiMonitor, FiPenTool, FiTarget, FiSearch, FiUsers } from "react-icons/fi";
import MainLayout from "@/layouts/MainLayout";

export default function About() {
  const team = [
    { name: "Sarah Johnson", role: "Lead Designer", exp: "12+ years" },
    { name: "Michael Chen", role: "SEO Strategist", exp: "8+ years" },
    { name: "Emily Martin", role: "Social Media Expert", exp: "6+ years" },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-3 md:grid-rows-12 gap-3 md:gap-5">
          
          {/* Company Story */}
          <div className="col-span-3 md:col-span-6 row-span-1 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Canadian</span> Born,{" "}
                <span className="text-gray-800">Business Grown</span>
              </h1>
              <p className="text-lg text-gray-600">
                Founded in [Year] by local entrepreneurs, Zenith Strategic Solutions was born from 
                the need for affordable, effective digital marketing tailored to Canadian SMEs.
              </p>
            </div>
          </div>

          {/* Why Trust Us */}
          <div className="col-span-3 md:col-span-2 row-span-1 p-5 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Why 500+ Canadian Businesses Trust Us</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ No Long-Term Contracts</li>
                <li>✓ 30-Day Results Guarantee</li>
                <li>✓ Transparent Pricing</li>
              </ul>
            </div>
          </div>

          {/* Team Showcase */}
          {team.map((member, index) => (
            <div key={index} className="col-span-1 md:col-span-2 row-span-1 p-4 bg-white rounded-xl border border-gray-200">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mb-3 flex items-center justify-center">
                  <FaUserCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="mt-2 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {member.exp} experience
                </div>
              </div>
            </div>
          ))}

          {/* Canadian Advantage */}
          <div className="col-span-3 md:col-span-4 row-span-1 p-5 bg-gray-900 text-white rounded-2xl">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-400 mr-3" />
              <h2 className="text-xl font-bold">Built for Canadian Business Needs</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300">
                  We understand the unique challenges of:
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>✓ Seasonal market fluctuations</li>
                  <li>✓ Bilingual audiences</li>
                  <li>✓ Local competition dynamics</li>
                </ul>
              </div>
              <div className="border-l border-gray-700 pl-4">
                <p className="text-gray-300">In every strategy we:</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>✓ Highlight Canadian values</li>
                  <li>✓ Optimize for local SEO</li>
                  <li>✓ Respect privacy laws (PIPEDA)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="col-span-3 md:col-span-3 row-span-1 p-5 bg-white rounded-2xl border border-blue-200">
            <h3 className="text-lg font-semibold mb-4">Our Proven Process</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Discovery Call", desc: "Free 30-minute consultation" },
                { step: 2, title: "Custom Plan", desc: "Tailored strategy development" },
                { step: 3, title: "Launch & Grow", desc: "Ongoing optimization" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Showcase */}
          <div className="col-span-3 md:col-span-3 row-span-1 p-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white">
            <div className="h-full flex flex-col justify-center">
              <div className="text-center">
                <FaChartLine className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-2">Average Client Results</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl">+45%</div>
                    <div className="text-xs">Web Traffic</div>
                  </div>
                  <div>
                    <div className="text-2xl">+30%</div>
                    <div className="text-xs">Lead Generation</div>
                  </div>
                  <div>
                    <div className="text-2xl">3.5x</div>
                    <div className="text-xs">ROI Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Assurance */}
          <div className="col-span-3 md:col-span-2 row-span-1 p-4 bg-gray-50 rounded-2xl border border-gray-200">
            <div className="h-full flex flex-col justify-center text-center">
              <div className="text-sm text-gray-600 mb-2">Proud Members of</div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Canadian Chamber of Commerce</div>
                <div className="text-xs text-gray-600">Since 2018</div>
              </div>
            </div>
          </div>

          {/* Services Commitment */}
          <div className="col-span-3 md:col-span-4 row-span-1 p-5 bg-white rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3">More Than Services - A Partnership</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <p className="text-gray-600">
                We don't just build websites - we create digital foundations for Canadian businesses 
                to thrive. Every project includes:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Monthly performance reports</li>
                <li>✓ Dedicated Canadian account manager</li>
                <li>✓ Compliance with CASL regulations</li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="col-span-3 md:col-span-6 row-span-1 p-6 bg-gray-900 rounded-2xl text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Ready to Work With a Team That Understands Canadian Business?
            </h2>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start Your Local Success Story
            </button>
            <p className="text-sm text-blue-200 mt-3">
              🇨🇦 Proudly serving Canadian businesses since [Year]
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}