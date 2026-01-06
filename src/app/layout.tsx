import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "eLearning Africa Conference 2026",
  description: "Shaping the Future of Digital Education Across Africa",
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ... existing imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
