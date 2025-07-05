import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/app/components/AOSInitializer";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["200"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}