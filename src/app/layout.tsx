import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Makje",
  description:
    "Welcome to Makje's portfolio - a showcase of innovative web development projects, technical skills, and a testament to a lifelong passion for coding. Dive in to explore my journey and expertise in the realm of web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
