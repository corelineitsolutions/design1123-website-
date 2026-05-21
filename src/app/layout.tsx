import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Design1123 — Festival Posters & Business Branding Studio",
  description:
    "Design1123 is India's creative studio for festival posters, business branding, WhatsApp stickers, AI videos, and QR-led growth—no designer required.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
