import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Live Weather App | Real-time Forecast & Alerts",
  description:
    "Get live weather updates, real-time forecasts, and weather alerts for cities around the world. Stay prepared with accurate weather data.",
  keywords: ["weather", "forecast", "real-time weather", "weather app", "Pakistan weather"],
  authors: [{ name: "Imran" }],
  creator: "Imran",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Live Weather App | Real-time Forecast & Alerts",
    description:
      "Get live weather updates, real-time forecasts, and alerts. Trusted weather information at your fingertips.",
    url: "https://yourdomain.com",
    siteName: "Live Weather App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weather App Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Weather App | Real-time Forecast & Alerts",
    description:
      "Get live weather updates and real-time alerts for your location. Stay safe and informed.",
    creator: "@yourhandle", // Optional: your Twitter handle
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
