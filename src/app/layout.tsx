import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep generic fonts for now
import "./globals.css";
console.log("Loading layout...");
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BoroBazar - Modern E-Commerce Platform",
    template: "%s | BoroBazar"
  },
  description: "Shop the latest products with BoroBazar. High-quality groceries, electronics, and daily essentials delivered to your doorstep.",
  keywords: ["e-commerce", "online shopping", "groceries", "electronics", "BoroBazar", "Egypt shopping"],
  authors: [{ name: "BoroBazar Team" }],
  creator: "BoroBazar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://borobazar-eta.vercel.app/",
    siteName: "BoroBazar",
    title: "BoroBazar - Modern E-Commerce Platform",
    description: "Shop the latest products with BoroBazar. Fast delivery and best prices.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BoroBazar Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoroBazar - Modern E-Commerce Platform",
    description: "Shop the latest products with BoroBazar. Fast delivery and best prices.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
