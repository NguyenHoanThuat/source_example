import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { dir } from 'i18next'

import { languages } from '@/i18n/settings';
import '@/styles/globals.css';

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Init Source",
  description: "Nguyen Hoan Thuat",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  }
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng }
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
