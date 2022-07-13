import React from "react";
import Product from "../Products/Product";
import Slider from "../Slider/Slider";
import CorouselSlider from "../ Carousel/CarouselSlider";

const Home = () => {
  return (
    <>
      <Slider />
      <Product />
      <CorouselSlider />
    </>
  );
};

export default Home;
