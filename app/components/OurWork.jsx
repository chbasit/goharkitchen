import Image from "next/image";

const GALLERY_ROWS = [
  {
    cols: 3,
    aspect: "aspect-[3/4]",
    images: [
      {
        src: "/images/seeman1.jpg",
        alt: "Kitchen Design 1",
      },
      {
        src: "/images/seeman2.jpg",
        alt: "Kitchen Design 2",
      },
      {
        src: "/images/seeman3.jpg",
        alt: "Kitchen Design 3",
      },
      {
        src: "/images/category1.webp",
        alt: "Kitchen Design 4",
      }
    ],
  },
  {
    cols: 2,
    aspect: "aspect-[4/3]",
    images: [
      {
        src: "/images/seemanheader.jpg",
        alt: "Kitchen Design 4",
      },
      {
        src: "/images/header2.webp",
        alt: "Kitchen Design 5",
      },
      {
        src: "/images/room-set.webp",
        alt: "Kitchen Design 5",
      },
    ],
  },
];

const COLS_CLASS = {
  2: "grid grid-cols-1 md:grid-cols-3",
  3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function OurWork() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1450px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl  text-[#1d1d1d] md:text-4xl">
            Discover our collection
          </h2>
        </div>

        {/* Gallery */}
        <div className="mt-16 space-y-5">
          {GALLERY_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`${COLS_CLASS[row.cols]} gap-2`}
            >
              {row.images.map((img) => (
                <div
                  key={img.src}
                  className={`group relative overflow-hidden rounded-xl bg-gray-100 ${row.aspect}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={rowIndex === 0}
                    sizes={
                      row.cols === 3
                        ? "(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        : "(min-width:768px) 50vw, 100vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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