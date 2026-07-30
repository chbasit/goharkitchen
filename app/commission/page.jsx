import CommissionForm from "../components/CommissionForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "Custom Oil Painting Commission |Samman",
  description:
    "Commission a hand-painted oil portrait — people, pets, or family memories, made into a timeless keepsake.",
};

export default function CommissionPage() {
  return (
    <>
      <Navbar />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="eyebrow">Custom Commission</span>

          <h1 className="mt-4 text-3xl text-[#1d1d1d] lg:text-5xl">
            Request Your Hand-Painted Portrait
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Fill out the details below and upload a few reference photos.
            I'll review everything and reply within 24–48 hours with pricing,
            timeline, and next steps  no back-and-forth needed to get started.
          </p>

          <div className="mt-12">
            <CommissionForm />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}