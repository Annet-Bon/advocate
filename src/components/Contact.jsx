import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Надсилаємо форму через EmailJS
    emailjs
      .send(
        "service_ioytucu", // ID вашого сервісу
        "template_ide1lce", // ID вашого шаблону
        formData,
        "fvpv91400hQTXZC0j" // Ваш public key із EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Повідомлення успішно надіслано!");

          // Очищуємо поля форми після успішного відправлення
          setFormData({
            name: "",
            phone: "",
            message: "",
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
        <button type="submit" className="contact__button">
          Надіслати
        </button>
      </form>
      {successMessage && <p className="contact__success">{successMessage}</p>}
    </section>
  );
};

export default Contact;
