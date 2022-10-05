import React from "react";
import Gallery from "../Gallery/Gallery";
import HeroSection from "../Hero Section/HeroSection";
import AboutUs from "../About Us/AboutUs";
import Footer from "./Footer";
import "./LandingPage.css";
import Team from "./Team";
import ContactUs from "./ContactUs";
const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Gallery />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
