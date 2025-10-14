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

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}


export default async function RootLayout({ children, params }: RootLayoutProps) {
  
  const { locale } =  await params;
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${urbanist.className} antialiased`}
      >

        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
