import React from "react";
import HeroSection from "./components/hero/Hero";
import About from "./components/About";
import Steps from "./components/Steps";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Why from "./components/hero/Why";
import Stats from "./components/Stats";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Why />
      <Stats />
      <Testimonials />
      <About />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
};

export default HomePage;
