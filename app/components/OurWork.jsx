"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const titleLines = [
  "From concept to emotion:",
];

export default function StorySection() {
  return (
    <section className="bg-[#ECE2D6] text-[#332820] pb-24 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

  {/* CONTENT */}
  <div className="order-1 lg:order-2 max-w-[620px]">
    {/* Heading */}
    <div className="space-y-0">
      {titleLines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.h2
            initial={{ y: 120 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-display
              text-[#3B2C24]
              uppercase
              leading-[0.92]
              text-[42px]
              sm:text-[56px]
              md:text-[70px]
              lg:text-[92px]
            "
          >
            {line}
          </motion.h2>
        </div>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-6 max-w-[560px] font-body text-base md:text-[18px] leading-7 md:leading-8 text-[#332820]"
    >
      Faizan Sultan Architects transforms ideas into timeless
      architectural experiences. Every project combines thoughtful
      planning, innovative design, premium craftsmanship, and attention
      to every detail, creating spaces that inspire modern living.
    </motion.p>

    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="mt-8 inline-flex items-center gap-3 border-b border-[#332820] pb-2 uppercase tracking-[3px] font-body hover:gap-5 transition-all duration-300"
    >
      About Us
      <ArrowUpRight size={20} />
    </motion.button>
  </div>

  {/* IMAGE */}
  <motion.div
    initial={{ x: -120, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1.4,
      ease: "easeOut",
    }}
    className="order-2 lg:order-1 relative h-[380px] sm:h-[450px] md:h-[520px] lg:h-[620px] w-full"
  >
    <Image
      src="/images/work.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </motion.div>

</div>

      </div>
    </section>
  );
}