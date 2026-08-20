// File: src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'], display: 'swap' });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surau BMC - Berkah Madani Center",
  description: "Pusat inkubator peradaban pemuda berbasis Al-Qur'an dan Masjid di Bandar Lampung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${lora.className} min-h-full flex flex-col`}>
        {/* Navbar dan Footer dihapus dari sini */}
        {children}
      </body>
    </html>
  );
}