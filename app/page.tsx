import React from "react";
import HeroSection from "./components/hero/Hero";
import About from "./components/About";
import Steps from "./components/Steps";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Why from "./components/hero/Why";
import Stats from "./components/Stats";
import { StaggerTestimonials } from "./components/StaggerTestimonials";
import Faq from "./components/Faq";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Why />
      <Stats />
      <StaggerTestimonials />
      <About />
      <Steps />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
};

export default HomePage;
