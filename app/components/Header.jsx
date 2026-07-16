"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroHeader() {
  return (
    <header className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

    {/* Hero Content */}
<div className="absolute inset-0 z-20 flex flex-col lg:block">

  {/* Top Heading */}
  <motion.div
    initial={{ x: -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      px-4
      pt-24
      lg:absolute lg:left-16
    "
  >
    <h1 className="font-serif uppercase text-white leading-[0.9] pt-48 md:pt-12
      text-[34px]
      sm:text-[42px]
      md:text-[60px]
      lg:text-[80px]
      xl:text-[120px]">
      Study of
      <br />
      Architecture
    </h1>
  </motion.div>

  {/* Bottom Area */}
  <div
    className="
      mt-auto
      px-4
      pb-6
      lg:p-0
    "
  >
    {/* Left Text */}
    <motion.p
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.7,
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        font-serif
        text-white
        text-xl
        sm:text-2xl
        mb-3

        lg:absolute
        lg:left-16
        lg:bottom-36
        lg:text-5xl
      "
    >
      Exclusive design,
      <br />
      timeless emotions
    </motion.p>

    {/* Right Heading */}
    <motion.h2
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        font-serif
        uppercase
        text-white
        leading-[0.9]
        text-right

        text-[42px]
        sm:text-[54px]
        mb-5

        lg:absolute
        lg:right-16
        lg:bottom-28
        lg:text-[70px]
        xl:text-[100px]
      "
    >
      Best Interior Designer
      <br />
       In Pakistan
    </motion.h2>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.6,
        duration: 1,
      }}
      className="
        flex
        flex-col
        gap-3

        lg:absolute
        lg:left-16
        lg:bottom-12
        lg:flex-row
      "
    >
      <button className="bg-white text-black px-8 py-4 flex items-center justify-center gap-3 uppercase tracking-[3px] hover:bg-[#D4AF37] transition">
        View Projects
        <ArrowRight size={18} />
      </button>

      <button className="border border-white text-white px-8 py-4 uppercase tracking-[3px] hover:bg-white hover:text-black transition">
        Free Consultation
      </button>
    </motion.div>
  </div>
</div>
    </header>
  );
}
