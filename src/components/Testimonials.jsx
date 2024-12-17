import React, { useState } from "react";
import "../styles/Testimonials.scss";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Testimonial from "./Testimonial";
import TestimonialCarousel from "./CarouselSlider";

const Testimonials = () => {
  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="testimonials" className="testimonials container">
      <h2 className="testimonials__title">
        Відгуки <span>клієнтів</span>
      </h2>
      <div className="testimonials__list">
        <CarouselProvider
          visibleSlides={slideCount}
          totalSlides={7}
          step={1}
          currentSlide={currentSlide}
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          infinite={true}
        >
          <TestimonialCarousel
            setSlideCount={setSlideCount}
            setCurrentSlide={setCurrentSlide}
          />
          <Testimonial currentSlide={currentSlide} />
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Testimonials;
