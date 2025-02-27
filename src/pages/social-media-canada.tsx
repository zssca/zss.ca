import MainLayout from "@/layouts/MainLayout";
import SocialMediaHero from "@/features/SocialMedia/SocialMediaHero";
import SocialMediaVideo from "@/features/SocialMedia/SocialMediaVideo";
import SocialMediaServices from "@/features/SocialMedia/SocialMediaServices";
import SocialMediaCounter from "@/features/SocialMedia/SocialMediaCounter";
import SocialMediaTestimonial from "@/features/SocialMedia/SocialMediaTestimonial";
import SocialMediaProjects from "@/features/SocialMedia/SocialMediaProjects";
import SocialMediaFaq from "@/features/SocialMedia/SocialMediaFaq";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function SocialMedia() {
  // Custom message for WhatsApp
  const whatsappMessage = "Hi! I'm interested in your social media services. Can you tell me more about your offerings?";

  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-slate-50 rounded-xl p-4 flex items-start justify-start bg-[url('/bg/G.svg')] bg-cover shadow-sm">
          <SocialMediaHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <SocialMediaVideo />
        </div>

        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 p-1 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm">
          <SocialMediaServices />
        </div>
        {/* Counter Section */}
        <div className="col-span-12 md:col-span-12 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <SocialMediaCounter />
        </div>
        {/* Projects Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <SocialMediaProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <SocialMediaTestimonial />
        </div>

        {/* WhatsApp Button Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
          <WhatsAppButton message={whatsappMessage} />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <SocialMediaFaq />
        </div>
      </div>
    </MainLayout>
  );
}