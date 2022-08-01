import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
//import Item from "./Item";
import classess from "./CarouselSlider.module.css";
import CorouselData from "./CorouselData";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: "#4dabf5",
    secondary: "#4dabf5",
  },
});

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <Box
      className={classess.leftarrow}
      style={{
        ...style,
        width: "40px",
        height: "50px",
        marginTop: "170px",
        marginLeft: "30px",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </Box>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <Box
      className={classess.rightarrow}
      style={{
        ...style,
        width: "40px",
        height: "50px",
        marginTop: "170px",
        marginRight: "30px",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </Box>
  );
}

const CarouselSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    cssEase: "linear",
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
          slidesToScroll: 1,
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
    <ThemeProvider theme={theme}>
      <Divider />
      <Paper
        sx={{
          py: 4,
          px: 6,
          borderRadius: "0px",
          bgcolor: "secondary",
        }}
      >
        <Typography pb={3} variant="h5" fontSize="bold">
          You May Also Like
        </Typography>

        <Slider style={{ display: "flex" }} {...settings}>
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
    </ThemeProvider>
  );
};

export default CarouselSlider;
