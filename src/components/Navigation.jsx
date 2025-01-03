import React, { useState, useEffect } from "react";
import { BackDrop } from "./BackDrop";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaViber,
  FaLinkedin,
  FaFacebookMessenger,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/Navigation.scss";
import "../fontello/css/icons.css";
import Logo from "../images/logo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Відстеження розміру екрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      if (window.innerWidth > 767) {
        setIsOpen(false); // Закриваємо меню, якщо екран більший
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navigation">
      <section className="navigation__container">
        <a href="/" className="navigation__logo">
          <img className="logo" alt="Логотип" src={Logo} />
        </a>
        {isMobile && (
          <button className="icon-button" onClick={handleMenu}>
            <i className="icon-align-justify"></i>
          </button>
        )}
        {isOpen && isMobile && <BackDrop handleMenu={handleMenu} />}
        <nav
          className={`navigation__body ${isMobile ? "mobile" : ""}`}
          style={isMobile && isOpen ? { display: "flex" } : {}}
        >
          <ul className="navigation__list">
            <li>
              <a href="#about" onClick={handleMenu}>
                Про себе
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleMenu}>
                Послуги
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleMenu}>
                Відгуки
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleMenu}>
                Контакти
              </a>
            </li>
          </ul>
          <ul className="navigation__contacts">
            <li className="contacts">
              <ul>
                <li>
                  <FaPhoneAlt className="phone_icon" />{" "}
                  <a href="tel:+380974799793">+380 (97) 479-97-93</a>
                </li>
                <li>
                  <FaEnvelope className="mail_icon" />{" "}
                  <a href="mailto:yevtushenko.lex@gmail.com">
                    yevtushenko.lex@gmail.com
                  </a>
                </li>
              </ul>
            </li>

            <li className="hours">
              Графік роботи: <span>Пн-Пт</span> 9:00–18:00
            </li>
            <li className="socials">
              Соцмережі:
              <ul className="social__list">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006436266443&locale=uk_UA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/advocate_yevtushenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/380974799793"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    href="viber://chat?number=%2B380974799793"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaViber />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://m.me/username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookMessenger />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/myevtushenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </nav>
  );
};

export default Navigation;
