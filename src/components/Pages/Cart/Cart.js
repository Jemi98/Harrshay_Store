import { Paper, Typography, Divider, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Paper elevation={6} sx={{ p: 6 }}>
      <Typography
        align="left"
        sx={{ p: 2, fontWeight: "bold", color: "warning.text" }}
      >
        Shoping Cart
      </Typography>
      <Divider />
      {cartItems.length === 0 ? (
        <Typography sx={{ pt: 4 }}> Cart is Empty...</Typography>
      ) : (
        <Grid
          container
          spacing={4}
          justify="center"
          sx={{
            mt: 2,
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          {cartItems.map((item) => {
            return (
              <Grid item>
                <CartItem
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  totalPrice={item.totalPrice}
                  price={item.price}
                  quantity={item.quantity}
                  src={item.src}
                />
              </Grid>
            );
          })}
          Grandtotal :: $
          {cartItems
            .reduce((acc, item) => acc + item.quantity * item.price, 0)
            .toFixed(2)}
        </Grid>
      )}
    </Paper>
  );
};

export default Cart;
