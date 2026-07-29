import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samman | Custom Oil Portraits & Original Paintings",
  description:
    "Discover hand-painted oil portraits, custom commissions, nature paintings, and original artwork by Samman. Timeless paintings created with premium materials for homes, offices, and meaningful gifts.",
  keywords: [
    "Samman",
    "Oil Painter",
    "Custom Oil Portrait",
    "Portrait Painting",
    "Hand Painted Artwork",
    "Nature Paintings",
    "Landscape Paintings",
    "Original Oil Paintings",
    "Commission Portrait",
    "Custom Artwork",
    "Family Portrait Painting",
    "Pet Portrait",
    "Wall Art",
    "Fine Art",
  ],
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
