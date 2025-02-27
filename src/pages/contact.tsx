'use client';

import MainLayout from "@/layouts/MainLayout";
import ContactHero from "@/features/contact/ContactHero";
import ContactForm from "@/features/contact/ContactForm";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Contact() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 auto-rows-auto gap-4">
          {/* First Column - Hero and WhatsApp Button */}
          <div className="col-span-12 md:col-span-6 flex flex-col">
            <div className="bg-white rounded-xl p-4 flex-grow flex items-start justify-start shadow-sm">
              <ContactHero />
            </div>
            <div className="bg-white rounded-xl flex items-center justify-center shadow-sm mt-4">
              <WhatsAppButton />
            </div>
          </div>

          {/* Second Column - Contact Form */}
          <div className="col-span-12 md:col-span-6 bg-white rounded-xl p-4 flex flex-col shadow-sm">
            <div className="flex-grow">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}