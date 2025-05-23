import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const phosphateSolid = localFont({
  src: "./fonts/PhosphatePro-Solid.otf",
  variable: "--font-heading-phosphate-solid",
  weight: "400",
});

const phosphateInline = localFont({
  src: "./fonts/PhosphatePro-Inline.otf",
  variable: "--font-heading-phosphate-inline",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subset(s) you need
  variable: "--font-body-montserrat-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${phosphateSolid.variable} ${phosphateInline.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
