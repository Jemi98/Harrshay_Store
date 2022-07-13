import { Paper, Grid } from "@mui/material";
import React from "react";
import cardData from "./ProductData";
import Products from "./Product/Products";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0e0e0",
      bluegray: "#eceff1",
    },
    secondary: {
      main: "#263238",
    },
  },
});

const Product = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            pt: 2,
            pb: 2,
            bgcolor: "primary.bluegray",
            px: 10,
            borderRadius: "0px",
          }}
          elevation={6}
        >
          <Grid container spacing={2} justify="center">
            {cardData.map((product) => {
              return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                  <Products
                    id={product.id}
                    title={product.title}
                    content={product.content}
                    price={product.price}
                    src={product.src}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Product;
