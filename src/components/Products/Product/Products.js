import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Products = ({ id, title, content, price, src }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        content,
        price,
        src,
      })
    );
  };

  return (
    <>
      <Card
        sx={{
          borderRadius: "10px",
        }}
      >
        <CardMedia component="img" height="200px" src={src} />
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
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${price}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: content }}
            variant="body2"
            color="textSecondary"
            component="p"
            sx={{ textAlign: "left" }}
          />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={addToCartHandler} aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Products;
