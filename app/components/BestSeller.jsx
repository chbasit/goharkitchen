"use client";

import Image from "next/image";

const PAINTINGS = [
  {
    name: "painting name",
    price: "$420",
    image: "/images/natur4.webp",
  },
  {
    name: "painting name",
    price: "$380",
    image: "/images/painting2.webp",
  },
  {
    name: "painting name",
    price: "$495",
    image: "/images/seeman2.jpg",
  },
  {
    name: "paiting name",
    price: "$550",
    image: "/images/seeman5.jpg",
  },
  {
    name: "Abstract ",
    price: "$460",
    image: "/images/painting1.webp",
  },
  {
    name: "Abstract Tree of Life",
    price: "$410",
    image: "/images/painting2.webp",
  },
  {
    name: "Golden Serenity",
    price: "$525",
    image: "/images/seeman2.jpg",
  },
  {
    name: "Morning Reflection",
    price: "$390",
    image: "/images/seeman6.jpg",
  },
];

export default function BestSeller() {
  return (
    <section className="bg-white pt-20  ">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          

          <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-4xl">
            Best Sellers
          </h2>

          
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PAINTINGS.map((item, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="overflow-hidden bg-[#f8f7f4]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={400}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="pt-5 text-center">
                <h3 className="font-serif text-xl text-[#222] transition group-hover:text-[#a9822e]">
                  {item.name}
                </h3>

                <p className="mt-2 text-lg font-medium text-[#6b6b6b]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}