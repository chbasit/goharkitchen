"use client";

import { FaStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote:
      "I commissioned a custom oil portrait as an anniversary gift, and it exceeded every expectation. Every brushstroke captured the emotion perfectly. It's now the centerpiece of our home.",
    name: "Sarah Ahmed",
    role: "Portrait Client",
  },
  {
    quote:
      "I ordered an original oil painting for my living room, and the craftsmanship is exceptional. The colors, texture, and attention to detail are absolutely stunning.",
    name: "Fatima Khan",
    role: "Art Collector",
  },
  {
    quote:
      "From sharing reference photos to receiving the finished artwork, the entire experience was seamless. The painting became a cherished family keepsake.",
    name: "Usman Malik",
    role: "Custom Portrait Client",
  },
  {
    quote:
      "I wanted a meaningful handmade gift, and the custom portrait was perfect. Everyone who sees it asks where it was created.",
    name: "Ayesha Noor",
    role: "Satisfied Customer",
  },
  {
    quote:
      "The attention to detail is unbelievable. It feels like a museum-quality artwork and exceeded every expectation.",
    name: "Ali Raza",
    role: "Private Collector",
  },
  {
    quote:
      "Working with Samman was effortless from start to finish. The final painting is breathtaking.",
    name: "Zainab Ali",
    role: "Commission Client",
  },
  {
    quote:
      "The portrait brought tears to my parents' eyes. Every expression was captured beautifully.",
    name: "Hassan Sheikh",
    role: "Portrait Client",
  },
  {
    quote:
      "A timeless piece that transformed our living room. I couldn't be happier with the result.",
    name: "Maria Khan",
    role: "Interior Client",
  },
];

const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonial() {
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="bg-white py-20 overflow-hidden">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center">
            

            <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-5xl">
              Trusted by Worldwide
            </h2>
          </div>

          {/* Marquee */}
          <div className="relative mt-16 overflow-hidden">
            <div className="marquee gap-6">
              {marqueeItems.map((item, index) => (
              <div
  key={index}
  className="w-[300px] h-[300px] flex-shrink-0 rounded-2xl border border-[#ece8df] bg-white p-8 flex flex-col transition duration-300 hover:shadow-xl"
>
  {/* Stars */}
  <div className="mb-5 flex gap-1 text-[#D4AF37]">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={15} />
    ))}
  </div>

  {/* Quote */}
  <blockquote className="flex-1 text-sm md:text-md  text-[#222222]">
    "{item.quote}"
  </blockquote>

  {/* Footer */}
  <div className=" pt-5">
    <h4 className="text-lg font-regular text-[#222222]">
      {item.name}
    </h4>

    <p className="mt-1 text-gray-800">
      {item.role}
    </p>
  </div>
</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}