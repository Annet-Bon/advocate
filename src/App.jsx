import React, { useState, useEffect } from "react";
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
import Preloader from "./components/Preloader";

const App = () => {
  // Стейт для контролю завантаження
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Таймер для симуляції часу завантаження
    const timer = setTimeout(() => {
      setIsLoaded(true); // Коли прелоадер завершується, контент стає видимим
    }, 0); // Встановлюємо затримку 4 секунди для завершення анімації прелоадера

    // Очищаємо таймер, коли компонент буде демонтований
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {!isLoaded && <Preloader />}
      {/* Покажемо прелоадер, поки не завершилось завантаження */}
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
