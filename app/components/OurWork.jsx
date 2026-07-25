import Image from "next/image";

const STEPS = [
  {
    step: "01",
    title: "Tell me about the space",
    copy: "Share photos, dimensions, or your interior style — home, office, or commercial.",
  },
  
  {
    step: "02",
    title: "A piece made for you",
    copy: "Once you pick a direction, the artwork is hand-created to your exact size and palette.",
  },
  {
    step: "03",
    title: "Delivered & installed",
    copy: "Framed, packed and placed — ready to be the piece your room is remembered for.",
  },
];

 
const GALLERY_ROWS = [
  {
    cols: 3,
    aspect: "aspect-[3/4]",
    images: [
      { src: "/images/project2.webp", alt: "Ayesh Signature Atelier — commissioned artwork 2" },
      { src: "/images/project3.webp", alt: "Ayesh Signature Atelier — commissioned artwork 3" },
      { src: "/images/header3.webp", alt: "Ayesh Signature Atelier — commissioned artwork 4" },
    ],
  },
  {
    cols: 2,
    aspect: "aspect-[4/3]",
    images: [
      { src: "/images/project13.webp", alt: "Ayesh Signature Atelier — commissioned artwork 5" },
      { src: "/images/header2.webp", alt: "Ayesh Signature Atelier — commissioned artwork 6" },
    ],
  },
  
  {
    cols: 3,
    aspect: "aspect-[3/4]",
    images: [
      { src: "/images/project4.webp", alt: "Ayesh Signature Atelier — commissioned artwork 8" },
      { src: "/images/project14.webp", alt: "Ayesh Signature Atelier — commissioned artwork 9" },
      { src: "/images/project9.webp", alt: "Ayesh Signature Atelier — commissioned artwork 10" },
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
  <span className="eyebrow">How It Works</span>

  <h2 className="font-display mt-4 text-4xl leading-tight text-[#222222] sm:text-5xl">
    From first message to finished wall
  </h2>

  <a
    href="https://wa.me/923078793323"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex items-center justify-center border border-[#222222] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[#a9822e] hover:text-[#a9822e]"
  >
    Start a Commission
  </a>
</div>
{/* Process steps */}
<div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
  {STEPS.map((s) => (
    <div
      key={s.step}
      className="mx-auto flex max-w-[340px] flex-col items-center text-center lg:items-start lg:text-left"
    >
      <span className="text-2xl font-medium text-black">
        {s.step}
      </span>

      <h3 className="mt-6 text-xl font-medium text-black">
        {s.title}
      </h3>

      <p className="mt-3 text-lg leading-8 text-gray-700">
        {s.copy}
      </p>
    </div>
  ))}
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