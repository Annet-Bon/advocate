import React from "react";
import "../styles/Header.scss";
// import Signature from "../images/signature.png";
import Portrait from "../images/portrait.webp";

const Header = () => (
  <section className="header__background">
    <header className="header container">
      <section className="header__content">
        <h2 className="header__title">Адвокат</h2>
        <h1 className="header__subtitle">Євтушенко Микола Павлович</h1>
        <a href="#contact" className="header__button">
          Зв'язатися
        </a>
      </section>
      <section className="header__image">
        <img alt="" src={Portrait} />
      </section>
    </header>
  </section>
);

export default Header;
