import React from "react";
import AnimateLogo from "../images/animate-logo.svg"; // Замініть на шлях до вашого логотипу
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
} from "react-icons/fa"; // Використовуємо react-icons
import "../styles/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <section className="footer__top">
        <div className="footer__logo">
          <img alt="Анімований логотип" src={AnimateLogo} />
        </div>
        <div className="footer__info">
          <ul className="info__list">
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
                    href="https://t.me/yevtushenkolawyer"
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
        </div>
      </section>

      <section className="footer__bottom">
        <p className="footer__text">
          © {new Date().getFullYear()} Created by {"  "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/anna-bondarenko-belan/"
          >
            Anna Bondarenko
          </a>
          . Всі права захищено.
        </p>
      </section>
    </div>
  </footer>
);

export default Footer;
