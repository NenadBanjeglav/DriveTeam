import React from "react";
import HeroSection from "./components/hero/Hero";
import About from "./components/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Why from "./components/hero/Why";
import Stats from "./components/Stats";
import { StaggerTestimonials } from "./components/StaggerTestimonials";
import Faq from "./components/Faq";
import SteppedProgress from "./components/SteppedProgress";
import { Pricing } from "./components/Pricing";
import ContactForm from "./components/ContactForm";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Why />
      <Stats />
      <StaggerTestimonials />
      <SteppedProgress />
      <About />
      <Pricing />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
