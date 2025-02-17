import MainLayout from "@/layouts/MainLayout";
import HomeHero from "@/features/home/HomeHero";
import HomeVideo from "@/features/home/HomeVideo";
import HomeServices from "@/features/home/HomeServices";
import HomeTestimonial from "@/features/home/HomeTestimonial";
import HomeCounter from "@/features/home/HomeCounter";
import HomeProjects from "@/features/home/HomeProjects";
import HomeFaq from "@/features/home/HomeFaq";
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-zinc-50 rounded-xl flex items-start justify-start bg-[url('/bg/F.svg')] bg-cover shadow-sm">
          <HomeHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <HomeVideo />
        </div>

        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 bg-white p-2 rounded-xl flex items-center justify-center shadow-sm">
          <HomeServices />
        </div>

        {/* Projects Section */}



        {/* Services Section */}
        <div className="col-span-12 md:col-span-12 bg-slate-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <HomeCounter />
        </div>
        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <HomeProjects />
        </div>

        <div className="col-span-12 md:col-span-5 row-span-1 bg-stone-50 rounded-xl flex items-start justify-start shadow-sm">
          <HomeTestimonial />
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
          <HomeFaq />
        </div>
      </div>
    </MainLayout>
  );
}
