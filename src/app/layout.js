import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FutureTravel AI Studio — Photorealistic Scenic Background Swaps",
  description:
    "Place yourself in gorgeous landmarks and travel destinations worldwide instantly. Upload your portrait, select iconic presets (Paris, Kyoto, Colosseum, Maldives), and get a photorealistic travel snapshot powered by DeepMind AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
