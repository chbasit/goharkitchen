"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function PaintingDetails({ painting }) {
  const [selectedSize, setSelectedSize] = useState(
    painting.sizes?.[0] || { name: painting.size, price: Number(painting.price?.replace("$", "")) || 0 }
  );

  const [selectedFrame, setSelectedFrame] = useState(
    painting.frames?.[0] || { name: "No Frame", price: 0 }
  );

  const [selectedFinish, setSelectedFinish] = useState(
    painting.finishes?.[0] || { name: "Standard Finish", price: 0 }
  );

  const totalPrice = useMemo(() => {
    return (
      Number(selectedSize.price) +
      Number(selectedFrame.price) +
      Number(selectedFinish.price)
    );
  }, [selectedSize, selectedFrame, selectedFinish]);

  return (
    <div className="flex flex-col">

     

      <h1 className="mt-3 text-2xl lg:text-5xl">
        {painting.name}
      </h1>

      <div className="mt-6 flex items-end gap-3">
        <span className="text-4xl font-medium text-[#043852]">
          ${totalPrice}
        </span>

        <span className="text-gray-800">
          USD
        </span>
      </div>

     

      <div className="mt-10 space-y-6">

    
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

  {/* Size */}
  <div>
    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em]">
      Size
    </label>

    <select
      value={selectedSize.name}
      onChange={(e) =>
        setSelectedSize(
          painting.sizes.find(
            (s) => s.name === e.target.value
          )
        )
      }
      className="w-full border border-[#ece6db] bg-white p-4 outline-none focus:border-[#a9822e]"
    >
      {painting.sizes.map((size) => (
        <option key={size.name} value={size.name}>
          {size.name}
          {size.price > 0 ? ` (+$${size.price})` : ""}
        </option>
      ))}
    </select>
  </div>

  {/* Frame */}
  <div>
    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em]">
      Frame
    </label>

    <select
      value={selectedFrame.name}
      onChange={(e) =>
        setSelectedFrame(
          painting.frames.find(
            (f) => f.name === e.target.value
          )
        )
      }
      className="w-full border border-[#ece6db] bg-white p-4 outline-none focus:border-[#a9822e]"
    >
      {painting.frames.map((frame) => (
        <option key={frame.name} value={frame.name}>
          {frame.name}
          {frame.price > 0 ? ` (+$${frame.price})` : ""}
        </option>
      ))}
    </select>
  </div>

  {/* Finish */}
  <div>
    <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em]">
      Finish
    </label>

    <select
      value={selectedFinish.name}
      onChange={(e) =>
        setSelectedFinish(
          painting.finishes.find(
            (f) => f.name === e.target.value
          )
        )
      }
      className="w-full border border-[#ece6db] bg-white p-4 outline-none focus:border-[#a9822e]"
    >
      {painting.finishes.map((finish) => (
        <option key={finish.name} value={finish.name}>
          {finish.name}
          {finish.price > 0 ? ` (+$${finish.price})` : ""}
        </option>
      ))}
    </select>
  </div>

</div>

      </div>

     

     <div className="mt-8 grid grid-cols-1 gap-6   md:grid-cols-2">

  <div className="flex items-center justify-between  p-5">
    <span className="text-gray-800 font-semibold">Medium:</span>
    <span className="font-medium text-[#222]">
      {painting.medium}
    </span>
  </div>

  <div className="flex items-center justify-between  p-5">
    <span className="text-gray-800 font-semibold">Status:</span>
    <span className="font-bold text-xl text-green-700">
      {painting.availability}
    </span>
  </div>

</div>

      <p className="mt-8 text-md md:text-lg text-gray-800">
        {painting.description}
      </p>

      {/* ---------------- FEATURES ---------------- */}

      <div className="mt-10 rounded-lg bg-[#faf8f5] p-6">

        <h3 className="text-xl font-semibold text-[#222]">
          Included
        </h3>

        <ul className="mt-5 space-y-3 text-gray-800 font-medium">
          <li>✓ Original hand-painted artwork</li>
          <li>✓ Signed by the artist</li>
          <li>✓ Certificate of authenticity</li>
          <li>✓ Secure premium packaging</li>
          <li>✓ Worldwide shipping available</li>
        </ul>

      </div>

      {/* ---------------- BUTTONS ---------------- */}

      <div className="mt-10 flex flex-col gap-4">

        <a
          href={`https://wa.me/923078793323?text=Hi, I'm interested in "${painting.name}".
          
Canvas Size: ${selectedSize.name}

Frame: ${selectedFrame.name}

Finish: ${selectedFinish.name}

Total Price: $${totalPrice}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#043852] py-4 text-center text-white transition hover:bg-transparent hover:text-black border border-[#043852]"
        >
          Purchase This Painting
        </a>

        <Link
          href="/commission"
          className="border border-[#043852] py-4 text-center transition hover:bg-[#043852] hover:text-white"
        >
          Commission Similar Artwork
        </Link>

      </div>

    </div>
  );
}