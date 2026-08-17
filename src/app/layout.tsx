import type { Metadata } from "next";
import localFont from "next/font/local";
import { Ovo } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const bebasNote = localFont({
  src: [
    {
      path: "../../public/fonts/bebas-note/BebasNote-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/bebas-note/Bebas Notes.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/bebas-note/BebasNote-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bebas-note",
  display: "swap",
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ovo",
  display: "swap",
});

export const metadata: Metadata = createMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNote.variable} ${cabinetGrotesk.variable} ${ovo.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
