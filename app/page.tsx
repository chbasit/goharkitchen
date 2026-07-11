import HeroSection from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import OurWork from "./components/OurWork";
import FooterSection from "./components/Footer";
import Portfolio from "./components/PortfolioSection"
import Whoweare from "./components/WhoWeAre"
import Faqs from "./components/Faqs";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <Portfolio/>
<Whoweare/>
<OurWork/>
      <AboutSection />
       
        
      {/* <ServicesSection /> */}
       
     <Faqs/>
      <FooterSection />
    </main>
  );
}