import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DriveTeam Auto Skola",
  description:
    "Postanite siguran vozač uz auto školu Drive Team iz Novog Sada. Nudimo profesionalne instruktore, fleksibilne časove i moderne vozila. Prijavite se danas i započnite svoju vozačku avanturu!",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.variable} min-h-screen bg-gray-100 text-muted-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
