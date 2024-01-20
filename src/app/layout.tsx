import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NekoFlix",
  description: "Stream anime series for free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-dark flex flex-col min-h-screen justify-between`}
      >
        <Nav/>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}
