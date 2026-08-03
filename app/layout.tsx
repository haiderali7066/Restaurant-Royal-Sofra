import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import WhatsAppButton from "@/components/whatsapp-button";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medalign Physiotherapy - Rehab. Realign. Restore.",
  description:
    "Professional physiotherapy clinic in Bahria Town, Islamabad. Expert rehabilitation, sports therapy, and pain management.",
  generator: "Devntom Solutions",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />

        <Analytics />
      </body>
    </html>
  );
}
