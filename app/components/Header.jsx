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
      <div className="absolute inset-0 z-20">

        {/* Left Large Title */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-6 lg:left-16 top-28 lg:top-36"
        >
          <h1 className="font-serif uppercase text-white leading-[0.9] text-[45px] md:text-[70px] lg:text-[90px] xl:text-[130px]">
            Study of
            <br />
            Architecture
          </h1>
        </motion.div>

        {/* Bottom Left Text */}
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-6 lg:left-16 bottom-36"
        >
          <p className="font-serif text-white text-2xl md:text-3xl lg:text-5xl leading-tight">
            Exclusive design,
            <br />
            timeless emotions
          </p>
        </motion.div>

        {/* Right Large Text */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute right-6 lg:right-16 bottom-28 text-right"
        >
          <h2 className="font-serif uppercase text-white leading-[0.9] text-[55px] md:text-[80px] lg:text-[130px] xl:text-[150px]">
            Interior
            <br />
            Design
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.6,
            duration: 1,
          }}
          className="absolute left-6 lg:left-16 bottom-12 flex gap-5 flex-wrap"
        >
          <button className="bg-white text-black px-8 py-4 flex items-center gap-3 uppercase tracking-[3px] hover:bg-[#D4AF37] transition">
            View Projects
            <ArrowRight size={18} />
          </button>

          <button className="border border-white text-white px-8 py-4 uppercase tracking-[3px] hover:bg-white hover:text-black transition">
            Free Consultation
          </button>
        </motion.div>

        
      </div>
    </header>
  );
}