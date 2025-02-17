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
        <div className="col-span-12 md:col-span-5 bg-white rounded-xl flex items-start justify-start bg-[url('/bg/F.svg')] bg-cover shadow-sm">
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
        <div className="col-span-12 md:col-span-12 bg-white p-2 rounded-xl flex items-center justify-center shadow-sm">
          <HomeCounter />
        </div>
        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <HomeProjects />
        </div>

        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start bg-[url('/bg/F.svg')] bg-cover shadow-sm">
          <HomeTestimonial />
        </div>
<Link href="/contact"
    className="col-span-12 md:col-span-5 row-span-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white 
               rounded-xl shadow-sm transition-all duration-300 cursor-pointer 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
               px-8 py-4 text-lg font-semibold
               flex items-center justify-center space-x-2"
    aria-label="Get a Free Consultation"
  >
    <span>Get a Free Consultation</span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 text-white animate-bounce-horizontal" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
        clipRule="evenodd"
      />
    </svg>
</Link>


        
        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <HomeFaq />
        </div>
      </div>
    </MainLayout>
  );
}
