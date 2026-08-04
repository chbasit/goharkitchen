"use client";

import Image from "next/image";
import Link from "next/link";
import { PAINTINGS } from "../paintings/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function BestSeller() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-2xl lg:text-4xl text-[#222]">
              Best Sellers
            </h2>

            <p className="mt-4 max-w-xl text-gray-700">
              Discover a collection of original hand-painted oil artworks,
              thoughtfully created to bring warmth, elegance, and timeless
              beauty into your space.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-3">
            <button className="best-prev flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
              ←
            </button>

            <button className="best-next flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition">
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".best-prev",
            nextEl: ".best-next",
          }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {PAINTINGS.map((item) => (
            <SwiperSlide key={item.slug}>
              <Link
                href={`/paintings/${item.slug}`}
                className="group block"
              >
                {/* Smaller Card */}
               <div className="mx-auto w-full max-w-[320px]">
  <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <span
      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs ${
        item.availability === "Available"
          ? "bg-white text-green-700"
          : "bg-black text-white"
      }`}
    >
      {item.availability}
    </span>
  </div>

  <div className="pt-4 text-center">
    <h3 className="text-lg text-[#222] transition group-hover:text-[#a9822e]">
      {item.name}
    </h3>

    <p className="mt-2 font-medium text-gray-800">
      From ${item.sizes[0].price}
    </p>
  </div>
</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Buttons */}
        <div className="mt-8 flex justify-center gap-3 md:hidden">
          <button className="best-prev flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
            ←
          </button>

          <button className="best-next flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
            →
          </button>
        </div>
      </div>
    </section>
  );
}