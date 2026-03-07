import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar currentPage={currentPageName} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}