import HeroSection from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import TestimonialSection from "./components/Testimonial";
import FooterSection from "./components/Footer";
import Faqs from "./components/Faqs"
export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      < Faqs/>
      <FooterSection />
    </main>
  );
}