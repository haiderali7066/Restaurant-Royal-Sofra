import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp-button";
import "./globals.css";

const _geist = Geist({
  subsets: ["latin"],
});

const _geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Royal Sofra | Premium Cuisine",
    template: "%s | Royal Sofra",
  },

  description:
    "Royal Sofra is a premium dining destination where authentic flavors meet modern culinary excellence. Enjoy Continental, Pakistani, Chinese, BBQ, and Fast Food specialties in a warm and elegant atmosphere.",

  keywords: [
    "Royal Sofra",
    "Restaurant",
    "Premium Cuisine",
    "Fine Dining",
    "Continental Food",
    "Pakistani Food",
    "Chinese Food",
    "BBQ",
    "Fast Food",
    "Family Restaurant",
    "Restaurant Islamabad",
    "Restaurant Pakistan",
    "Best Restaurant",
    "Luxury Dining",
  ],

  authors: [
    {
      name: "Royal Sofra",
    },
  ],

  creator: "Royal Sofra",
  publisher: "Royal Sofra",
  generator: "Devntom Solutions",

  applicationName: "Royal Sofra",

  metadataBase: new URL("https://royalsofra.com"), // Replace with your actual domain

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Royal Sofra | Premium Cuisine",
    description:
      "Where Every Meal is Served Like Royalty. Experience premium Continental, Pakistani, Chinese, BBQ, and Fast Food under one roof.",
    url: "https://royalsofra.com",
    siteName: "Royal Sofra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Royal Sofra Premium Cuisine",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Royal Sofra | Premium Cuisine",
    description:
      "Where Every Meal is Served Like Royalty.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Vercel Analytics */}
      </body>
    </html>
  );
}