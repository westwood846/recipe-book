import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanny's Cook Book",
  description:
    "The kitchen is my stage and I'm an improviser, welcome to my show. Everything is real. I might clean up the counter a bit here and there, but generally, I show up on stage as it is. Pretty messy, confused, unscripted and most of the time hungry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
