import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import ReactGA from "react-ga4";

import "../styles/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Будь ласка, підтвердіть, що ви не робот!");
      return;
    }

    const dataWithRecaptcha = { ...formData, recaptchaToken };

    emailjs
      .send(
        "service_ioytucu", // ID сервісу
        "template_ide1lce", // ID шаблону
        dataWithRecaptcha,
        "fvpv91400hQTXZC0j" // public key із EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Повідомлення успішно надіслано!");

          setFormData({
            name: "",
            phone: "",
            message: "",
          });

          // Відправка події в Google Analytics
          ReactGA.event("submit_contact_form", {
            category: "User",
            action: "Submit Contact Form",
            label: "Contact Form Submitted",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setSuccessMessage("Щось пішло не так. Спробуйте знову.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">
        <span>Написати</span> Адвокату
      </h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше ім'я"
          className="contact__input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Ваш номер телефону"
          className="contact__input"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="^\+?[0-9]{10,15}$"
        />
        <textarea
          name="message"
          placeholder="Ваше питання"
          className="contact__textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <ReCAPTCHA
          sitekey="6LetebAqAAAAAK0QUN0voVJ78YhsNXp_93yTt7Zw" // ключ сайту
          onChange={handleRecaptchaChange}
          size="invisible" // невидимий режим
        />

        <button type="submit" className="contact__button">
          Надіслати
        </button>
      </form>
      {successMessage && <p className="contact__success">{successMessage}</p>}
    </section>
  );
};

export default Contact;
