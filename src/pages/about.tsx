import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="">
        <div className="max-w-7xl mx-auto">
          {/* 
            Main bento grid container 
            - Smaller gap (gap-4)
            - 12-column layout on medium+
            - Auto-height rows
          */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-12
              gap-4
              auto-rows-[minmax(200px,auto)]
            "
          >
            {/* 1. Hero Text - col-span-7, row-span-2 */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-5 md:row-span-2 flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Transforming brands through elevated digital experiences
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                For over a decade, we&apos;ve pioneered digital solutions that redefine
                industry standards and create lasting value for global clients. Our
                multidisciplinary teams blend strategy, creativity, and technology to
                help you stay ahead in today&apos;s fast-paced digital landscape.
              </p>
            </div>

            {/* 2. Hero Image - col-span-5, row-span-2 */}
            <div className="bg-white rounded-xl shadow-sm p-[1px] md:col-span-7 md:row-span-2 flex items-center">
              <Image
                src="/zss-team.webp"
                alt="ZSS team collaborating in modern office"
                className="w-full h-full rounded-xl"
                width={800}
                height={600}
              />
            </div>

            {/* 3. Trusted By (col-span-4) */}

            {/* 4. Filler Text Block (col-span-4) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Our Vision for the Future
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                We see a world where digital experiences are frictionless, data-driven,
                and truly human-centric. By investing in emerging technologies, we aim
                to build scalable platforms that empower businesses to operate faster
                and smarter.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Our commitment is to continuous learning, adaptation, and
                transformation—enabling clients to innovate in the face of constant
                change.
              </p>
            </div>

            {/* 5. Filler Text Block (col-span-4) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Collaborative Approach
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                From discovery workshops to post-launch analytics, our team works
                side-by-side with yours to ensure success at every stage. We believe
                transparency, open communication, and iterative feedback loops are key
                to building great products.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Whether you’re a startup or an established enterprise, we tailor our
                process to fit your unique needs and strategic goals.
              </p>
            </div>

            {/* 6. Mission (col-span-5) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Combine technical excellence with artistic vision to create digital
                experiences that drive measurable business results. Our mission is to
                continuously push boundaries—enhancing customer engagement, driving
                growth, and elevating brand reputation across every touchpoint.
              </p>
            </div>

            {/* 7. Stats (col-span-7) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-4">
              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {[
                  {
                    value: "45%",
                    text: "Client results exceeded KPIs",
                    color: "text-indigo-600",
                  },
                  {
                    value: "3.5x",
                    text: "Average lead increase",
                    color: "text-emerald-600",
                  },
                  {
                    value: "30%",
                    text: "Organic traffic growth",
                    color: "text-amber-600",
                  },
                  {
                    value: "50%",
                    text: "ROI improvement rate",
                    color: "text-cyan-600",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-2">{stat.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-sm sm:text-base">
                These statistics highlight our commitment to measurable impact. We
                focus on actionable goals that directly influence your bottom line and
                long-term growth.
              </p>
            </div>

            {/* 8. Core Principles (col-span-6) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Core Principles
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Innovation First",
                    text: "Pioneering solutions with emerging technologies",
                  },
                  {
                    title: "Strategic Partnership",
                    text: "Alignment with your long-term business goals",
                  },
                  {
                    title: "Sustainable Scalability",
                    text: "Architecture built for future growth",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mt-1.5">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 9. Development Philosophy (col-span-6) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Development Philosophy
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: "Strategic Architecture",
                    text: "Our proprietary framework combines market analysis with technical audits to build solutions anchored in business reality.",
                  },
                  {
                    title: "Agile Delivery",
                    text: "A modular development process ensuring rapid deployment while maintaining enterprise-grade quality standards.",
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 10. Milestones & Achievements (col-span-6) */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:col-span-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Milestones & Achievements
              </h2>
              <ol className="relative border-l border-gray-200">
                {[
                  {
                    year: "2010",
                    title: "Founded",
                    description: "Started our journey with a small but passionate team.",
                  },
                  {
                    year: "2015",
                    title: "Global Expansion",
                    description: "Opened new offices in Europe to better serve international clients.",
                  },
                  {
                    year: "2020",
                    title: "Award-Winning Innovations",
                    description:
                      "Recognized by industry experts for our cutting-edge digital solutions.",
                  },
                  {
                    year: "2023",
                    title: "Sustainable Growth",
                    description:
                      "Expanded services to include full-stack AI capabilities and data analytics.",
                  },
                ].map((item, index) => (
                  <li key={index} className="mb-8 ml-4">
                    <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                      {item.year}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* 12. CTA (col-span-12) */}
            <div className="bg-indigo-600 rounded-xl p-6 md:col-span-6 flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-white text-sm sm:text-base max-w-xl mb-5">
                Partner with us to innovate, transform, and excel in a constantly
                evolving digital world. Whether you need a new website or a holistic
                digital transformation, we&apos;re here to help you reach your goals.
              </p>
              <button
                type="button"
                className="inline-flex items-center px-5 py-2 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-50"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
