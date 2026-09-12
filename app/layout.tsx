import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Digital Marketing | VAYREN DIGITAL",
  description:
    "VAYREN DIGITAL menyediakan jasa pembuatan website company profile, landing page, digital marketing, dan solusi AI untuk membantu bisnis berkembang.",

  metadataBase: new URL("https://vayren-digital.pages.dev"),

  verification: {
    google: "n6R2NFZru0_N1WJkJD5QrjQbBGJF2lCYffGidmnmn8s",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Jasa Pembuatan Website & Digital Marketing | VAYREN DIGITAL",
    description:
      "VAYREN DIGITAL menyediakan jasa pembuatan website, landing page, digital marketing, dan solusi AI untuk bisnis.",
    url: "https://vayren-digital.pages.dev/",
    siteName: "VAYREN DIGITAL",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
