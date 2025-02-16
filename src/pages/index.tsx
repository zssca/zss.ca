import MainLayout from "@/layouts/MainLayout";
import HomeHero from "@/features/home/HomeHero";
import HomeVideo from "@/features/home/HomeVideo";
import HomeServices from "@/features/home/HomeServices";
import HomeTestimonial from "@/features/home/HomeTestimonial";
import HomeProjects from "@/features/home/HomeProjects";
import HomeFaq from "@/features/home/HomeFaq";

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
        <div className="col-span-12 md:col-span-7 rounded-xl flex items-center justify-center text-black shadow-sm">
          <HomeProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 bg-white bg-[url('/bg/E.svg')] bg-cover bg-bottom rounded-xl flex items-center justify-center text-black shadow-sm">
          <HomeTestimonial />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-6 shadow-sm">
          <HomeFaq />
        </div>
      </div>
    </MainLayout>
  );
}
