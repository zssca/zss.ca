import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout flex flex-col min-h-screen mx-auto max-w-7xl">
      <div className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
        <Header />
      </div>
      <main className="flex-grow pt-20 sm:pt-24 md:pt-28 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4"> 
        {children}
      </main>
      <Footer />
    </div>
  );
}