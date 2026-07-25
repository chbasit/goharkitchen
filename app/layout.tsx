import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malaika Atelier | Bespoke Art for Every Space",
  description:
    "Malaika Atelier creates custom artwork for homes, offices and commercial spaces — neon, nature calligraphy, realism, portraits, oil and abstract. Curated for interior designers and restaurants too.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#222222]">
        {children}
      </body>
    </html>
  );
}
