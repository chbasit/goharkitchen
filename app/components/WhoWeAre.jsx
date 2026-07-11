"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-[#ECE2D6] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1550px] mx-auto ">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="px-4 lg:px-20"
          >

            {/* Small Title */}

            <div className="mb-10">

              

              <h5 className="font-display text-3xl text-[#3B2C24] mt-3">
                Interior Design
              </h5>

            </div>

             

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
              We Design
              <br />
              Beautiful
              <br />
              Spaces
            </h2>

            {/* Paragraph */}

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.9,
              }}
              className="
              mt-10
              text-[#5D4D42]
              text-lg
               
              font-body
              max-w-xl
              "
            >
              At FS Architects, we create elegant interiors that combine
              aesthetics, comfort, and functionality. From luxurious
              residential kitchens to sophisticated restaurant interiors,
              modern cafés, boutique hotels, and commercial spaces, every
              project is thoughtfully designed to reflect your vision and
              elevate the experience of every visitor.
            </motion.p>

             

            {/* Button */}

            <motion.button
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="
              mt-12
              bg-[#3B2C24]
              text-white
              px-6
              py-3
              rounded-full
               
              tracking-[3px]
              flex
              items-center
              gap-3
              hover:bg-[#5a4336]
              transition
              "
            >
              View Projects

              <ArrowRight size={18} />
            </motion.button>

          </motion.div>
                    {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Image Reveal Container */}

            <motion.div
              initial={{
                width: "72%",
                opacity: 0,
              }}
              whileInView={{
                width: "100%",
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                ml-auto
                overflow-hidden
                rounded-none
                 
              "
            >
              {/* Image Zoom */}

              <motion.div
                initial={{
                  scale: 1.12,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                className="relative h-[360px] md:h-[420px] lg:h-[620px] w-full"
              >
                <Image
                  src="/images/fs-who-broadway.jpg"
                  alt="FS Architects"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

             

             

          </motion.div>

        </div>

      </div>

    </section>
  );
}