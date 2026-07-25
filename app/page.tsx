import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LazyCatalog from "./components/LazyCatalog";

const About = dynamic(() => import("./components/About"));
const OurWork = dynamic(() => import("./components/OurWork"));
const WhoWeAre = dynamic(() => import("./components/WhoWeAre"));
const Services = dynamic(() => import("./components/Services"));
const Testimonial = dynamic(() => import("./components/Testimonial"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />

      <About />
      <OurWork />
      <WhoWeAre />
      <Services />
      <Testimonial />

      <LazyCatalog />

      <Footer />
    </main>
  );
}