import Image from "next/image";



 
const GALLERY_ROWS = [
  {
    cols: 3,
    aspect: "aspect-[3/4]",
    images: [
      { src: "/images/seeman1.jpg", alt: "Ayesh Signature Atelier — commissioned artwork 2" },
      { src: "/images/seeman2.jpg", alt: "Ayesh Signature Atelier — commissioned artwork 3" },
      { src: "/images/seeman3.jpg", alt: "Ayesh Signature Atelier — commissioned artwork 4" },
    ],
  },
  {
    cols: 2,
    aspect: "aspect-[4/3]",
    images: [
      { src: "/images/seemanheader.jpg", alt: "Ayesh Signature Atelier — commissioned artwork 5" },
      { src: "/images/header2.webp", alt: "Ayesh Signature Atelier — commissioned artwork 6" },
    ],
  },
];

const COLS_CLASS = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

export default function OurWork() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
 

  <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-4xl">
    Collection
  </h2>
 
</div>
 
        {/* Image gallery — 1 / 3 / 2 / 1 / 3 row pattern */}
        <div className="mt-20 flex flex-col gap-4 sm:gap-5">
          {GALLERY_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-4 sm:gap-5 ${COLS_CLASS[row.cols]}`}
            >
              {row.images.map((img) => (
                <div
                  key={img.src}
                  className={`group relative w-full overflow-hidden bg-[#f7f6f2] ${row.aspect}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}