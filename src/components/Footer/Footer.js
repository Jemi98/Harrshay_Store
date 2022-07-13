import {
  Typography,
  Box,
  Grid,
  TextField,
  IconButton,
  Stack,
  createTheme,
  ThemeProvider,
  Divider,
} from "@mui/material";

import { Facebook, Instagram, EmailOutlined } from "@mui/icons-material";
import React from "react";
import classess from "./Footer.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0e0e0",
      bluegray: "#eceff",
    },
    secondary: {
      main: "#263238",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Divider />
      <Box
        sx={{
          pb: 1,
          bgcolor: "primary.main",
          borderRadius: "0px",
        }}
        className={classess.footer}
      >
        <Box
          width="auto"
          sx={{
            mb: 4,
            pt: 4,
            mx: 2,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            style={{ width: "50%" }}
            size="small"
            id="standard-bare"
            variant="outlined"
            placeholder="Subscribe here by e-mail"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <EmailOutlined />
                </IconButton>
              ),
            }}
          />
          <Stack direction="row" alignItems="center">
            <Typography fontWeight="bold"> Follow us:</Typography>
            <Facebook />
            <Instagram />
          </Stack>
        </Box>

        <Grid
          container
          gap={2}
          sx={{
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Grid item xs={11} sm={4} md={3} lg={2}>
            <Typography variant="h6">About</Typography>
            <Stack>
              <Typography>About</Typography>
              <Typography>Contact us</Typography>
              <Typography>Store Location</Typography>
              <Typography>Terms of services</Typography>
              <Typography>Refund Policy</Typography>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={4} md={3} lg={2}>
            <Typography variant="h6">Support</Typography>
            <Stack>
              <Typography>Shipping</Typography>
              <Typography>Return and exchange</Typography>
              <Typography>Track your order</Typography>
              <Typography>Cancellation olicy</Typography>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={4} md={3} lg={2}>
            <Typography variant="h6">Policy</Typography>
            <Stack>
              <Typography>FAQ's</Typography>
              <Typography>Privacy Policy</Typography>
              <Typography>Terms & conditions</Typography>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={4} md={3} lg={2}>
            <Typography variant="h6">Find us</Typography>
            <Stack>
              <Typography>Email:</Typography>
              <Typography>harshayy@gmail.com</Typography>
              <Typography>
                Call us:+92 300 00000000001 +92 300 00000000001
              </Typography>
              <Typography>Mon-Fri: 10:00 A.M - 5:00 P.M</Typography>
              <Typography>19 KM ferozpur road KAM road Lahore.</Typography>
            </Stack>
          </Grid>
          <Grid item xs={11} sm={8.2} md={6.2} lg={2}>
            <Typography variant="h6">Blog</Typography>
            <Stack>
              <Typography>Blogs & News</Typography>
            </Stack>
          </Grid>
          <Box>
            <Typography>© 2022 Harshhay All Rights reserved</Typography>
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
