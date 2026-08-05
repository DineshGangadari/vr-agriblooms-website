import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInitializer from "../components/AOSInitializer";

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
    default: "VR Agri Blooms | Landscaping & Gardening in Hyderabad",
    template: "%s | VR Agri Blooms",
  },

  description:
    "VR Agri Blooms provides professional landscaping, terrace gardening, lawn development, vertical gardens, irrigation solutions, plantation, and garden maintenance services in Hyderabad.",

  keywords: [
    "Landscaping Hyderabad",
    "Gardening Hyderabad",
    "Terrace Gardening",
    "Home Garden",
    "Lawn Development",
    "Vertical Garden",
    "Plantation",
    "Garden Maintenance",
    "VR Agri Blooms",
  ],

  authors: [{ name: "VR Agri Blooms" }],
  creator: "VR Agri Blooms",

  openGraph: {
    title: "VR Agri Blooms",
    description:
      "Transforming ordinary spaces into thriving green environments.",
    type: "website",
    locale: "en_IN",
    siteName: "VR Agri Blooms",
  },

  twitter: {
    card: "summary_large_image",
    title: "VR Agri Blooms",
    description:
      "Professional landscaping and gardening services in Hyderabad.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <body>
  <AOSInitializer />
  {children}
</body>
    </html>
  );
}
