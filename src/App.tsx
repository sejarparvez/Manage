import CtaSection from "./Components/CtaSection";
import FeaturedSection from "./Components/FeaturedSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <Testimonial />
      <CtaSection />
      <Footer />
    </div>
  );
}
