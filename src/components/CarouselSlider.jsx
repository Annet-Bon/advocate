import React, { useContext, useEffect } from "react";

import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";
import "../styles/CarouselSlider.scss";

import Arrow from "../images/icons/icon-arrow.svg";
import Testimonial from "./Testimonial";
import useWindowSize from "../hooks/windowSize";

const CarouselSlider = ({ setSlideCount, setCurrentSlide }) => {
  const screenWidth = useWindowSize();

  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible) => {
      const { currentSlide, totalSlides, visibleSlides } =
        carouselContext.state;

      setSlideCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 768) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1024) {
      updateCarouselSlide(2);
    } else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext]);

  return (
    <div className="carousel__list">
      <Slider>
        <Slide index={0} className="slide">
          <Testimonial index={0} />
        </Slide>
        <Slide index={1} className="slide">
          <Testimonial />
        </Slide>
        <Slide index={2} className="slide">
          <Testimonial />
        </Slide>
        <Slide index={3} className="slide">
          <Testimonial />
        </Slide>
        <Slide index={4} className="slide">
          <Testimonial />
        </Slide>
        <Slide index={5} className="slide">
          <Testimonial />
        </Slide>
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
    </div>
  );
};

export default CarouselSlider;
