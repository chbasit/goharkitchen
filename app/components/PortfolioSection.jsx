const CATEGORIES = [
  {
    name: "Neon",
    desc: "Glowing line-art for lounges, retail fronts and statement walls.",
    swatch: (
      <>
        <rect width="100%" height="100%" fill="#1c1c1c" />
        <path
          d="M20 70C40 20 80 20 100 70C120 120 160 120 180 70"
          stroke="#a9822e"
          strokeWidth="4"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M20 70C40 20 80 20 100 70C120 120 160 120 180 70"
          stroke="#cba85e"
          strokeWidth="1.5"
          fill="none"
        />
      </>
    ),
  },
  {
    name: "Nature Calligraphy",
    desc: "Botanical brush-script pieces that bring the outdoors in.",
    swatch: (
      <>
        <rect width="100%" height="100%" fill="#f7f6f2" />
        <path
          d="M30 110C60 40 110 40 100 90C95 115 140 100 130 60C125 40 160 30 170 60"
          stroke="#222222"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="150" cy="45" r="5" fill="#7a3427" opacity="0.7" />
      </>
    ),
  },
  {
    name: "Realism",
    desc: "Photographic detail rendered by hand, in oil or graphite.",
    swatch: (
      <>
        <rect width="100%" height="100%" fill="#e7e4dc" />
        <circle cx="100" cy="70" r="45" fill="#222222" opacity="0.75" />
        <circle cx="100" cy="70" r="45" fill="none" stroke="#a9822e" strokeWidth="2" />
      </>
    ),
  },
  {
    name: "Portraits",
    desc: "Commissioned likenesses — family, founders, or a favourite muse.",
    swatch: (
      <>
        <rect width="100%" height="100%" fill="#222222" />
        <ellipse cx="100" cy="60" rx="26" ry="32" fill="#f7f6f2" opacity="0.9" />
        <path d="M60 130C70 95 130 95 140 130" fill="#f7f6f2" opacity="0.9" />
      </>
    ),
  },
  {
    name: "Oil",
    desc: "Textured, layered canvases with real impasto brushwork.",
    swatch: (
      <>
        <rect width="100%" height="100%" fill="#f7f6f2" />
        <circle cx="70" cy="55" r="30" fill="#7a3427" opacity="0.55" />
        <circle cx="120" cy="90" r="34" fill="#a9822e" opacity="0.5" />
        <circle cx="140" cy="45" r="18" fill="#222222" opacity="0.35" />
      </>
    ),
  },
  {
    name: "Abstract",
    desc: "Bold colour-field and geometric works for modern interiors.",
    swatch: (
      <>
        <rect width="100%" height="100%" fill="#f7f6f2" />
        <rect x="20" y="20" width="70" height="100" fill="#222222" />
        <rect x="100" y="20" width="80" height="45" fill="#a9822e" />
        <rect x="100" y="75" width="80" height="45" fill="#7a3427" />
      </>
    ),
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <span className="eyebrow">What I Create</span>
          <h2 className="font-display mt-4 text-[2.1rem] font-medium leading-tight text-[#222222] sm:text-[2.5rem]">
            Six disciplines, one signature
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-[#6b6963]">
            Every commission is painted or hand-set to order — never printed,
            never generic. Choose a discipline, or let it evolve across a
            few.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[#e7e4dc] bg-[#e7e4dc] sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group flex flex-col bg-white p-8 transition-colors hover:bg-[#f7f6f2]"
            >
              <div className="h-32 w-full overflow-hidden">
                <svg
                  viewBox="0 0 200 130"
                  className="h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  {cat.swatch}
                </svg>
              </div>
              <h3 className="font-display mt-6 text-[1.25rem] font-medium text-[#222222]">
                {cat.name}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-[#6b6963]">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
