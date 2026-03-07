import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Toaster from "@/components/ui/sonner";

export const metadata = {
  title: "Sentinels Design Lab",
  description:
    "Production-grade websites, operational tools, and vertical platforms engineered for performance, conversion, and long-term growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}