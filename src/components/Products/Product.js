import { Paper, Grid, Typography } from "@mui/material";
import React from "react";
import cardData from "./ProductData";
import Products from "./Product/Products";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";

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
            pb: 3,
            pt: 2,
            px: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              px: 15,
              pb: 1,
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "Center",
            }}
          >
            Popular collections
          </Typography>
          <Typography variant="body1" sx={{ pb: 2 }}>
            Visit our shop to see amazing creations from our designers.
          </Typography>
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              {cardData.map((product) => {
                return (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
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
          </Box>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Product;
