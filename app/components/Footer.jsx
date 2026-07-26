import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      {/* Top Border */}
      {/* <div className="h-[1px] bg-gradient-to-r from-transparent via-[fff] to-transparent" /> */}

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <span className="font-display text-5xl tracking-wide text-white">
              Malaika Nisar
            </span>

            <p className="mt-2 text-lg font-medium uppercase tracking-[6px] text-[fff]">
              Atelier
            </p>

            <div className="mt-8 h-[1px] w-24 bg-[fff]" />

            <p className="mt-8 max-w-md text-lg leading-8 text-gray-300">
              Bespoke artwork crafted exclusively for luxury homes, offices,
              hospitality spaces, and commercial interiors. Every creation is
              designed with timeless elegance and handcrafted precision.
            </p>

            <a
              href="https://wa.me/923078793323"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-[fff] px-7 py-3 text-base font-medium transition-all duration-300 hover:bg-[fff] hover:text-black"
            >
              <FaWhatsapp className="text-xl" />
              Start Your Project
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-sm uppercase tracking-[3px] text-[fff]">
                  Studio
                </p>

                <p className="mt-2 text-lg leading-8">
                   
                  Malaika Nisar Atelier
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[3px] text-[fff]">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/923078793323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg transition hover:text-[fff]"
                >
                  +92 307 8793323
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Explore
            </h3>

            <nav className="flex flex-col gap-5 text-lg text-gray-300">
              <a
                href="#services"
                className="transition hover:translate-x-1 hover:text-[fff]"
              >
                Services
              </a>

              <a
                href="#portfolio"
                className="transition hover:translate-x-1 hover:text-[fff]"
              >
                Portfolio
              </a>

              <a
                href="#who-we-work-with"
                className="transition hover:translate-x-1 hover:text-[fff]"
              >
                Clients
              </a>

              <a
                href="#about"
                className="transition hover:translate-x-1 hover:text-[fff]"
              >
                About Atelier
              </a>
            </nav>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {[
                FaInstagram,
                 
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/ayesh.signature.atelier/"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#555] text-lg transition-all duration-300 hover:border-[fff] hover:bg-[fff] hover:text-black"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-gray-400 md:flex-row md:items-center md:justify-between">
            <p className="text-sm tracking-wide">
              © {new Date().getFullYear()} Malaika Signature Atelier. All Rights
              Reserved.
            </p>

            <p className="text-sm italic text-[fff]">
              Every piece is handcrafted • Never printed • Never repeated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}