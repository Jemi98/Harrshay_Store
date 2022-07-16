import { Paper, Typography } from "@mui/material";
import React from "react";
import Products from "../../Products/Product/Products";
import cardData from "../../Products/ProductData";
import { Box, Grid } from "@mui/material";

const ProductPage = () => {
  return (
    <Paper
      sx={{
        pb: 3,
        pt: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          px: 5,
          pb: 2,
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        Product
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
  );
};

export default ProductPage;
