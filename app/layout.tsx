import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Website 👨‍💼",
  description: "Portfolio website made by JBDolmus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} `}
      >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
