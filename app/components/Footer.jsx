"use client";

import Link from "next/link";
 

const links = [
  "Home",
  "About",
  "Projects",
  "Kitchen",
  "Wardrobes",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="bg-[#F6F4EC] text-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-body mb-4">
              GK
            </h2>

            <p className="text-xl font-body">
              Home Decor
            </p>

            <p className="mt-2 text-black font-body">
              Kitchen | Wardrobe | Media Walls
            </p>

            <p className="mt-6 text-black leading-7 max-w-sm font-body">
              Your trusted home interior & kitchen partner, creating elegant
              spaces with premium craftsmanship and timeless design.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="font-body tracking-[3px] text-md mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 font-body">
              {links.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-black hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-body tracking-[3px] text-md mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-black font-body">

              <div className="flex items-center gap-3">
                 
                <span>0300 7023202</span>
              </div>

              <div className="flex items-center gap-3">
                {/* <Mail size={18} /> */}
                <span>hello@goharkitchen.com</span>
              </div>

              <div className="flex items-start gap-3">
                {/* <MapPin size={18} className="mt-1" /> */}
                <span>
                  Canal Road , Faisalabad, Pakistan
                </span>
              </div>
            </div>

           
          </div>
        </div>

        <div className="border-t border-white/10 font-body mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-md text-black">
          <p>
            © 2026 Gohar Kitchen Design. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}