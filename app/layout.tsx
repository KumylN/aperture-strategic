import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aperture-strategic.com"),
  title: {
    default: "Aperture Strategic — Independent Technology Advisory",
    template: "%s — Aperture Strategic",
  },
  description:
    "Independent technology advisory for companies that take engineering seriously. Principal-led strategy, architecture, and leadership engagements for founders, executives, and investment teams.",
  applicationName: "Aperture Strategic",
  authors: [{ name: "Aperture Strategic" }],
  creator: "Aperture Strategic",
  keywords: [
    "technology advisory",
    "fractional CTO",
    "technical due diligence",
    "AI advisory",
    "engineering leadership",
    "CTO consulting",
  ],
  openGraph: {
    title: "Aperture Strategic — Independent Technology Advisory",
    description:
      "Independent technology advisory for companies that take engineering seriously.",
    url: "https://aperture-strategic.com",
    siteName: "Aperture Strategic",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aperture Strategic",
    description:
      "Independent technology advisory for companies that take engineering seriously.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-navy text-offwhite font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
