import React from "react";
import Product from "../../Products/Product";
import Slider from "../../Slider/Slider";
import CorouselSlider from "../../ Carousel/CarouselSlider";
import image from "../../../assets/feature2.jpg";
import classess from "./Home.module.css";
import { Box, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Slider />
      <Typography variant="h5" mt={2}>
        Featured Product
      </Typography>
      <Box sx={{ mx: 10, mt: 4, height: "400px" }}>
        <img className={classess.imgg} src={image} alt="featured product" />
        <Link style={{ textDecoration: "none" }} to={"/products"}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className={classess.button}
          >
            See Product
          </Button>
        </Link>
        <Typography
          className={classess.text}
          variant="h6"
          textTransform="capitalize"
        >
          check out our best featured products
        </Typography>
      </Box>
      <Product />
      {/*<Layout /> */}
      <CorouselSlider />
    </>
  );
};

export default Home;
