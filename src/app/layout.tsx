import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCProvider } from "@/trpc/client";
import SessionProvider from "@/components/SessionProvider"
import { getServerSession } from "next-auth";

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
    "fullstack",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCProvider>
          <SessionProvider session={session}>
            <main className="mx-auto max-w-5xl flex gap-2">
              {children}
            </main>
          </SessionProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
