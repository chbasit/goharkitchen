"use client";

import { motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const menuItems = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Contact",
];

export default function FullscreenMenu({ close }) {
  return (
    
    <motion.div
      className="fixed inset-0 z-[999] flex overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >

      {/* LEFT PANEL */}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        w-full
        lg:w-1/2
        bg-[#3B2C24]
        text-white
        relative
        flex
        flex-col
        justify-center
        "
      >

        {/* Close */}

        <button
          onClick={close}
          className="absolute top-8 left-8 cursor-pointer "
        >
          <X
            size={34}
            strokeWidth={1.5}
          />
        </button>

        {/* Navigation */}

        <div className="mt-10">

          {menuItems.map((item, index) => (

            <motion.button
              key={item}
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4 + index * 0.12,
                duration: 0.7,
              }}
              className="
              group
              w-full
              px-10
              lg:px-16
              py-7
              border-b
              border-white/10
              flex
              justify-between
              items-center
              "
            >

              <span
                className="
                text-4xl
                lg:text-6xl
                font-display
                uppercase
                tracking-[4px]
                "
              >
                {item}
              </span>

              <ArrowUpRight
                className="
                opacity-0
                -translate-x-5
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all
                duration-500
                "
                size={34}
              />

            </motion.button>

          ))}

        </div>

      </motion.div>
           {/* RIGHT PANEL */}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          hidden
          lg:flex
          w-1/2
          bg-[#D6CBBC]
          text-[#3B2C24]
          relative
          flex-col
          justify-between
          px-16
          py-14
        "
      >
        {/* Logo */}

        <div>
          <h1 className="font-display text-8xl tracking-[8px]">
            FS
          </h1>

          <p className="mt-3 uppercase tracking-[6px] text-sm">
            Architects
          </p>

          <p className="mt-8 text-lg leading-8 text-[#6A5648]">
            Architecture
            <br />
            Interior Design
            <br />
            Construction
          </p>
        </div>
<div className="grid grid-cols-2 gap-14">

  {/* Left Column */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
  >
    <p className="uppercase tracking-[5px] text-xs text-[#7A6759] mb-4">
      Phone
    </p>

    <a
      href="tel:+923153366669"
      className="block text-xl hover:text-[#8b5e3c] transition"
    >
      +92 315 3366669
    </a>

    <div className="mt-12">

      <p className="uppercase tracking-[5px] text-xs text-[#7A6759] mb-4">
        Email
      </p>

      <a
        href="mailto:faizansultanarchitects@gmail.com"
        className="break-all hover:text-[#8b5e3c] transition"
      >
        faizansultanarchitects@gmail.com
      </a>

    </div>
  </motion.div>

  {/* Right Column */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
  >

    <p className="uppercase tracking-[5px] text-xs text-[#7A6759] mb-4">
      Studio
    </p>

    <p className="leading-8">
      37 CCA Block L
      <br />
      Khayaban-e-Amin Society
    </p>

    <div className="mt-12">

      <p className="uppercase tracking-[5px] text-xs text-[#7A6759] mb-4">
        Follow
      </p>

      <div className="space-y-3">

        <a
          href="#"
          className="group flex items-center gap-2 hover:translate-x-3 transition-all duration-500"
        >
          Instagram
          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 transition"
          />
        </a>

        <a
          href="#"
          className="group flex items-center gap-2 hover:translate-x-3 transition-all duration-500"
        >
          Facebook
          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 transition"
          />
        </a>

        <a
          href="#"
          className="group flex items-center gap-2 hover:translate-x-3 transition-all duration-500"
        >
          LinkedIn
          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 transition"
          />
        </a>

      </div>

    </div>

  </motion.div>

</div>

{/* Footer */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="border-t border-[#3B2C24]/20 pt-8 flex justify-between items-center"
>

  <span className="text-sm">
    © 2026 FS Architects
  </span>

  <span className="text-sm tracking-[3px] uppercase">
    Architecture • Interior • Construction
  </span>

</motion.div>

</motion.div>

</motion.div>
);
}
       

         

  