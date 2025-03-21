// src/layouts/MainLayout.tsx
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout flex flex-col min-h-screen mx-auto max-w-7xl">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <div
        className="sticky top-0 left-0 w-full z-40"
        style={{ height: "var(--header-height, 80px)" }} // Ensure header height consistency
      >
        <Header />
      </div>

      {/* Main Content */}
      <main
        className="flex-grow px-4"
        style={{ marginTop: "var(--header-height, 20px)" }} // Maintain spacing below header
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;