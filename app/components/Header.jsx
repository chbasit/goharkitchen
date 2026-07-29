import Image from "next/image";

export default function Header() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/headeroil.webp"
        alt="Malaika Signature Atelier"
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Left Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-5xl ">
            Best Original Oil Paintings
            <br />
            & Canvas Art
          </h1>

          <div className="mt-8">
            <a
              href="/commission"
              className="rounded-md bg-white px-4 md:px-8 py-2 md:py-4 text-sm lowercase md:uppercase font-semibold  tracking-[0.15em] text-black"
            >
              Start Your Commission
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 w-[calc(100%-2rem)] max-w-sm md:bottom-10 md:right-10 md:w-auto md:max-w-xl rounded-xl p-4 md:p-8">
        <h2 className="font-semibold text-xl leading-tight text-[#fff] md:text-5xl">
           Art That Lives Beyond the Canvas
        </h2>

        <p className="mt-3 text-sm  text-white md:text-xl">
        Every painting is a timeless expression of emotion, crafted to transform
  spaces and preserve stories that last for generations.
        </p>
      </div>
    </section>
  );
}