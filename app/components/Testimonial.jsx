const TESTIMONIALS = [
  {
    quote:
      "Malaika took our restaurant's story and turned it into three wall pieces guests now ask about every week. Nothing off-the-shelf would have worked.",
    name: "S. Raza",
    role: "Owner, Course & Char, Karachi",
  },
  {
    quote:
      "As an interior designer, I need art that respects the palette I've already built. Malaika matched tone, scale and mood exactly to brief.",
    name: "Hina M.",
    role: "Interior Designer",
  },
  {
    quote:
      "The portrait commissioned for our office reception is the first thing every visitor comments on. Genuinely beautiful, hand-painted work.",
    name: "Faraz A.",
    role: "Workplace Client",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-auto text-center">
          <span className="eyebrow">Client Words</span>
          <h2 className="font-display mt-4 text-3xl md:text-5xl  font-semibold text-[#222222]">
            Trusted with spaces people live and work in
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-[#e7e4dc] lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between bg-white p-9">
              <blockquote className="text-md md:text-lg font-normal  text-[#222222]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8  pt-5">
                <p className="text-md font-semibold text-[#222222]">
                  {t.name}
                </p>
                <p className="mt-2 text-md text-gray-700">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
