"use client";

import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Share Your Vision",
    copy: "Send your favorite photos or describe your idea. Portraits, family memories, pets, landscapes, or completely original concepts are all welcome.",
  },
  {
    step: "02",
    title: "Hand-Painted with Care",
    copy: "Every artwork is created by hand using premium oil paints on professional canvas, with regular progress updates throughout the process.",
  },
  {
    step: "03",
    title: "Delivered to Your Door",
    copy: "Your finished painting is carefully packaged and shipped safely, ready to become a timeless keepsake or meaningful gift.",
  },
];

export default function About() {
  return (
 <section id="about" className="bg-white py-20">
  <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
    <div className="grid gap-20 lg:grid-cols-[1fr_1.1fr]">
      {/* Left */}
      <div className=" lg:top-28 h-fit">
        <span className="eyebrow">About the Artist</span>

        <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-4xl">
          Hi, I'm Samman.
        </h2>

        <div className="mt-8 space-y-6 text-sm md:text-lg text-gray-800">
          <p>
            I'm an oil painter dedicated to transforming meaningful moments
            into timeless works of art. Every painting is handcrafted with
            patience, precision, and a deep appreciation for storytelling
            through brushstrokes.
          </p>

          <p>
            I specialize in custom portraits, original oil paintings, and
            commissioned artworks for families, collectors, and interior
            spaces. Every piece is created using premium materials and
            designed to become an heirloom for generations.
          </p>

          <p>
            Whether you're celebrating a loved one, preserving a memory, or
            adding character to your home, my goal is to create artwork that
            feels personal, emotional, and lasting.
          </p>
        </div>

        <a
          href="/commission"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 border border-[#222] px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] transition hover:border-[#a9822e] hover:text-[#a9822e]"
        >
          Start a Commission
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Right */}
      <div>
        <span className="eyebrow">My Process</span>

        <h3 className="mt-4 text-2xl text-[#1d1d1d] lg:text-4xl">
          How I Create Your Artwork
        </h3>

        <div className="mt-12 space-y-4">
          {STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-lg border border-[#ece6db] bg-[#faf8f5] p-6 transition duration-300 hover:border-[#a9822e]"
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl font-light text-[#222]">
                  {step.step}
                </span>

                <div>
                  <h4 className="text-xl font-medium text-[#111]">
                    {step.title}
                  </h4>

                  <p className="mt-3  text-sm md:text-lg text-gray-700">
                    {step.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}