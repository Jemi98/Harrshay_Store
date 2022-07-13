import Slider from "react-slick";
import React, { component } from "react";
import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
//import Item from "./Item";
import classess from "./CarouselSlider.module.css";
import CorouselData from "./CorouselData";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        zIndex: "99",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        zIndex: "99",
      }}
      onClick={onClick}
    />
  );
}

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Paper
      sx={{
        alignContent: "center",
        py: 6,
        px: 10,
        borderRadius: "0px",
      }}
    >
      <Typography pb={1} variant="h5" fontSize="bold">
        You may Also Like
      </Typography>

      <Slider {...settings}>
        {CorouselData.map((item) => (
          <Card key={item.id} sx={{ maxWidth: "320px", height: "360px" }}>
            <Link to="/cart">
              <CardMedia
                className={classess.media}
                component="img"
                height="200px"
                src={item.src}
              />
            </Link>

            <CardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ textAlign: "left" }}
                >
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  ${item.price}
                </Typography>
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{ textAlign: "left" }}
              >
                {item.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Paper>
  );
};

export default CarouselSlider;
