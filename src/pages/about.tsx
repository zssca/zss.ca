import {
    FaHandshake,
    FaMapMarkerAlt,
    FaChartLine,
    FaCanadianMapleLeaf,
  } from "react-icons/fa";
  import {
    FiMonitor,
    FiPenTool,
    FiTarget,
    FiSearch,
    FiUsers,
    FiChevronRight,
  } from "react-icons/fi";
  import MainLayout from "@/layouts/MainLayout";
  import Image from "next/image";
  
  export default function About() {
    const team = [
      { 
        name: "Sarah Johnson",
        role: "Lead Designer",
        exp: "12+ years",
        img: "/team-sarah.jpg"
      },
      { 
        name: "Michael Chen",
        role: "SEO Strategist",
        exp: "8+ years",
        img: "/team-michael.jpg"
      },
      { 
        name: "Emily Martin",
        role: "Social Media Expert",
        exp: "6+ years",
        img: "/team-emily.jpg"
      },
    ];
  
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 auto-rows-auto gap-8">
            
            {/* Company Story - Hero Section */}
            <div className="col-span-full relative p-12 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl shadow-blue-100/50 border border-white/20 backdrop-blur-lg">
              <div className="max-w-5xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <FaCanadianMapleLeaf className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="font-medium tracking-wide text-sm uppercase text-blue-600">
                    Canadian Owned & Operated
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent leading-tight">
                  Rooted in Canada,<br />
                  Growing With Canadian Business
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  Founded in 2012 by Toronto entrepreneurs, Zenith Strategic Solutions bridges the gap between enterprise-level digital marketing and Canadian SME needs.
                </p>
              </div>
            </div>
  
            {/* Why Trust Us - Glassmorphic Card */}
            <div className="col-span-full sm:col-span-3 md:col-span-2 relative p-8 bg-white/80 rounded-2xl shadow-2xl shadow-blue-100/50 border border-white/20 backdrop-blur-lg hover:shadow-blue-200/40 transition-shadow">
              <div className="flex flex-col items-center text-center justify-center h-full space-y-6">
                <div className="p-4 bg-blue-600/10 rounded-2xl">
                  <FaHandshake className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Why 500+ Canadian Businesses Trust Us
                </h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "No Long-Term Contracts",
                    "30-Day Results Guarantee",
                    "Transparent Pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center py-2 px-4 bg-white/50 rounded-lg shadow-sm hover:bg-white transition-colors">
                      <FiChevronRight className="w-5 h-5 mr-2 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Team Showcase - Modern Cards */}
            {team.map((member, index) => (
              <div
                key={index}
                className="col-span-full sm:col-span-1 md:col-span-2 group relative p-8 bg-white/80 rounded-2xl shadow-2xl shadow-blue-100/30 border border-white/20 backdrop-blur-lg hover:shadow-blue-200/40 transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full transform group-hover:rotate-12 transition-transform" />
                    <Image 
                      src={member.img}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="relative rounded-full border-4 border-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                    <div className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full shadow-inner">
                      {member.exp} experience
                    </div>
                  </div>
                </div>
              </div>
            ))}
  
            {/* Canadian Advantage - Grid Layout */}
            <div className="col-span-full sm:col-span-3 md:col-span-4 relative p-10 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl shadow-blue-100/50 border border-white/20 backdrop-blur-lg">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-600/10 rounded-xl mr-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Built Exclusively for Canadian Markets
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900 border-l-4 border-blue-600 pl-4">
                    We Master Local Challenges
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    {[
                      "Seasonal market fluctuations",
                      "Bilingual audience engagement",
                      "Local competition dynamics",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="w-8 h-8 bg-blue-600/10 flex items-center justify-center rounded-lg mr-3">
                          <FiChevronRight className="w-4 h-4 text-blue-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:pl-8">
                  <h3 className="text-lg font-medium text-gray-900 border-l-4 border-blue-600 pl-4">
                    Canadian-Centric Approach
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    {[
                      "PIPEDA-compliant strategies",
                      "Local SEO optimization",
                      "Cultural relevance built-in",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="w-8 h-8 bg-blue-600/10 flex items-center justify-center rounded-lg mr-3">
                          <FiChevronRight className="w-4 h-4 text-blue-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
  
            {/* Services Grid - Hover Effects */}
            <div className="col-span-full relative p-12 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl shadow-blue-100/50 border border-white/20 backdrop-blur-lg">
              <div className="max-w-4xl mx-auto space-y-12">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">
                  Comprehensive Digital Solutions
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                  {[
                    { icon: FiMonitor, title: "Web Design" },
                    { icon: FiPenTool, title: "Branding" },
                    { icon: FiPenTool, title: "Logo Design" },
                    { icon: FiTarget, title: "PPC" },
                    { icon: FiSearch, title: "SEO" },
                    { icon: FiUsers, title: "Social Media" },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group relative p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <service.icon className="w-8 h-8 text-blue-600 mb-4 mx-auto transform group-hover:scale-110 transition-transform" />
                      <h4 className="text-sm font-semibold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Process Timeline - Modern Vertical */}
            <div className="col-span-full sm:col-span-3 md:col-span-3 relative p-10 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl shadow-blue-100/50 border border-white/20 backdrop-blur-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Our 3-Step Success Process
              </h3>
              <div className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-px before:bg-blue-100">
                {[
                  { step: 1, title: "Discovery Session", desc: "Free 30-minute strategy consultation" },
                  { step: 2, title: "Custom Roadmap", desc: "Data-driven strategy development" },
                  { step: 3, title: "Growth Execution", desc: "Continuous optimization & support" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-16 group"
                  >
                    <div className="absolute left-8 top-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10 transform group-hover:scale-125 transition-transform">
                      {item.step}
                    </div>
                    <div className="p-6 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Results Showcase - Animated Stats */}
            <div className="col-span-full sm:col-span-3 md:col-span-3 relative p-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden">
              <div className="relative z-10 text-center space-y-10">
                <FaChartLine className="w-12 h-12 mx-auto text-blue-200" />
                <h3 className="text-2xl font-semibold text-white">Average Client Outcomes</h3>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "+45%", label: "Traffic Growth" },
                    { value: "+30%", label: "Lead Increase" },
                    { value: "3.5x", label: "ROI Boost" },
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className="p-4 bg-blue-700/30 rounded-xl backdrop-blur-sm hover:bg-blue-700/40 transition-colors"
                    >
                      <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                      <div className="text-xs font-medium text-blue-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Final CTA - Floating Effect */}
            <div className="col-span-full relative p-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold text-white leading-tight">
                  Partner With Canada&apos;s<br />
                  <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    Digital Marketing Elite
                  </span>
                </h2>
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow hover:from-blue-500 hover:to-blue-400">
                  Start Your Growth Journey
                  <FiChevronRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-blue-300 text-sm">
                  🇨🇦 Proudly serving Canadian businesses from coast to coast since 2012
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </MainLayout>
    );
  }