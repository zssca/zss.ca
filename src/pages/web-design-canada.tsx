import MainLayout from "@/layouts/MainLayout";
import WebHero from "@/features/web/WebHero";
import WebVideo from "@/features/web/WebVideo";
import WebServices from "@/features/web/WebServices";
import WebCounter from "@/features/web/WebCounter";
import WebTestimonial from "@/features/web/WebTestimonial";
import WebProjects from "@/features/web/WebProjects";
import WebFaq from "@/features/web/WebFaq";
import WebPricingTable from "@/features/web/WebPricingTable";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'; // Importing right arrow icon from react-icons

export default function Web() {
  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-white rounded-xl p-4 flex items-start justify-start bg-[url('/bg/A.svg')] bg-cover shadow-sm">
          <WebHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <WebVideo />
        </div>

        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 p-1 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm">
          <WebServices />
        </div>

        {/* Counter Section */}
        <div className="col-span-12 md:col-span-12 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <WebCounter />
        </div>

        {/* Projects Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <WebProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <WebTestimonial />
        </div>

        {/* Button with Arrow Icon and Hover Animation */}
        <Link
          href="/contact"
          className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-center justify-center shadow-sm group"
        >
          <button className="shiny-cta w-full h-full p-4 flex items-center justify-center gap-4">
            <span>Get a Free Consultation</span>
            <FaArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </Link>

        {/* Pricing Table */}
        <div className="col-span-12 bg-white rounded-xl p-2 pt-6 shadow-sm">
          <WebPricingTable />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <WebFaq />
        </div>
      </div>
    </MainLayout>
  );
}