"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fatima",
    role: "Homeowner",
    review:
      "Our new kitchen exceeded every expectation. The team perfectly balanced style and creating a beautiful space where our family loves spending time together.",
  },
  {
    name: "Ali",
    role: "Property Owner",
    review:
      "From the first consultation to the final installation, every detail was handled with exceptional care. The craftsmanship and quality are simply outstanding.",
  },
  {
    name: "Ayesha",
    role: "Interior Client",
    review:
      "The designers transformed our outdated kitchen into a bright, elegant, and welcoming space. Every cabinet, finish, and detail feels thoughtfully designed.",
  },
  
];

export default function TestimonialSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-[#718968]"
      
    >

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center text-white mb-16"
        >
           

         <h2 className="font-heading text-4xl md:text-6xl">Happy Clients Beautiful Kitchens</h2>

          <p className="font-body mt-5 text-md md:text-lg text-white max-w-2xl mx-auto">
            Discover why homeowners trust us to design kitchens that combine
            timeless elegance with everyday functionality.
          </p>
        </motion.div>

        {/* Cards */}
       <div className="grid md:grid-cols-3 gap-8">
  {testimonials.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="text-white rounded-xl p-4 text-center"
    >
      <p className="font-body text-white text-md md:text-lg mb-8">
        "{item.review}"
      </p>

      <div className="flex flex-col items-center">
        <h4 className="text-white text-md md:text-lg font-display">
          {item.name}
        </h4>

        <p className="text-white font-display text-sm md:text-base mt-1">
          {item.role}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}