const AUDIENCES = [
  {
    label: "Interior Designers",
    heading: "Theme-based work, matched to the brief",
    copy: "Send over your mood board, palette, or floor plan. I'll propose artwork sized and toned to sit inside the scheme you've already built — not compete with it.",
    points: ["Scaled to wall & sightlines", "Palette-matched to your spec", "Trade-friendly turnaround"],
  },
  {
    label: "Restaurants & Hospitality",
    heading: "Art that carries the ambience",
    copy: "From an intimate café to a full commercial fit-out, I develop artwork around your cuisine, story and lighting — pieces guests remember the room by.",
    points: ["Concepts tied to your menu & story", "Durable finishes for high-traffic rooms", "Full-space or single statement piece"],
  },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-work-with" className="bg-[#f7f6f2] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-auto text-center">
          <span className="eyebrow">Who I Work With</span>
          <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold text-[#222222] ">
            Built for the spaces you design
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {AUDIENCES.map((a) => (
            <div key={a.label} className="border border-[#e7e4dc] bg-white p-9 sm:p-11">
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#000]">
                {a.label}
              </span>
              <h3 className="font-display mt-4 text-2xl md: text-4xl font-semibold text-[#222222]">
                {a.heading}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-800">
                {a.copy}
              </p>
              <ul className="mt-7 space-y-2 border-t border-[#e7e4dc] pt-6">
                {a.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-md text-[#222222]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#a9822e]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
