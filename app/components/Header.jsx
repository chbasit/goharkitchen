import Image from "next/image";

export default function Header() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
  src="/images/header2.webp"
  alt="Malaika Signature Atelier"
  fill
  priority
  loading="eager"
  fetchPriority="high"
  sizes="100vw"
  className="object-cover object-center"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Optional Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl">
           

          <h1 className="mt-6 text-5xl font-medium leading-tight text-white md:text-6xl ">
            Signature Atelier
            <br />
            
              for Luxury
             
            <br />
            Interior Spaces
          </h1>

         

          <div className="mt-10 flex flex-wrap gap-4">
            

            <a
              href="#portfolio"
              className=" border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em]  bg-white text-black"
            >
              View Portfolio
            </a>
          </div>

        
        </div>
      </div>

      
    </section>
  );
}