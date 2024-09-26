import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import imageUrl from "./Designers.jpg";
import LoginSystem from "./LoginSystem";
import SignupSystem from "./SignupSystem";

// Styling for the overlay text (strapline) at the bottom of the image
const OverlayText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    bottom: "15%",
  },
}));

// Styling for the image container
const StyledImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "90vh",
  padding: "10px 30px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

// Styling for the image itself
const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "1rem",
  [theme.breakpoints.down("sm")]: {
    objectFit: "contain",
  },
}));

// Main component
const Container = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleView = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <StyledImageBox>
          <StyledImage src={imageUrl} alt="Design Partner" />
          <OverlayText variant="h4">
            Find Your Perfect Design Partner
          </OverlayText>
        </StyledImageBox>
      </Grid>

      {/* Login/Signup Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSignup ? (
          <SignupSystem toggleView={toggleView} />
        ) : (
          <LoginSystem toggleView={toggleView} />
        )}
      </Grid>
    </Grid>
  );
};

export default Container;
