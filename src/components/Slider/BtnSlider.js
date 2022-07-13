import React from "react";
import "./Slider.css";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="slider arrow"
      />
    </button>
  );
};

export default BtnSlider;
