"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Who We Work With", href: "#who-we-work-with" },
  { label: "About", href: "#about" },
  { label: "Catalog", href: "#catalog" },

];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_#e7e4dc]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Wordmark */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-[1.4rem] tracking-tight text-[#222222]">
            Malaika Nisar
          </span>
           
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.85rem] font-medium text-[#222222] transition-colors hover:text-[#a9822e]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/923078793323"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#222222] px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#222222] transition-colors hover:border-[#a9822e] hover:text-[#a9822e]"
          >
            Talk to MALAIKA
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-[#222222] transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[#222222] transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-[#222222] transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-[#e7e4dc] bg-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[0.95rem] font-medium text-[#222222]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/923078793323"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 border border-[#222222] px-5 py-3 text-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#222222]"
            >
              Talk to MALAIKA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
