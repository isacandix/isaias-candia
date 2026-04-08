import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Isaias Candia",
  description:
    "Computer Science Engineer with experience in SAP BTP, AI/ML, and full-stack development. Portfolio showcasing enterprise applications, mobile apps, and web projects.",
  keywords: [
    "Isaias Candia",
    "Computer Science Engineer",
    "SAP BTP",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
  ],
  openGraph: {
    title: "Portfolio Isaias Candia",
    description:
      "Computer Science Engineer with experience in SAP BTP, AI/ML, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
