import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nimbus Quill - Voice-Powered D&D Session Tracker",
  description: "Track your D&D sessions hands-free with AI-powered voice recognition. Automatically detect combat, damage, spells, and more from natural speech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen ${cinzel.variable} ${cormorant.variable} antialiased`} suppressHydrationWarning>
        {children}
        <svg aria-hidden="true">
          <filter id="paper-texture-filter">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.02"
              numOctaves="5"
              seed="1"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="20"
            />
          </filter>
        </svg>
        {/* <div className="noise" /> */}
      </body>
    </html>
  );
}
