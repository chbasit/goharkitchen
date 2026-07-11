"use client";

import Link from "next/link";

const links = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "VISION", href: "/vision" },
  { name: "TEAM", href: "/team" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#332820] text-[#E7DDD1] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14 py-20">

        <div className="grid lg:grid-cols-[420px_1fr] gap-20">

          {/* LEFT NAVIGATION */}

          <div>
            <ul className="space-y-8">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-display text-3xl md:text-5xl uppercase tracking-wide transition-all duration-300 hover:text-white hover:translate-x-3 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}

          <div>

            {/* Brand */}

            

            <div className="grid md:grid-cols-2 gap-14">

              {/* LEFT INFO */}

              <div className="space-y-12">

                <div>
                  <h4 className="font-body uppercase text-sm tracking-[3px] mb-3 text-[#C9BFB4]">
                    Services
                  </h4>

                  <p className="font-body text-lg leading-9 text-[#E7DDD1]">
                    Architecture
                    <br />
                    Interior Design
                    <br />
                    Construction
                  </p>
                </div>

                <div>
                  <h4 className="font-body uppercase text-sm tracking-[3px] mb-3 text-[#C9BFB4]">
                    Phone
                  </h4>

                  <a
                    href="tel:+923153366669"
                    className="font-body text-lg hover:text-white"
                  >
                    +92 315 3366669
                  </a>
                </div>

                <div>
                  <h4 className="font-body uppercase text-sm tracking-[3px] mb-3 text-[#C9BFB4]">
                    Address
                  </h4>

                  <p className="font-body text-lg leading-8">
                    37 CCA Block L
                    <br />
                    Khayaban-e-Amin Society
                    <br />
                    Lahore, Pakistan
                  </p>
                </div>
              </div>

              {/* RIGHT INFO */}

              <div className="space-y-12">

                <div>
                  <h4 className="font-body uppercase text-sm tracking-[3px] mb-3 text-[#C9BFB4]">
                    Email
                  </h4>

                  <a
                    href="mailto:faizansultanarchitects@gmail.com"
                    className="font-body text-lg break-all hover:text-white"
                  >
                    faizansultanarchitects@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-body uppercase text-sm tracking-[3px] mb-3 text-[#C9BFB4]">
                    Follow Us
                  </h4>

                  <div className="space-y-2 font-body text-lg">
                    <Link href="#">Instagram</Link>
                    <br />
                    <Link href="#">Facebook</Link>
                    <br />
                    <Link href="#">LinkedIn</Link>
                  </div>
                </div>

                <div>
                  <h4 className="font-body uppercase text-sm tracking-[3px] mb-3 text-[#C9BFB4]">
                    Office Hours
                  </h4>

                  <p className="font-body text-lg leading-8">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom */}

            <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

              <p className="font-body text-sm text-[#C9BFB4]">
                © 2026 Faizan Sultan Architects. All Rights Reserved.
              </p>

              <div className="flex gap-8 font-body text-sm text-[#C9BFB4]">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms & Conditions</Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}