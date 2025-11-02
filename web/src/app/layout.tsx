import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoulMatch v2 ? Find Real Friends",
  description:
    "A non-profit movement helping people in Denmark build meaningful, safe, and lasting friendships.",
  metadataBase: new URL("https://agentic-02a71fcf.vercel.app"),
  openGraph: {
    title: "SoulMatch v2 ? Find Real Friends",
    description:
      "A non-profit movement helping people in Denmark build meaningful, safe, and lasting friendships.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoulMatch v2 ? Find Real Friends",
    description:
      "A non-profit movement helping people in Denmark build meaningful, safe, and lasting friendships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-40 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/15 dark:bg-black/40">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="text-lg font-semibold">
              SoulMatch <span className="text-zinc-400">v2</span>
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/onboarding" className="hover:underline">Get Started</Link>
              <Link href="/match" className="hover:underline">Matches</Link>
              <Link href="/safety" className="hover:underline">Safety</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </div>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
        <footer className="border-t border-black/10 bg-white/70 py-6 text-center text-sm text-zinc-600 dark:border-white/15 dark:bg-black/40 dark:text-zinc-400">
          <div className="mx-auto max-w-6xl px-4">
            Gem mobilen v?k, og v?r sammen som mennesker ? SoulMatch v2
          </div>
        </footer>
      </body>
    </html>
  );
}
