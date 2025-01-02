import React from "react";
import "../styles/Testimonial.scss";

const imagesContext = require.context(
  "../images/feedbacks",
  false,
  /\.(jpe?g|png|gif)$/
);
const images = imagesContext.keys().map(imagesContext);
console.log(images);

const Testimonial = ({ currentSlide }) => {
  const imageUrl = images[currentSlide];
  console.log(currentSlide);

  return (
    <blockquote className="testimonials__item">
      <img alt="Скріншот відгука" src={imageUrl} />
    </blockquote>
  );
};

export default Testimonial;
