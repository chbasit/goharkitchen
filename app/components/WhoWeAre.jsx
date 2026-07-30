import Image from "next/image";

const GALLERY = [
  "/images/natur4.webp",
  "/images/nature20.webp",
  "/images/nature2.jpg",
  "/images/nature4.webp",
];



export default function Collections() {
  return (
    <section className=" py-16">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-5xl">
            Inspired by Nature
          </h2>

           
        </div>

        {/* Images */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={image}
                alt="Painting"
                width={700}
                height={400}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

     

      </div>
    </section>
  );
}