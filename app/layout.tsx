import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "DriveTeam Auto Skola",
  description:
    "Postanite siguran vozač uz auto školu Drive Team iz Novog Sada. Nudimo profesionalne instruktore, fleksibilne časove i moderne vozila. Prijavite se danas i započnite svoju vozačku avanturu!",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "auto škola",
    "vozačka obuka",
    "Novi Sad",
    "sigurnost u vožnji",
    "vozačka dozvola",
  ],
  openGraph: {
    title: "DriveTeam Auto Skola",
    description:
      "Auto škola Drive Team u Novom Sadu – postanite sigurni vozač uz naše profesionalne instruktore i moderne metode obuke.",
    url: "https://autoskoladt.rs",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 600,
        alt: "Drive Team Auto Škola",
      },
    ],
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.variable} min-h-screen bg-gray-100 text-muted-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
