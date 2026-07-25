// import Image from "next/image";

// export default function About() {
//   return (
//     <section id="about" className="bg-white py-20 lg:py-20">
//       <div className="mx-auto max-w-7xl px-6 lg:px-10">
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
//           {/* Left Image */}
//           <div className="relative flex justify-center">
//             <div className="relative overflow-hidden rounded-xl">
//               <Image
//                 src="/images/profile.png"
//                 alt="Ayesh Signature Atelier"
//                 width={400}
//                 height={400}
//                 className="h-auto w-full max-w-[600px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Content */}
//           <div>
//             <span className="eyebrow">About the Atelier</span>

//             <h2 className="mt-4  text-4xl font-medium leading-tight text-[#222222] sm:text-5xl">
//               Hi, I&apos;m Malaika.
//             </h2>

//             <div className="mt-6 h-[2px] w-20 bg-[#a9822e]" />

//             <div className="mt-8">
//               <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#222222]">
//                  Malaika
//               </p>

              
//             </div>

//             <div className="mt-10 space-y-4 text-md  text-gray-800">
//               <p>
//                 Malaika Signature Atelier creates bespoke artwork for homes,
//                 offices, and commercial interiors. Whether you need a single
//                 statement masterpiece or a complete themed collection, every
//                 artwork is thoughtfully designed to complement your space and
//                 reflect your personality.
//               </p>

//               <p>
//                 Specializing in neon art, nature calligraphy, realism,
//                 portraits, oil paintings, and contemporary abstract designs, I
//                 provide access to over 10,000 creative concepts before crafting
//                 a unique artwork tailored exclusively for your interior.
//               </p>

//               <p>
//                 Interior designers, architects, cafés, restaurants, and luxury
//                 residences can collaborate on custom collections based on a
//                 specific mood, color palette, or design concept—ensuring every
//                 piece is original and never mass-produced.
//               </p>
//             </div>

//             <a
//               href="https://wa.me/923078793323"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-10 inline-flex items-center bg-[#222222] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#a9822e]"
//             >
//               Talk to an Advisor
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="eyebrow">About the Atelier</span>

        <h2 className="mt-4 text-3xl md:text-5xl font-emibold leading-tight text-[#000]">
          Hi, I&apos;m Malaika.
        </h2>


          

        <div className="mt-10 space-y-6 text-lg   text-gray-800">
          <p>
            Malaika Signature Atelier creates bespoke artwork for homes,
            offices, and commercial interiors. Whether you need a single
            statement masterpiece or a complete themed collection, every
            artwork is thoughtfully designed to complement your space and
            reflect your personality.
          </p>

          <p>
            Specializing in neon art, nature calligraphy, realism,
            portraits, oil paintings, and contemporary abstract designs, I
            provide access to over 10,000 creative concepts before crafting
            a unique artwork tailored exclusively for your interior.
          </p>

          
        </div>

        <a
          href="https://wa.me/923078793323"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center bg-[#222222] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#a9822e]"
        >
          Talk to an Advisor
        </a>
      </div>
    </section>
  );
}