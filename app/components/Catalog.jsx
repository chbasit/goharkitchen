import Image from "next/image";
const CATALOGS = [
  {
    title: "Luxury Minimalist",
    file: "https://github.com/chbasit/goharkitchen/releases/download/v1.0/LUXURY.MINIMALIST.SIGNATURE.ARTICLES.pdf",
    image: "/images/project9.webp",
    desc: "Clean-line, quiet-luxury pieces built for minimalist interiors — soft palettes, restrained composition.",
  },
  {
    title: "Abstract & Realism",
    file: "https://github.com/chbasit/goharkitchen/releases/download/v1.0/Signature.wall.Atelier.Abstract.Realism.Series.pdf",
    image: "/images/header3.webp",
    desc: "A curated blend of bold abstract colour-fields alongside detailed, hand-painted realism.",
  },
  {
    title: "Black & Golden",
    file: "https://github.com/chbasit/goharkitchen/releases/download/v1.0/signature.wall.atelier.black.and.golden.series.pdf",
    image: "/images/project1.webp",
    desc: "Statement pieces in deep ink black and brushed gold — made for feature walls and reception spaces.",
  },
];

export default function Catalog() {
  return (
    <section id="catalog" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-auto text-center">
          <span className="eyebrow">Catalogs</span>
          <h2 className="mt-4 text-2xl md:text-5xl font-semibold text-[#000]">
            Browse the full collections
          </h2>
          <p className="mt-4 text-md text-gray-800">
            Open any catalog to view or download — every piece, size and
            finish across the collection.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {CATALOGS.map((cat) => {
            const href = encodeURI(cat.file);
            return (
              <div
              
                
                className="grid grid-cols-1 items-stretch overflow-hidden border border-[#e7e4dc] lg:grid-cols-2"
              >
        
                {/* Left — catalog info */}
                <div className="order-2 flex flex-col justify-center bg-white p-8 sm:p-10 lg:order-1">
                 
                  <h3 className=" mt-3 text-xl md:2xl font-medium text-[#000]">
                    {cat.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg  text-gray-800">
                    {cat.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    
                    <a
                      href={href}
                      download
                      className="border border-[#222222] px-6 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-[#222222] transition-colors hover:border-[#a9822e] hover:text-[#a9822e]"
                    >
                      Download
                    </a>
                  </div>
                </div>

                <a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="order-1 relative block h-[320px] overflow-hidden lg:order-2 lg:h-auto lg:min-h-[420px]"
  aria-label={`Open ${cat.title} catalog PDF`}
>
  <Image
    src={cat.image}
    alt={cat.title}
    fill
    className="object-cover transition-transform duration-500 hover:scale-105"
    sizes="(max-width:1024px) 100vw, 50vw"
  />

  <div className="absolute inset-0 bg-black/20" />

  <span className="absolute right-5 top-5 rounded bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
    PDF
  </span>
</a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}