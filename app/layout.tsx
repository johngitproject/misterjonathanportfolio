import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/i18n/content";
import { getLang } from "@/i18n/lang";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteDescription =
  "Mister Jonathan is an independent trader and developer building software systems for trading, data and AI.";

export const metadata: Metadata = {
  title: {
    default: "Mister Jonathan — Independent Trader & Developer",
    template: "%s — Mister Jonathan",
  },
  description: siteDescription,
  authors: [{ name: "Mister Jonathan" }],
  openGraph: {
    title: "Mister Jonathan — Independent Trader & Developer",
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Mister Jonathan",
    // TODO: add a real portfolio preview image once available.
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = await getLang();
  const { nav, ui } = content[lang];
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base font-sans text-ink">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <div id="top">
          <Header lang={lang} nav={nav} menu={ui.menu} close={ui.close} />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
