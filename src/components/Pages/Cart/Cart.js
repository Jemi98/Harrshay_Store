import { Paper, Typography, Divider, Grid, Box, Button } from "@mui/material";
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
        <Typography sx={{ pt: 15, pb: 12 }}>Cart is Empty.....</Typography>
      ) : (
        <Box
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {cartItems.map((item) => {
              return (
                <Grid item lg={12}>
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
          </Box>
          <Box
            sx={{
              bgcolor: "text.primary",
              width: "270px",
              height: "270px",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Grid item>
              <Typography variant="h5" textAlign="center" pt={10} pb={10}>
                Grandtotal - $
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </Typography>
              <Button variant="contained">Checkout</Button>
            </Grid>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default Cart;
