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

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Matsvei Dubaleka", url: "https://github.com/MatsveiDubaleka" }],
  openGraph: {
    title,
    description,
    type: "profile",
    firstName: "Matsvei",
    lastName: "Dubaleka",
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
