"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import FullscreenMenu from "./FullscreenMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [heroMode, setHeroMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeroMode(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2
        w-[94%] lg:w-[92%]
        z-[100]
        rounded-3xl
        transition-all duration-500
        ${
          heroMode
            ? "bg-white/10 backdrop-blur-xl border border-white/20"
            : "bg-[#332820] backdrop-blur-xl border border-white/10"
        }`}
      >
        <div className="h-20 px-2 md:px-8 flex items-center justify-between">

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="text-white hover:scale-110 transition cursor-pointer"
          >
            <Menu size={34} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <h2 className="font-display text-white text-xl lg:text-3xl tracking-[6px]">
              FS
            </h2>

            <p className="text-white/80 uppercase text-[11px] tracking-[5px] mt-1">
              Architects
            </p>
          </div>

          <button
            className="
            cursor-pointer
            rounded-full
             px-0 md:px-7
            py-3
            text-white
            uppercase
            tracking-[3px]
            text-xs
            hover:bg-white
            hover:text-black
            transition-all
            duration-500
            "
          >
            Portfolio
          </button>

        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <FullscreenMenu
            close={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}