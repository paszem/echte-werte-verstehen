import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echte Werte verstehen | Gold & Werterhalt einfach erklärt",
  description:
    "Gold verständlich erklärt. Erfahre einfach und unverbindlich, wie Werterhalt, Goldkauf und die verschiedenen Modelle funktionieren.",
  keywords: [
    "Gold",
    "Gold kaufen",
    "Gold Schweiz",
    "Werterhalt",
    "Sachwerte",
    "Inflation",
    "Goldbarren",
    "Echte Werte",
  ],
  openGraph: {
    title: "Echte Werte verstehen",
    description:
      "Gold & Werterhalt einfach erklärt – verständlich, transparent und ohne Fachchinesisch.",
    url: "https://echte-werte-verstehen.ch",
    siteName: "Echte Werte verstehen",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}