import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLOGBASKET",
  description:
    "Next.js based FullStack Multi-User Blogging application using PostgreSQL, Prisma ORM & Typescript.",
  keywords: [
    "next.js",
    "nextjs",
    "blogs",
    "postgresql",
    "prisma-orm",
    "vercel",
    "typescript",
    'fullstack'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCProvider>
         {children} 
        </TRPCProvider>
      </body>
    </html>
  );
}
