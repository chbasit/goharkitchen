import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FS Architects ",
  description: "Architect & Interior Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#2E2118] ">
        {children}
      </body>
    </html>
  );
}