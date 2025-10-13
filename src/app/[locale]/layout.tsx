import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { Urbanist } from "next/font/google";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Website 👨‍💼",
  description: "Portfolio website made by JBDolmus",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: any
}>) {

  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased`}
      >

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
