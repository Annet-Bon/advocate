import React from "react";
import "../styles/Testimonial.scss";

import Screen from "../images/testimonial.jpg";

const Testimonial = () => {
  return (
    <blockquote className="testimonials__item">
      <img alt="Скріншот відгука" src={Screen} />
    </blockquote>
  );
};

export default Testimonial;
