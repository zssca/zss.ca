import MainLayout from "@/layouts/MainLayout";
import BrandingHero from "@/features/Branding/BrandingHero";
import BrandingVideo from "@/features/Branding/BrandingVideo";
import BrandingServices from "@/features/Branding/BrandingServices";
import BrandingCounter from "@/features/Branding/BrandingCounter";
import BrandingTestimonial from "@/features/Branding/BrandingTestimonial";
import BrandingProjects from "@/features/Branding/BrandingProjects";
import BrandingFaq from "@/features/Branding/BrandingFaq";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Branding() {
  // Custom message for WhatsApp
  const whatsappMessage = "Hi! I'm interested in your branding services. Can you tell me more about your process and pricing?";

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

        {/* Counter Section */}
        <div className="col-span-12 md:col-span-12 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <BrandingCounter />
        </div>

        {/* Projects Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <BrandingProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <BrandingTestimonial />
        </div>

        {/* WhatsApp Button Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
          <WhatsAppButton message={whatsappMessage} />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <BrandingFaq />
        </div>
      </div>
    </MainLayout>
  );
}