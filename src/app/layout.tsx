import type { Metadata } from "next";
import { Inter, Poppins, PT_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-sans",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Conference 2026",
  description: "Shaping the Future of Digital Education Across Africa",
};

import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// ... existing imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${ptSans.variable} font-body antialiased flex flex-col min-h-screen`}>
        <TopBar />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
