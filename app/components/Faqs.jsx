"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What interior design services do you offer?",
    answer:
      "We provide complete residential and commercial interior design services, including luxury homes, kitchens, restaurants, cafés, hotels, hostels, offices, and retail spaces.",
  },
  {
    question: "Can you customize a design according to my requirements?",
    answer:
      "Absolutely. Every project is designed around your lifestyle, business needs, budget, and preferred aesthetic to create a unique and functional space.",
  },
  {
    question: "How long does an interior design project take?",
    answer:
      "Project timelines depend on the size and complexity of the space. After the initial consultation, we provide a detailed schedule with estimated milestones.",
  },
  {
    question: "Do you work on commercial projects?",
    answer:
      "Yes. We specialize in restaurants, cafés, offices, hotels, hostels, retail stores, and other commercial interiors that combine aesthetics with functionality.",
  },
  {
  question: "Do you provide 3D visualizations before execution?",
  answer:
    "Yes. We create realistic 3D renders and design visualizations so you can clearly see the final look of your space before construction or installation begins.",
},
{
  question: "Do you handle both design and project execution?",
  answer:
    "Yes. We offer a complete turnkey solution, managing everything from concept development and space planning to material selection, construction, and final finishing for a seamless experience.",
},
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#ECE2D6] pt-20 pb-30">
      <div className="max-w-[1550] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-display text-[#332820] text-4xl md:text-7xl mt-6">
            Frequently Asked Questions
          </span>

         

          <p className="max-w-2xl mx-auto mt-6 text-[#332820] text-md font-body">
            Everything you need to know about our interior design process,
            services, and how we transform spaces into timeless environments.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
  key={index}
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.08 }}
  className="h-fit  overflow-hidden"
>
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-0 md:px-4 py-2 md:py-4 text-left"
                >
                  <h3 className="font-body text-[#332820] text-lg">
                    {faq.question}
                  </h3>

                  <div className="cursor-pointer w-10 h-10  flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={18} className="text-[#332820]" />
                    ) : (
                      <Plus size={18} className="text-[#332820]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
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
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <p className="text-[#332820]  font-body text-md">
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