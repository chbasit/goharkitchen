"use client";

import Image from "next/image";
import Link from "next/link";
import { PAINTINGS } from "../paintings/data";

export default function BestSeller() {
  return (
    <section className="bg-white pt-20">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mt-4 text-2xl text-[#222] lg:text-5xl">
            Best Sellers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-800">
            Discover a collection of original hand-painted oil artworks,
            thoughtfully created to bring warmth, elegance, and timeless beauty
            into your space.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PAINTINGS.map((item) => (
            <Link
              key={item.slug}
              href={`/paintings/${item.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#f8f7f4]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={900}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Status */}
                <span
                  className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
                    item.availability === "Available"
                      ? "bg-white text-green-700"
                      : "bg-[#1d1d1d] text-white"
                  }`}
                >
                  {item.availability}
                </span>
              </div>

              {/* Content */}
              <div className="pt-5 text-center">
                <h3 className="text-xl text-[#222] transition duration-300 group-hover:text-[#a9822e]">
                  {item.name}
                </h3>

                <p className="mt-2 text-lg font-medium text-gray-800">
                  From ${item.sizes[0].price}
                </p>

                <p className="mt-1 text-sm text-gray-800">
                  {item.medium}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}