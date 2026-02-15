import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Грозный Гид - Откройте для себя сердце Чечни",
  description: "Откройте для себя красивые места, богатую историю и яркую культуру Чеченской Республики.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
