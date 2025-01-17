import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  
  title: "Alkawn",
  description:
    "Alkawn Tech pioneers digital, software, and hardware innovations, driving transformative technologies for global impact.",
    creator:"Sayed Ali sina Hussaini",    

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
