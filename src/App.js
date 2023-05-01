import React from "react";
import CtaSection from "./components/CtaSection";
import FetureSection from "./components/FetureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Testimonial from "./components/Testimonial";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FetureSection />
      <Testimonial />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
