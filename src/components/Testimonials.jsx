import React, { useState, useEffect } from "react";
import "../styles/Testimonials.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Arrow from "../images/arrow.svg";

import useWindowSize from "../hooks/windowSize";

import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // За замовчуванням для >= 1088px
  const screenWidth = useWindowSize();

  const handleSlideChange = (event) => {
    setCurrentSlide(event.currentSlide);
  };

  // Визначення кількості видимих слайдів залежно від ширини екрану
  useEffect(() => {
    const updateCarouselSlide = (count) => setVisibleSlides(count);

    if (screenWidth < 768) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1024) {
      updateCarouselSlide(2);
    } else {
      updateCarouselSlide(3);
    }
  }, [screenWidth]);

  return (
    <section id="testimonials" className="testimonials container">
      <h2 className="testimonials__title">
        Відгуки <span>клієнтів</span>
      </h2>
      <div className="testimonials__list">
        <CarouselProvider
          visibleSlides={visibleSlides}
          totalSlides={7}
          currentSlide={currentSlide}
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          infinite={true}
        >
          <Slider onSlideChange={handleSlideChange}>
            {Array.from({ length: 7 }).map((_, index) => (
              <Slide key={index} index={index}>
                <Testimonial currentSlide={index} />
              </Slide>
            ))}
          </Slider>
          <div className="controls">
            <ButtonBack
              className="btn-arrow reverse-arrow"
              onClick={() =>
                setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 6))
              }
            >
              <img src={Arrow} alt="arrow" />
            </ButtonBack>
            <DotGroup className="dot-group" />
            <ButtonNext
              className="btn-arrow"
              onClick={() =>
                setCurrentSlide((prev) => (prev < 6 ? prev + 1 : 0))
              }
            >
              <img src={Arrow} alt="arrow" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Testimonials;
