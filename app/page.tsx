import React from "react";
import HeroSection from "./components/hero/Hero";
import About from "./components/about/About";
import Steps from "./components/Steps";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Testimonials />
      <Steps />
    </>
  );
};

export default HomePage;
