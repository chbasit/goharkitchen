"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#F6F4EC] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
  duration: 1.2,
  ease: "easeOut",
}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
           

          <h2 className="font-heading text-4xl md:text-6xl text-[#2E2118]">
            Beautiful Kitchens Designed For Modern Living
          </h2>

          <p className="font-body mt-6 text-gray-700 text-md md:text-lg ">
            We create bespoke kitchens that combine timeless elegance,
            exceptional craftsmanship, and practical functionality. Every space
            is thoughtfully designed to reflect your lifestyle while becoming
            the true heart of your home.
          </p>
        </motion.div>

        {/* Images & Quote */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
    transition={{
  duration: 1.2,
  delay: 0.2,
  ease: "easeOut",
}}

          >
            <Image
              src="/images/about1.jpg"
              alt=""
              width={700}
              height={600}
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           transition={{
  duration: 1.2,
  delay: 0.45,
  ease: "easeOut",
}}
          >
            <Image
              src="/images/about4.jpg"
              alt=""
              width={700}
              height={600}
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
  duration: 1.2,
  delay: 0.7,
  ease: "easeOut",
}}
          >
            <Image
              src="/images/about3.jpg"
              alt=""
              width={700}
              height={600}
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          {/* Bottom Right Quote */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
  duration: 1.2,
  delay: 0.95,
  ease: "easeOut",
}}
            className="flex items-center p-10 md:p-14"
          >
            <div>
              <Quote
                size={42}
                className="text-[#A98A64] mb-6 rotate-180"
              />

              <p className="font-body text-xl md:text-2xl leading-relaxed text-[#2E2118]">
                Every kitchen we create is thoughtfully designed to blend
 elegance, comfort, and exceptional craftsmanship — creating spaces where memories are made every day.
              </p>

              <div className="mt-8">
                <h4 className="font-display font-normal text-lg">
                  Gohar Kitchen Design
                </h4>

                <p className="text-gray-700 font-display">
                  Luxury Interior Studio
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}