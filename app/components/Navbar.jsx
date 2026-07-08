"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "Projects",
  "Kitchens",
  "About",
  "Services",
  "Contact",
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [heroMode, setHeroMode] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroHeight = window.innerHeight;

      // Hero section
      if (currentScroll < heroHeight) {
        setHeroMode(true);
        setShowNav(true);
      } else {
        setHeroMode(false);

        if (currentScroll < lastScroll) {
          // scrolling up
          setShowNav(true);
        } else {
          // scrolling down
          setShowNav(false);
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${
        heroMode
          ? "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
      <h2
  className={`text-xl font-body leading-tight transition-colors ${
    heroMode ? "text-white" : "text-black"
  }`}
>
  <span className="block">Gohar Kitchen</span>
  <span className="block">Design</span>
</h2>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-10 uppercase font-body tracking-[2px] text-sm transition-colors ${
            heroMode ? "text-white" : "text-black"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#d2b48c] transition"
            >
              {item}
            </li>
          ))}
        </ul>
 
        
        <button
          className={`hidden lg:block px-7 py-3 uppercase tracking-widest border transition ${
            heroMode
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          Enquire
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobile(!mobile)}
          className={`lg:hidden ${
            heroMode ? "text-white" : "text-black"
          }`}
        >
          {mobile ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className={`lg:hidden ${
              heroMode ? "bg-black/95" : "bg-white"
            }`}
          >
            <div className="flex flex-col py-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`py-4 uppercase tracking-[3px] ${
                    heroMode ? "text-white" : "text-black"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                className={`mx-6 mt-6 py-3 uppercase border ${
                  heroMode
                    ? "border-white text-white"
                    : "border-black text-black"
                }`}
              >
                Enquire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}