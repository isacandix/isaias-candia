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
    "Freelance SAP consultant and full-stack developer with experience in SAP BTP, ABAP, AI/ML, and modern web development. Portfolio showcasing enterprise applications, mobile apps, and web projects.",
  keywords: [
    "Isaias Candia",
    "Freelance SAP Consultant",
    "SAP BTP",
    "ABAP",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
  ],
  openGraph: {
    title: "Portfolio Isaias Candia",
    description:
      "Freelance SAP consultant and full-stack developer with experience in SAP BTP, ABAP, AI/ML, and modern web development.",
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
