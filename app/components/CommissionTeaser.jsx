import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommissionTeaser() {
  return (
    <section className="bg-[#FDFAF1] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <span className="eyebrow text-gray-800">Custom Commissions</span>

        <h2 className="text-2xl font-light text-gray-800 lg:text-3xl">
          Turn Your Photo Into a Hand-Painted Oil Portrait
        </h2>

        <p className="max-w-xl text-gray-800">
          Tell me about your vision in a quick form  portraits, pets, family
          memories, or a completely original piece , and I'll get back to you
          with pricing and timeline.
        </p>

        <Link
          href="/commission"
          className="mt-2 inline-flex items-center gap-3 border  px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-gray-800 transition border  border-[#a9822e] hover:text-[#a9822e]"
        >
          Start Your Commission
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}