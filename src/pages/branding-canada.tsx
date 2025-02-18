import MainLayout from "@/layouts/MainLayout";
import BrandingHero from "@/features/Branding/BrandingHero";
import BrandingVideo from "@/features/Branding/BrandingVideo";
import BrandingServices from "@/features/Branding/BrandingServices";
import BrandingCounter from "@/features/Branding/BrandingCounter";
import BrandingTestimonial from "@/features/Branding/BrandingTestimonial";
import BrandingProjects from "@/features/Branding/BrandingProjects";
import BrandingFaq from "@/features/Branding/BrandingFaq";
import Link from 'next/link';

export default function Branding() {
  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-slate-50 rounded-xl p-4 flex items-start justify-start bg-[url('/bg/A.svg')] bg-cover shadow-sm">
          <BrandingHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <BrandingVideo />
        </div>

        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 p-1 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm">
          <BrandingServices />
        </div>

        {/* Projects Section */}



        {/* Services Section */}
        <div className="col-span-12 md:col-span-12 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <BrandingCounter />
        </div>
        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <BrandingProjects />
        </div>

        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <BrandingTestimonial />
        </div>

        <Link
      href="/contact"
      className="col-span-12 md:col-span-5 row-span-1 relative flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-md transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg"
    >
      <span className="relative z-10">Get a Free Consultation</span>
      <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </Link>



        
        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <BrandingFaq />
        </div>
      </div>
    </MainLayout>
  );
}