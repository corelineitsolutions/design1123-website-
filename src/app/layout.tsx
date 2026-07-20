import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://design1123.com"),
  title: "Design 1123 | Premium Template Creation Platform",
  description: "Create stunning marketing designs, political campaign posters, festival greetings, and business templates in minutes. Ready-to-use customizable graphics for everyone.",
  keywords: [
    "Template Builder", "Design 1123", "Political Posters", "Business Banners", 
    "Festival Wishes", "Campaign Graphics", "Marketing Design App", "MLA Posters", 
    "Shop Banners", "Easy Graphic Creator", "Figma Alternative", "Canva Alternative"
  ],
  icons: {
    icon: [{ url: "/og-image.jpeg", type: "image/jpeg" }],
    apple: "/og-image.jpeg",
    shortcut: "/og-image.jpeg",
  },
  openGraph: {
    title: "Design 1123 | Create Stunning Designs in Minutes",
    description: "Access thousands of professionally designed ready-to-use templates for business, political, and personal designs.",
    url: "https://design1123.com",
    siteName: "Design 1123",
    images: [
      {
        url: "/og-image.jpeg",
        width: 732,
        height: 762,
        alt: "Design 1123 App Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design 1123 | Premium Template Creation Platform",
    description: "Create stunning marketing, festival, and political designs in minutes.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "antialiased min-h-screen bg-bg-dark text-white selection:bg-brand-orange/30 selection:text-white flex flex-col relative w-full overflow-x-hidden"
        )}
      >
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
