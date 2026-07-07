import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { inter, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Wrote This Instead",
  description: "A minimalist poetry archive.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}