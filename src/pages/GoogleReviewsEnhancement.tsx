import MainLayout from "@/layouts/MainLayout";
import GoogleReviewsHero from "@/features/googlereviews/Hero";
import GoogleReviewsVideo from "@/features/googlereviews/Video";
import GoogleReviewsServices from "@/features/googlereviews/Services";
import GoogleReviewsCounter from "@/features/googlereviews/Counter";
import GoogleReviewsTestimonial from "@/features/googlereviews/Testimonial";
import GoogleReviewsFaq from "@/features/googlereviews/Faq";
import GoogleReviewsPricingTable from "@/features/googlereviews/PricingTable";
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { FC } from 'react';

const GoogleReviews: FC = () => {
  return (
    <MainLayout>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 auto-rows-auto gap-4">
        {/* Hero Section */}
        <div className="col-span-12 md:col-span-5 bg-white rounded-xl px-4 py-2 flex items-start justify-start bg-[url('/bg/A.svg')] bg-cover shadow-sm">
          <GoogleReviewsHero />
        </div>

        {/* Video Section */}
        <div className="col-span-12 md:col-span-7 row-span-3 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <GoogleReviewsVideo />
        </div>

        {/* WhatsApp Button Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 rounded-xl flex items-center justify-center overflow-hidden">
          <WhatsAppButton />
        </div>
        
        {/* Services Section */}
        <div className="col-span-12 md:col-span-5 p-1 bg-stone-50 rounded-xl flex items-center justify-center shadow-sm">
          <GoogleReviewsServices />
        </div>

        {/* Counter Section */}
        <div className="col-span-12 md:col-span-7 bg-zinc-50 p-2 rounded-xl flex items-center justify-center shadow-sm">
          <GoogleReviewsCounter />
        </div>

        {/* Testimonial Section */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-white rounded-xl flex items-start justify-start shadow-sm">
          <GoogleReviewsTestimonial />
        </div>

        {/* Pricing Table */}
        <div className="col-span-12 bg-white rounded-xl p-2 pt-6 shadow-sm">
          <GoogleReviewsPricingTable />
        </div>

        {/* FAQ Section */}
        <div className="col-span-12 bg-white rounded-xl p-2 shadow-sm">
          <GoogleReviewsFaq />
        </div>
      </div>
    </MainLayout>
  );
};

export default GoogleReviews;