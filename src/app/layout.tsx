import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeuraCure - For Every Inefficiency, There's an AI Solution",
  description: "Just like medicine diagnoses and treats diseases, we diagnose business bottlenecks and prescribe AI-powered solutions. Get your free AI diagnosis today.",
  keywords: "AI solutions, business automation, artificial intelligence, machine learning, voice AI, predictive analytics, NeuraCure",
  openGraph: {
    title: "NeuraCure - For Every Inefficiency, There's an AI Solution",
    description: "Just like medicine diagnoses and treats diseases, we diagnose business bottlenecks and prescribe AI-powered solutions.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
