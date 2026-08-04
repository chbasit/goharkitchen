import Image from "next/image";

const GALLERY = [
  {
    image: "/images/natur4.webp",
    name: "Forest Harmony",
    price: "$320",
    available: true,
  },
  {
    image: "/images/nature20.webp",
    name: "Morning Breeze",
    price: "$380",
    available: true,
  },
  {
    image: "/images/nature2.jpg",
    name: "Golden Nature",
    price: "$410",
    available: false,
  },
  {
    image: "/images/nature4.webp",
    name: "Autumn Whisper",
    price: "$295",
    available: true,
  },
];

export default function Collections() {
  return (
    <section className="pb-16">
      <div className="mx-auto w-full max-w-[1450px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl text-[#1d1d1d]">
            Inspired by Nature
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {GALLERY.map((item, index) => (
            <div key={index} className="group w-full max-w-[320px]">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs ${
                    item.available
                      ? "bg-white text-green-700"
                      : "bg-black text-white"
                  }`}
                >
                  {item.available ? "Available" : "Sold"}
                </span>
              </div>

              {/* Content */}
              <div className="pt-4 text-center">
                <h3 className="text-lg text-[#222] transition group-hover:text-[#a9822e]">
                  {item.name}
                </h3>

                <p className="mt-2 font-medium text-gray-800">
                  From {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}