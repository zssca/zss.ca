import MainLayout from "@/layouts/MainLayout";
import SEOHero from "@/features/SEO/SEOHero";
import SEOVideo from "@/features/SEO/SEOVideo";
import SEOServices from "@/features/SEO/SEOServices";
import SEOCounter from "@/features/SEO/SEOCounter";
import SEOTestimonial from "@/features/SEO/SEOTestimonial";
import SEOProjects from "@/features/SEO/SEOProjects";
import SEOFaq from "@/features/SEO/SEOFaq";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function SEO() {
  // Custom message for WhatsApp
  const whatsappMessage = "Hi! I'm interested in your SEO services. Can you tell me more about your approach and pricing?";

  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-slate-50 rounded-xl p-4 flex items-start justify-start bg-[url('/bg/A.svg')] bg-cover shadow-sm">
          <SEOHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <SEOVideo />
        </div>

        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 p-1 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm">
          <SEOServices />
        </div>

        {/* Counter Section */}
        <div className="col-span-12 md:col-span-12 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <SEOCounter />
        </div>

        {/* Projects Section */}
        <div className="col-span-12 md:col-span-7 row-span-2 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <SEOProjects />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <SEOTestimonial />
        </div>

        {/* WhatsApp Button Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
          <WhatsAppButton message={whatsappMessage} />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <SEOFaq />
        </div>
      </div>
    </MainLayout>
  );
}