"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How does a custom commission start?",
    a: "Message me on WhatsApp with a few photos of your space, or your interior style. I'll suggest artwork directions from the 10,000+ design options before anything is created.",
  },
  {
    q: "Which styles do you work in?",
    a: "Neon, nature calligraphy, realism, portraits, oil and abstract — as a single piece, or blended across a room or full project.",
  },
  {
    q: "Do you work with interior designers and restaurants?",
    a: "Yes. Share your mood board, palette or ambience brief and I'll develop theme-based artwork sized to your space and scheme.",
  },
  {
    q: "How long does a commission take?",
    a: "Timelines depend on size and detail. Once a direction is confirmed, most pieces are completed and ready within a few weeks — I'll confirm an exact date at consultation.",
  },
  {
    q: "Do you ship and install?",
    a: "Yes, pieces are carefully packed and can be delivered and installed for homes, offices and commercial spaces.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="font-display mt-4 text-[2.1rem] font-medium leading-tight text-[#222222] sm:text-[2.5rem]">
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
                  <span className="font-display text-[1.05rem] font-medium text-[#222222]">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-[1.3rem] font-light text-[#a9822e] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-7 pr-10 text-[0.92rem] leading-relaxed text-[#6b6963]">
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
