"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Residence",
    subtitle: "Featured Project",
    image: "/images/fs-image-new.jpg",
  },
  {
    title: "Modern Villa",
    subtitle: "Featured Project",
    image: "/images/fs-tajarat.jpg",
  },
  {
    title: "Corporate Office",
    subtitle: "Featured Project",
    image: "/images/fs-broadway-2.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-black">
      {projects.map((project, index) => (
        <section
          key={index}
          className="sticky top-0 h-screen overflow-hidden"
          style={{
            zIndex: index + 1,
          }}
        >
          {/* Background Image */}

          <motion.div
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.4 }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}

          <div className="relative z-10 h-full max-w-[1500px] mx-auto px-10 flex items-center justify-between">

            <div>
              <p className="font-body uppercase tracking-[4px] text-white/80 mb-6 text-xl">
                {project.subtitle}
              </p>

              <h2 className="font-display text-7xl md:text-9xl text-[#F1E7D9] leading-[0.9]">
                {project.title}
              </h2>
            </div>

            <div className="flex flex-col items-end gap-10">
              <span className="font-body text-4xl text-white">
                {index + 1} / {projects.length}
              </span>

              <button className="border border-white rounded-full px-10 py-4 text-white font-body hover:bg-white hover:text-black transition">
                VIEW
              </button>
            </div>

          </div>
        </section>
      ))}
    </section>
  );
}