import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "ECHTE WERTE – Verstehen. Entscheiden. Zukunft.", description: "Eine einfache Erklärung für Menschen, die zuerst verstehen möchten, bevor sie eine Entscheidung treffen." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="de"><body>{children}</body></html>; }
