import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/_components/layout/header";
import Background from "@/app/_components/layout/background";
import Providers from "@/atoms/provider";
import GoogleAnalytics from "@/app/_components/GoogleAnalytics";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポケモン中国語クイズ",
  description:
    "ポケモンの中国語名（繁体字）から、日本語名を当てるクイズを遊べるwebアプリです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={notoSansJP.className}>
        <Background>
          <Providers>
            <div className="min-h-screen">
              <Header />
              <main className="container mx-auto flex flex-col justify-center">
                {children}
              </main>
            </div>
          </Providers>
        </Background>
      </body>
    </html>
  );
}
