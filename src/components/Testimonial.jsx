import React from "react";
import "../styles/Testimonial.scss";

const testimonials = [
  "feedback1.jpg",
  "feedback2.jpg",
  "feedback3.jpg",
  "feedback4.jpg",
  "feedback5.jpg",
  "feedback6.jpg",
  "feedback7.jpg",
];

const Testimonial = ({ currentSlide }) => {
  // Import the image dynamically based on the current slide index
  const imagePath = testimonials[currentSlide];
  const imageUrl = require(`../images/${imagePath}`);

  return (
    <blockquote className="testimonials__item">
      <img alt={`Скріншот відгука ${currentSlide + 1}`} src={imageUrl} />
    </blockquote>
  );
};

export default Testimonial;
