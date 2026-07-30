const SERVICES = [
  {
    title: "Residential Commissions",
    copy: "Custom pieces sized and toned for a specific room — living areas, bedrooms, entryways.",
  },
  {
    title: "Office & Workplace Art",
    copy: "Artwork that reflects brand identity, from reception walls to boardrooms.",
  },
  {
    title: "Commercial & Hospitality",
    copy: "Larger-scale programmes for restaurants, hotels and retail, with durable finishes.",
  },
  {
    title: "Interior Designer Collaborations",
    copy: "Theme-based work delivered against your mood board, palette and brief.",
  },
  {
    title: "Portraits on Commission",
    copy: "Likenesses of people, pets, or places you want painted, in oil or fine line.",
  },
  {
    title: "Art Consultation",
    copy: "Not sure where to start? I'll recommend direction, scale and placement first.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f6f2] py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-auto text-center">
          <span className="eyebrow">Services</span>
          <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-5xl">
            Custom art, for every kind of space
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="pt-6">
              <h3 className="text-xl font-semibold text-[#000]">
                {s.title}
              </h3>
              <p className="mt-3 text-lg text-gray-800">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
