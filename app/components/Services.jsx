"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Kitchen Design",
    description:
      "Bespoke kitchen layouts designed to suit your lifestyle with timeless elegance and practical functionality.",
    image: "/images/image1.jpg",
  },
  {
    title: "Luxury Cabinetry",
    description:
      "Premium handcrafted cabinetry with high-quality finishes, smart storage, and exceptional craftsmanship.",
    image: "/images/image3.jpg",
  },
  {
    title: "Kitchen Renovation",
    description:
      "Transform outdated kitchens into beautiful modern spaces using premium materials and thoughtful design.",
    image: "/images/image4.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F6F4EC] py-10 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
         

          <h2 className="font-heading text-5xl md:text-6xl text-[#2E2118] mt-4 mb-4">
            Timeless Kitchen Design
          </h2>


          <p className="font-body text-gray-700 text-md md:text-lg">
            We create elegant kitchens that combine beautiful aesthetics,
            premium craftsmanship, and everyday functionality for modern homes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.25,
              }}
              className="group"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={450}
                  height={600}
                  className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="pt-6">
                <h3 className="font-heading text-3xl md:text-4xl text-[#2E2118] mb-3">
                  {service.title}
                </h3>

                <p className="font-body text-gray-700 text-md md:text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}