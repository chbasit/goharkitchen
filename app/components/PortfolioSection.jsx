"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
const projects = [
  {
    image: "/images/fs-broadway-2.jpg",
    title: "Broadway Pizza",
    location: "Lahore, Pakistan",
  },
  {
    image: "/images/fs-who.jpg",
    title: "De Kitchen & Second life cafe",
    location: "Peshawar KPK",
  },
  {
    image: "/images/fs1.jpg",
    title: "Broadway Pizza",
    location: "Multan, Pakistan",
  },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);

   

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#ECE2D6] pt-18 md:pt-30 overflow-hidden">

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12">
  <div className="grid lg:grid-cols-[530px_1fr] gap-10 lg:gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
             
          >

             

            <h2
              className="
              font-display
text-[#32261F]
leading-[0.95]
uppercase
text-[36px]
sm:text-[44px]
md:text-[52px]
lg:text-[88px]
mt-6 lg:mt-8
              "
            >
              Portfolio
            </h2>

            <p
              className="
              font-body
              text-[#332820]
               px-0
              mt-8
              text-md
              "
            >
              FS Architects creates elegant interiors that combine
              timeless aesthetics with practical functionality.
              From luxury residences and premium kitchens to
              restaurants, cafés, hotels, hostels, and commercial
              interiors, every project is designed to elevate
              everyday living.
            </p>

            <button
              className="
              mt-10
              rounded-br-full
              rounded-tl-full
              rounded-tr-full
              bg-[#3C2D24]
              text-white
              px-6
              py-3
               
              tracking-[3px]
              font-body
              hover:bg-[#5C4536]
              transition
              "
            >
              View Portfolio
            </button>

          </motion.div>

         {/* RIGHT SLIDER */}

{/* RIGHT SLIDER */}

<motion.div
className="min-w-0"
  initial={{ opacity: 0, x: 120 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  {/* Images */}
  <div className="relative h-[320px] sm:h-[400px] lg:h-[520px] overflow-hidden">
    <motion.div
      key={current}
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
     className="flex gap-4 h-full w-full"
    >
      {/* Main Image */}
      <div className="relative w-full lg:w-[582px] h-full overflow-hidden rounded-sm flex-shrink-0">
        <Image
          src={projects[current].image}
          alt={projects[current].title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute left-8 bottom-8 text-white">
          <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl">
            {projects[current].title}
          </h3>

          <p className="mt-2 text-xl">
            {projects[current].location}
          </p>
        </div>

        
      </div>

      {/* Next Preview */}
      <div className="hidden lg:block relative flex-1 h-full overflow-hidden rounded-sm">
        <Image
          src={projects[(current + 1) % projects.length].image}
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>
    </motion.div>
  </div>

  {/* Bottom Controls */}
  <div className="mt-8 flex items-center justify-between">
    {/* Buttons */}
    <div className="flex gap-4">
      <button
        onClick={prevSlide}
        className="w-14 h-14 rounded-full border border-[#c2b0a4] flex items-center justify-center bg-[#3C2D24] text-white transition"
      >
        <ArrowLeft size={22} />
      </button>

      <button
        onClick={nextSlide}
        className="w-14 h-14 rounded-full border border-[#3C2D24] flex items-center justify-center bg-[#3C2D24] text-white transition"
      >
        <ArrowRight size={22} />
      </button>
    </div>

    {/* Dots */}
    <div className="flex gap-3">
      {projects.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`rounded-full transition-all duration-300 ${
            current === index
              ? "w-10 h-2 bg-[#3C2D24]"
              : "w-2 h-2 bg-[#3C2D24]/30"
          }`}
        />
      ))}
    </div>
  </div>
</motion.div>

</div>

</div>

</section>
);
} 