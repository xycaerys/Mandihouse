import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div style={{ background: "var(--color-primary)" }}>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;