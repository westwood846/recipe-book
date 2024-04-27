import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontFamily = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Hanny's Cookbook",
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
      <body className={fontFamily.className}>
        <main className="container mx-auto max-w-screen-lg p-4 px-4 z-10 ">
          <h1 className="mb-12 text-center ">Hanny&apos;s Cookbook</h1>
          <p className="mb-12 text-center italic text-gray-600">
            {
              "'What do I have and what do I want?' I slowly pull out different ingredients, some of which I'm not super excited about, but need to be eaten soon. The kitchen is my stage and I'm an improviser, welcome to my show. Everything is real. I might clean up the counter a bit here and there, but generally, I show up on stage as it is. Pretty messy, confused, unscripted and most of the time hungry."
            }
          </p>
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
