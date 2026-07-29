"use client";


import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
} from "lucide-react";
const LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#shop" },  
  { label: "Collections", href: "#collections" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "About", href: "#About" },
  { label: "Contact", href: "#contact" },
  { label: "Commission", href: "/commission" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const pathname = usePathname();
const isHome = pathname === "/";
const textColor =
  isHome && !scrolled
    ? "text-white hover:text-gray-200"
    : "text-[#222] hover:text-[#043852]";
  return (
    <>
   

 <div
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHome
      ? scrolled
        ? "bg-white shadow-md"
        : "bg-transparent"
      : "bg-white shadow-md"
  }`}
>
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">

          {/* Logo */}
          <a href="/" className="flex flex-col">
           <span
  className={`font-serif text-3xl ${
    isHome && !scrolled ? "text-white" : "text-[#1f1f1f]"
  }`}
>
  Samman
</span>
          
          </a>

       <nav className="hidden items-center gap-10 lg:flex">
  {LINKS.map((item) => (
    <Link
      key={item.label}
      href={item.href}
      className={`text-md font-medium transition ${textColor}`}
    >
      {item.label}
    </Link>
  ))}
</nav>

          <div
  className={`hidden items-center gap-5 lg:flex ${
    isHome && !scrolled ? "text-white" : "text-[#222]"
  }`}
>

           <div
  className={`flex items-center rounded-full px-4 py-2 ${
    isHome && !scrolled
      ? "border border-white/50 bg-white/10"
      : "border border-[#ddd] bg-white"
  }`}
>
  <Search
    size={16}
    className={isHome && !scrolled ? "text-white" : "text-gray-400"}
  />
  <input
    type="text"
    placeholder="Start typing..."
    className={`ml-2 w-25 bg-transparent text-sm outline-none ${
      isHome && !scrolled
        ? "text-white placeholder:text-white/70"
        : "placeholder:text-gray-400"
    }`}
  />
</div>

            

            {/* Bag */}
            <a
              href="#"
              className="relative flex items-center gap-2 text-sm font-medium hover:text-[#043852]"
            >
              <ShoppingBag size={20} />
              {/* Bag */}
              {/* <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#043852] text-[10px] text-white">
                0
              </span> */}
            </a>
          </div>

          <button
  onClick={() => setOpen(!open)}
  className={`lg:hidden ${
    isHome && !scrolled ? "text-white" : "text-[#222]"
  }`}
>
  {open ? <X size={28} /> : <Menu size={28} />}
</button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t bg-white px-6 py-6 lg:hidden">
            <div className="mb-5 flex items-center rounded-full border px-4 py-3">
              <Search size={18} />
              <input
                placeholder="Start typing..."
                className="ml-3 flex-1 outline-none"
              />
            </div>

            <nav className="flex flex-col gap-5">
              {LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base"
                >
                  {item.label}
                </a>
              ))}

             

              <a href="#" className="flex items-center gap-3">
                <ShoppingBag size={18} />
                Bag
              </a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}