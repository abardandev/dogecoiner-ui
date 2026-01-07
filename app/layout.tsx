import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import MainLayout from "@/src/controls/MainLayout";
import QueryProvider from "@/src/providers/QueryProvider";
import SessionProvider from "@/src/providers/SessionProvider";
import { WoofProvider } from "@/src/context/WoofContext";
import { PortfolioProvider } from "@/src/context/PortfolioContext";
import Compose from "@/src/providers/Compose";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dogecoiner.io - track crypto. much wow!",
  description: "track crypto. much wow!",
  icons: {
    icon: [
      { url: "/favicon/favicon16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon/favicon96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon120x120.png", type: "image/png", sizes: "120x120" },
      { url: "/favicon/favicon152x152.png", type: "image/png", sizes: "152x152" },
      { url: "/favicon/favicon180x180.png", type: "image/png", sizes: "180x180" },
      { url: "/favicon/favicon192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon/favicon256x256.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon/favicon512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon32x32.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const value = {
    ripple: true
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Compose components={[SessionProvider, QueryProvider, WoofProvider, PortfolioProvider]}>
          <PrimeReactProvider value={value}>
            <MainLayout children={children} />
          </PrimeReactProvider>
        </Compose>
      </body>
    </html>
  );
}
