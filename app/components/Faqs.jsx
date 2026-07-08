"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer custom kitchen designs?",
    answer:
      "Yes. Every kitchen is designed specifically for your home, lifestyle, and personal preferences. We create bespoke layouts that maximize functionality while reflecting your unique style.",
  },
  {
    question: "How long does a kitchen renovation take?",
    answer:
      "Project timelines vary depending on the size and complexity of the renovation. Most complete kitchen projects take between 4 to 8 weeks from design approval to installation.",
  },
  {
    question: "Can you help with selecting materials and finishes?",
    answer:
      "Absolutely. We guide you through selecting cabinetry, countertops, backsplashes, flooring, lighting, hardware, and finishes to create a cohesive luxury kitchen.",
  },
  {
    question: "Do you provide 3D kitchen designs before construction?",
    answer:
      "Yes. We provide realistic 3D visualizations so you can see exactly how your new kitchen will look before any work begins.",
  },
  {
    question: "What types of kitchens do you design?",
    answer:
      "We specialize in modern, contemporary, classic, shaker, transitional, and luxury bespoke kitchens tailored to every client's vision.",
  },
  {
    question: "Do you handle the complete installation?",
    answer:
      "Yes. From the initial consultation and design to manufacturing, installation, and finishing touches, we manage every stage of the project.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F6F4EC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-[#2E2118] mt-4">
            Everything You Need To Know
          </h2>
          <p className="font-body mt-6 text-gray-700 text-md md:text-lg  max-w-2xl mx-auto">
            Find answers to the most common questions about our luxury kitchen
            design, renovation, and installation services.
          </p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
  {faqs.map((faq, index) => {
    const isOpen = open === index;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="rounded-xl border border-stone-200 overflow-hidden h-fit"
      >
        <button
          onClick={() => setOpen(isOpen ? null : index)}
          className="w-full flex justify-between items-center px-7 py-6 text-left cursor-pointer"
        >
          <h3 className="font-body text-md md:text-lg text-[#2E2118] pr-5">
            {faq.question}
          </h3>

          {isOpen ? (
            <Minus className="w-5 h-5 flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 flex-shrink-0" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.35 }}
            >
              <div className="px-7 pb-7">
                <p className="font-body text-gray-700 ">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}