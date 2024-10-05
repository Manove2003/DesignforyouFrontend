import React from "react";
import { Box, Typography } from "@mui/material";
import CartContainer from "../components/CardContainer";
import SellerGigs from "../components/SellerGigs";

const WelcomePage = ({ isSeller }) => {
  return (
    <div className="container" style={{ padding: "10px 30px" }}>
      <Typography>
        {isSeller ? (
          ""
        ) : (
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              fontSize: "1.25rem",
            }}
          >
            Let’s <span className="highlight-text">Explore the talent</span>,
            Start your Business From Today
          </h2>
        )}
      </Typography>
      <Box>{isSeller ? <SellerGigs /> : <CartContainer />}</Box>
    </div>
  );
};

export default WelcomePage;
