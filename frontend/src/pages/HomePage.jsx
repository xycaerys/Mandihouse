import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import ExtrasShowcase from "../components/ExtrasShowcase";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div style={{ background: "var(--color-primary)" }}>
      <Header />
      <Hero />
      <Menu />
      <ExtrasShowcase />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;