import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fontVariables } from "@/lib/fonts";
import { bookSchema, SITE_URL } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Shape of Bangkok:History and Culture Through Nineteen Neighborhoods",
    template: "%s · The Shape of Bangkok",
  },
  description:
    "A portrait of Bangkok told through its neighborhoods, chronologically and geographically. Written by a resident. Volume II of the Understanding Thai Culture series.",
  keywords: [
    "Bangkok book",
    "Bangkok neighborhoods",
    "Bangkok history",
    "narrative nonfiction Bangkok",
    "Understanding Thai Culture",
    "how Bangkok was built",
  ],
  authors: [{ name: "Fabian Arndt" }],
  creator: "Fabian Arndt",
  openGraph: {
    type: "book",
    title: "The Shape of Bangkok",
    description:
      "Three minutes and four baht, and you are in a different city. The story of how Bangkok was actually built, told through nineteen neighborhoods.",
    url: SITE_URL,
    siteName: "The Shape of Bangkok",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Shape of Bangkok:a book by Fabian Arndt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Shape of Bangkok",
    description:
      "A portrait of Bangkok told through nineteen neighborhoods. Written by a resident.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
