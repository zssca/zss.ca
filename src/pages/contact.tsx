import MainLayout from "@/layouts/MainLayout";
import ContactHero from "@/features/contact/ContactHero";
import ContactForm from "@/features/contact/ContactForm";
import WhatsAppButton from '@/components/common/WhatsAppButton';

export default function Contact() {
  return (
    <MainLayout>
      <div className="mx-auto">
        <div className="grid grid-cols-12 auto-rows-auto gap-4">
          {/* First Column - Hero Section */}
          <div
            className="col-span-12 md:col-span-6 bg-white rounded-xl p-6 flex items-start justify-start bg-[url('/bg/H.svg')] bg-cover shadow-sm"
          >
            <ContactHero />
          </div>

          {/* Second Column - Contact Form */}
          <div
            className="col-span-12 md:col-span-6 row-span-3 bg-white rounded-xl p-2 flex flex-col shadow-sm"
          >
            <div className="flex-grow">
              <ContactForm />
            </div>
          </div>

          {/* First Column - WhatsApp Button */}
          <div
            className="col-span-12 md:col-span-6 row-span-1 rounded-xl flex items-center justify-center overflow-hidden"
          >
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}