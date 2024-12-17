import React from "react";
import "../styles/Testimonial.scss";

// Контекст для імпорту зображень з папки 'feedbacks'
const imagesContext = require.context(
  "../images/feedbacks",
  false,
  /\.(jpe?g|png|gif)$/
);
const images = imagesContext.keys().map(imagesContext);

const Testimonial = ({ currentSlide }) => {
  const imageUrl = images[currentSlide];

  return (
    <blockquote className="testimonials__item">
      <img alt={`Скріншот відгука ${currentSlide + 1}`} src={imageUrl} />
    </blockquote>
  );
};

export default Testimonial;
