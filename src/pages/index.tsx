import MainLayout from "@/layouts/MainLayout";
import HomeHero from "@/features/home/HomeHero";
import HomeVideo from "@/features/home/HomeVideo";
import HomeServices from "@/features/home/HomeServices";
import HomeTestimonial from "@/features/home/HomeTestimonial";
import HomeCounter from "@/features/home/HomeCounter";
import HomeProjects from "@/features/home/HomeProjects";
import HomeFaq from "@/features/home/HomeFaq";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Home() {
  // Custom message for WhatsApp
  const whatsappMessage = "Hi! I'm interested in your services. Can you tell me more about what you offer?";

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

        {/* Counter Section */}
        <div className="col-span-12 md:col-span-12 bg-slate-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <HomeCounter />
        </div>

        {/* Projects Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <HomeProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-stone-50 rounded-xl flex items-start justify-start shadow-sm">
          <HomeTestimonial />
        </div>

        {/* WhatsApp Button Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
          <WhatsAppButton message={whatsappMessage} />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <HomeFaq />
        </div>
      </div>
    </MainLayout>
  );
}