"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const topImages = [
 "/images/fs-who-broadway.jpg",
  "/images/fs-broadway-2.jpg",
  "/images/fs-who.jpg",
  "/images/pashawar.jpg"
];

const bottomImages = [
  "/images/fs-tajarat.jpg",
  "/images/fs-who2.jpg",
  "/images/fs-who-broadway.jpg",
  "/images/fs1.jpg"
];

export default function AboutSection() {
  return (
    <section className="bg-[#ECE2D6] text-[#332820] py-12  overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* ================= Mission ================= */}

<motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="max-w-6xl mx-auto mb-24"
>
  {/* Heading */}
  <div className="text-center mb-12">
    <h2
      className="
        font-display
        text-[#3B2C24]
        uppercase
        leading-[0.92]
        text-[48px]
        md:text-[70px]
        lg:text-[92px]
      "
    >
      INSPIRED
      
      BY NOW
    </h2>
  </div>

  {/* Description */}
  <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
    <p className="font-body text-md md:text-lg text-[#332820] leading-relaxed">
      At FS Architect, we believe design transforms the everyday into
      something extraordinary. Each project begins with a vision where
      aesthetics, functionality, and emotion coexist in perfect balance.
    </p>

    <p className="font-body text-md md:text-lg text-[#332820] leading-relaxed">
      We manage every phase with a turnkey approach, guaranteeing a
      result that fully respects aesthetics, functionality, timeframes,
      and budget.
    </p>
  </div>
</motion.div>

        {/* ================= First Row ================= */}

       <div className="overflow-hidden">
  <motion.div
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    }}
    className="flex gap-2 w-max"
  >
    {[...topImages, ...topImages].map((image, index) => (
      <div
        key={index}
        className="relative w-[600px] h-[440px] shrink-0"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    ))}
  </motion.div>
</div>

        {/* spacing */}

        <div className="h-2" />

        {/* ================= Second Row ================= */}

        <div className="overflow-hidden">
  <motion.div
    animate={{
      x: ["-50%", "0%"],
    }}
    transition={{
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    }}
    className="flex gap-2 w-max"
  >
    {[...bottomImages, ...bottomImages].map((image, index) => (
      <div
        key={index}
        className="relative w-[600px] h-[440px] shrink-0"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    ))}
  </motion.div>
</div>
      </div>
    </section>
  );
}