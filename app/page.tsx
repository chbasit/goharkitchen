import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const About = dynamic(() => import("./components/About"));
const OurWork = dynamic(() => import("./components/OurWork"));
const WhoWeAre = dynamic(() => import("./components/WhoWeAre"));
const VideoPlayer = dynamic(() => import("./components/Videoplayer"));
const Testimonial = dynamic(() => import("./components/Testimonial"));
const Best = dynamic(() => import("./components/BestSeller"));
const CommissionTeaser =dynamic(()=>import("./components/CommissionTeaser"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <CommissionTeaser/>
<Best/>
     
      
      <WhoWeAre />
      <About/>
      <OurWork />
      
       <VideoPlayer />
      <Testimonial />

      

      <Footer />
    </main>
  );
}