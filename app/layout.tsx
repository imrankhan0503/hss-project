import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Footer/index";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Hässelby Strands Sjöscoutkår",
  description: "Upptäck havet, utveckla ledarskap och skapa livslånga minnen tillsammans med oss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased font-sans`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-1">
          <Navigation />
          {children}
        </main>
        <Footer locale="sv" />
      </body>
    </html>
  );
}