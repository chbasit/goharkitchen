"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How do I order a custom painting?",
    a: "Simply send me a message with your photos or ideas through Instagram or WhatsApp. We'll discuss your requirements, preferred size, style, and timeline before I begin creating your artwork.",
  },
  {
    q: "What types of paintings do you create?",
    a: "I specialize in original oil paintings, custom portraits, family portraits, pet portraits, landscape paintings, and personalized commissioned artwork for homes and offices.",
  },
  {
    q: "Can you paint from my photographs?",
    a: "Yes. High-quality photographs are perfect references for custom portraits. I carefully recreate every detail while preserving the emotion and personality of the original moment.",
  },
  {
    q: "How long does a custom painting take?",
    a: "Completion time depends on the size and level of detail. Most commissioned paintings are finished within 2–4 weeks, and I'll provide an estimated delivery date before starting.",
  },
  {
    q: "Do you ship paintings worldwide?",
    a: "Yes. Every painting is securely packaged to ensure safe delivery, and I offer shipping for both local and international orders.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className=" py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="font-display mt-4 text-3xl md:text-5xl font-medium leading-tight text-[#222222] ">
            Good to know before you reach out
          </h2>
        </div>

        <div className="mt-14 divide-y divide-[#e7e4dc] border-t border-b border-[#e7e4dc]">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-md md:text-2xl font-regualar text-[#222222]">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-md md:text-2xl  text-[#a9822e] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-7 pr-10 text-md md:text-lg  leading-relaxed text-gray-900">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
