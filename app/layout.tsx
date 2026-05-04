import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liladhar Harode — Full Stack Developer",
  description: "Full Stack Developer with 4+ years crafting high-performance web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
