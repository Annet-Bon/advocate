import React, { useState, useEffect } from "react";
import ReactGA from "@react-ga4";
import "normalize.css";

import "./styles/main.scss";
import "./fontello/css/icons.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
// import Slogan from "./components/Slogan";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import AppLogo from "./components/AppLogo";

import Preview from "./images/preview.jpg";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-NS7FLV31D3"); // Tracking ID
    ReactGA.send("pageview");
  }, []);

  return (
    <div className="app">
      <div className="page-container">
        <div className={`main-content ${isLoaded ? "visible" : ""}`}>
          <Navigation />
          <Header />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
