import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import CustomCursor from "@/components/shared/custom-cursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arifuddin Juddah | Machine Learning Engineer & Web Developer Portfolio",
  description: "Portofolio Profesional Arifuddin Juddah - Machine Learning Engineer, Web Developer, dan Peneliti. Spesialisasi dalam Artificial Intelligence, Computer Vision, Deep Learning, dan Digitalisasi Budaya.",
  keywords: [
    "Arifuddin Juddah",
    "Machine Learning Engineer",
    "Web Developer",
    "Deep Learning Researcher",
    "Computer Vision",
    "Batik CNN Classifier",
    "Tenun Sutera Bugis CNN",
    "Digitalisasi Budaya",
    "React Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Arifuddin Juddah" }],
  creator: "Arifuddin Juddah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://arifuddinjuddah.dev",
    title: "Arifuddin Juddah | Machine Learning Engineer & Web Developer Portfolio",
    description: "Portofolio Profesional Arifuddin Juddah - Machine Learning Engineer, Web Developer, dan Peneliti. Spesialisasi dalam Artificial Intelligence, Computer Vision, Deep Learning, dan Digitalisasi Budaya.",
    siteName: "Portofolio Arifuddin Juddah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arifuddin Juddah | MLE & Web Developer Portfolio",
    description: "Portofolio Profesional Arifuddin Juddah. Ahli AI, Deep Learning, dan Web Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
