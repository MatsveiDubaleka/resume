import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Matsvei Dubaleka — Front-end Engineer";
const description =
  "Front-end engineer building React and Next.js products: community platforms, Web3 tools on TON, and full-stack web apps.";

const portraits = [
  {
    url: "/portraits/smile.jpg",
    width: 682,
    height: 1024,
    alt: "Matsvei Dubaleka smiling in a suit",
    type: "image/jpeg",
  },
  {
    url: "/portraits/beach.png",
    width: 1280,
    height: 852,
    alt: "Matsvei Dubaleka on the beach",
    type: "image/png",
  },
  {
    url: "/portraits/cafe.jpg",
    width: 660,
    height: 1024,
    alt: "Matsvei Dubaleka at a cafe",
    type: "image/jpeg",
  },
  {
    url: "/portraits/outdoor.jpg",
    width: 400,
    height: 400,
    alt: "Matsvei Dubaleka outdoors by the sea",
    type: "image/jpeg",
  },
] as const;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Matsvei Dubaleka", url: "https://github.com/MatsveiDubaleka" }],
  openGraph: {
    title,
    description,
    type: "profile",
    firstName: "Matsvei",
    lastName: "Dubaleka",
    images: [...portraits],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: portraits.map((photo) => photo.url),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
