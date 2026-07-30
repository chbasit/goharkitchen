import Image from "next/image";
import { notFound } from "next/navigation";

import { PAINTINGS } from "../data";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PaintingDetails from "../../components/PaintingDetails";

export default async function PaintingPage({ params }) {
  const { slug } = await params;

  const painting = PAINTINGS.find(
    (item) => item.slug === slug
  );

  if (!painting) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="bg-white py-16 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          {/* Product */}
          <div className="grid gap-16 lg:grid-cols-2">

            {/* Left */}
            <div>

              <div className="overflow-hidden bg-[#f7f6f2]">
                <Image
                  src={painting.image}
                  alt={painting.name}
                  width={900}
                  height={1200}
                  priority
                  className="w-full object-cover"
                />
              </div>

              {/* Story */}
              <div className="mt-12 pt-10">

                <p className="uppercase tracking-[0.25em] text-[#043852] text-sm">
                  Inspiration
                </p>

                <h2 className="mt-3 text-3xl text-[#222] font-semibold">
                  The Story Behind This Painting
                </h2>

                <p className="mt-6 text-sm md:text-lg text-gray-800">
                  {painting.story}
                </p>

              </div>

            </div>

            {/* Right */}
            <PaintingDetails painting={painting} />

          </div>

          {/* Details */}
          <div className="py-16">

            <div className="grid gap-12 lg:grid-cols-3">

              <div>
                <h3 className="text-xl font-semibold">
                  Handmade with Care
                </h3>

                <p className="mt-4  text-gray-800 text-sm md:text-lg">
                  Every artwork is painted entirely by hand using professional
                  oil paints on premium canvas. No prints or digital
                  reproductions are used.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Museum Quality Materials
                </h3>

                <p className="mt-4  text-gray-800 text-sm md:text-lg">
                  High-quality stretched canvas, archival oil paints, and
                  durable protective finishes ensure your artwork lasts for
                  generations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Secure Worldwide Shipping
                </h3>

                <p className="mt-4  text-gray-800 text-sm md:text-lg">
                  Each painting is professionally packaged and shipped safely
                  with protective materials to arrive in perfect condition.
                </p>
              </div>

            </div>

          </div>

          {/* Quote */}
          <div className="mt-24 rounded-xl bg-[#faf8f5] p-12 text-center">

            <p className="text-3xl leading-relaxed text-[#043852] lg:text-5xl">
              "Art is more than decoration, it preserves memories,
              tells stories, and brings emotion into every space."
            </p>

            <p className="mt-8 uppercase tracking-[0.3em] text-[#043852]">
              Samman
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}