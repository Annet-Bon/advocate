import React from "react";
import "../styles/Testimonial.scss";

const testimonials = [
  "../images/feedback1.jpg",
  "../images/feedback2.jpg",
  "../images/feedback3.jpg",
  "../images/feedback4.jpg",
  "../images/feedback5.jpg",
  "../images/feedback6.jpg",
  "../images/feedback7.jpg",
];

const Testimonial = ({ currentSlide }) => {
  // Import the image dynamically based on the current slide index
  const imagePath = testimonials[currentSlide];
  const imageUrl = require(`${imagePath}`);

  return (
    <blockquote className="testimonials__item">
      <img alt="Скріншот відгука" src={imageUrl} />
    </blockquote>
  );
};

export default Testimonial;
