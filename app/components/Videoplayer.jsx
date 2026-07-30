"use client";

const VIDEOS = [
  "/images/1.mp4",
  "/images/2.mp4",
  "/images/3.mp4",
  "/images/4.mp4",
];

export default function InstagramFeed() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            

            <h2 className="mt-4 text-2xl text-[#1d1d1d] lg:text-5xl">
              Instagram Gallery
            </h2>

            <p className="mt-4 text-gray-600">
              @seensay_
            </p>
          </div>

          <a
            href="https://www.instagram.com/seensay_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#043852] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#a9822e]"
          >
            Follow on Instagram
        </a>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {VIDEOS.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md"
            >
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-[12/16] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}