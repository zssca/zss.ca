import MainLayout from "@/layouts/MainLayout";
import PPCHero from "@/features/PPC/PPCHero";
import PPCVideo from "@/features/PPC/PPCVideo";
import PPCServices from "@/features/PPC/PPCServices";
import PPCCounter from "@/features/PPC/PPCCounter";
import PPCTestimonial from "@/features/PPC/PPCTestimonial";
import PPCProjects from "@/features/PPC/PPCProjects";
import PPCFaq from "@/features/PPC/PPCFaq";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function PPC() {
  // Custom message for WhatsApp
  const whatsappMessage = "Hi! I'm interested in your PPC services. Can you tell me more about your campaign strategies and pricing?";

  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-slate-50 rounded-xl p-4 flex items-start justify-start bg-[url('/bg/A.svg')] bg-cover shadow-sm">
          <PPCHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <PPCVideo />
        </div>

        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 p-1 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm">
          <PPCServices />
        </div>

        {/* Counter Section */}
        <div className="col-span-12 md:col-span-12 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <PPCCounter />
        </div>

        {/* Projects Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <PPCProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <PPCTestimonial />
        </div>

        {/* WhatsApp Button Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
          <WhatsAppButton message={whatsappMessage} />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <PPCFaq />
        </div>
      </div>
    </MainLayout>
  );
}