import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const neuropolitical = localFont({
  src: "./../../public/fonts/neuropolitical.otf",
  display: "swap",
  variable: "--font-neuropolitical",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${neuropolitical.variable} ${inter.variable} ${montserrat.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
