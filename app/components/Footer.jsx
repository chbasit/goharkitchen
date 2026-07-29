
export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#043852] text-black overflow-hidden rounded-t-4xl"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-12">

        {/* Top */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Left */}
          <div className="lg:max-w-xl">
            <p className="font-serif text-white  italic text-md  md:text-xl leading-[1.35]">
              Samman creates timeless oil paintings, bespoke portraits, and
              custom artworks that transform memories into heirloom pieces.
              Every artwork is painted by hand with meticulous craftsmanship,
              serving collectors worldwide.
            </p>
          </div>

          {/* Menu */}
          <div className="lg:justify-self-center text-white">
            <h4 className="text-2xl mb-4">
              Menu
            </h4>

            <nav className="space-y-3 text-md">
              <a href="#" className="block hover:opacity-60 transition">
                Home
              </a>

              <a
                href="#about"
                className="block hover:opacity-60 transition"
              >
                About
              </a>

              <a
                href="#best-sellers"
                className="block hover:opacity-60 transition"
              >
                Gallery
              </a>

               
            </nav>
          </div>

          {/* Connect */}
          <div className="lg:justify-self-end text-white">
            <h4 className=" text-2xl mb-4">
              Connect
            </h4>

            <div className="space-y-3 text-md">
              <a
                href="https://www.instagram.com/seensay_/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-60 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.instagram.com/seensay_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:opacity-60 transition"
              >
                
                  Inquiry
              </a>

              <a
                href="#contact"
                className="block hover:opacity-60 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Huge Brand Name */}
       {/* Huge Brand */}
<div className="mt-20 flex w-full justify-center overflow-hidden">
  <h2
    className="
      w-full
      text-center
      whitespace-nowrap
      font-light
      uppercase
      leading-[0.82]
      tracking-[-0.06em]
      text-[24vw]
      lg:text-[15vw]
      text-[#d9d9d9]
      select-none
    "
  >
    SAMMAN
    </h2>
</div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-6 border-t border-neutral-300 pt-6 text-white text-sm md:flex-row md:items-center md:justify-between">

          <p className="italic">
            © {new Date().getFullYear()} Samman 
          </p>

          <div className="flex flex-wrap gap-8 italic text-white">
            <a href="#" className="hover:opacity-60">
              Privacy Policy
            </a>

            <a href="#" className="hover:opacity-60">
              Terms of Service
            </a>

            <a href="#" className="hover:opacity-60">
              Sitemap
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}