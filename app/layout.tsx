import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VAYREN DIGITAL — AI-Powered Digital Agency",
  description:
    "We build websites, AI-powered creative experiences and digital marketing systems that help businesses grow.",

  metadataBase: new URL("https://vayren-digital.pages.dev"),

  verification: {
    google: "n6R2NFZru0_N1WJkJD5QrjQbBGJF2lCYffGidmnmn8s",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "VAYREN DIGITAL — AI-Powered Digital Agency",
    description:
      "We build websites, AI-powered creative experiences and digital marketing systems that help businesses grow.",
    url: "https://vayren-digital.pages.dev",
    siteName: "VAYREN DIGITAL",
    type: "website",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
