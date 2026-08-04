import Image from "next/image";

export default function Header() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/h.jpg"
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
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-12 md:pb-20 lg:px-10 lg:pb-24">
  <div className="max-w-2xl">
    <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
      Best Original Oil
      <br />
      Paintings & Canvas Art
    </h1>

    <div className="mt-8">
      <a
        href="/commission"
        className="inline-block font-medium rounded-md bg-white px-4 py-4 md:px-8  text-gray-700"
      >
        Start Your Commission
      </a>
    </div>
  </div>
</div>

      
    </section>
  );
}