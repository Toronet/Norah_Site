import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "@/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NORAH Token - Multi-Chain RWA Tokenization Platform",
  description:
    "NORAH Token represents contractual rights to Norah Mining's lithium concentrate revenue streams. Multi-chain Real World Asset tokenization with automated revenue distribution.",
  authors: [{ name: "NORAH Token" }],
  openGraph: {
    title: "NORAH Token - Multi-Chain RWA Tokenization Platform",
    description:
      "Multi-chain Real World Asset tokenization platform for lithium mining revenue streams with automated USDT distributions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@norah_token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
