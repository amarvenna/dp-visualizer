import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DP Visualizer - Preview Your Profile Picture Everywhere",
  description:
    "Upload a photo and instantly see how it looks as your profile picture on WhatsApp, Instagram, Facebook, X, and LinkedIn. Free, private, no sign-up.",
  keywords: "dp preview, profile picture, avatar preview, whatsapp dp, instagram profile picture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
