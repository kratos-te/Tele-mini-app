import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
import "./globals.css";
import { AppProvider } from "@/context/useAppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$BEE Trade",
  description: "BEE Trade TAP GAME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  );
}
