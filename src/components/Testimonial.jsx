import React from "react";
import "../styles/Testimonial.scss";
import "../images/feedback1.jpg";
import "../images/feedback2.jpg";
import "../images/feedback3.jpg";
import "../images/feedback4.jpg";
import "../images/feedback5.jpg";
import "../images/feedback6.jpg";
import "../images/feedback7.jpg";

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
