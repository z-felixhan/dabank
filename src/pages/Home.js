import { about, discover, signup } from "../components/Data";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...about} even={true} />
      <Info {...discover} even={false} />
      <Services />
      <Info {...signup} even={true} last={true} />
      <Footer />
    </>
  );
};

export default Home;
