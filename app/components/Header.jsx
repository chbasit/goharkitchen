"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/images/image5.webp",
    title: "Luxury Kitchens Designed for Modern Living in Pakistan",
    
  },
  {
    image: "/images/image2.jpg",
    title: "Beautiful Interiors Crafted Around Your Lifestyle",
     
  },
  {
    image: "/images/image3.jpg",
    title: "Premium Kitchen & Interior Solutions in Pakistan",
     
  },
];

export default function HeroHeader() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 12000);

    return () => clearInterval(slider);
  }, []);

  return (
    <header className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
  key={current}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{
    opacity: { duration: 1.2, ease: "easeInOut" }
  }}
  className="absolute inset-0"
>
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Small Heading */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8 }}
                className="h-[2px] bg-[#D8B36A] mb-6"
              />

             
              {/* Title */}
              <h1 className="font-display text-white text-3xl lg:text-5xl leading-[1.1]">
                {slides[current].title}
              </h1>
 

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">
                <button className="cursor-pointer bg-white text-black px-8 py-3 tracking-[2px] font-body hover:bg-[#D8B36A] transition duration-300 flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </button>

                <button className="cursor-pointer font-body border border-white text-white px-8 py-3 tracking-[2px] hover:bg-white hover:text-black transition duration-300">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-12 h-1 bg-white"
                : "w-6 h-1 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.1, y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
        className="absolute bottom-10 right-8 z-30 hidden md:flex flex-col items-center text-white"
      >
        <span className="uppercase tracking-[4px] text-xs rotate-90 mb-10">
          Scroll
        </span>
        {/* <div className="w-[1px] h-16 bg-white/70"></div> */}
      </motion.div>
    </header>
  );
}