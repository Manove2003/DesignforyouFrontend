import React, { useState, useEffect } from "react";
import { Box, IconButton, Stack, Avatar, InputBase } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import logoimg from "./Design4me logo V2.0.png";
import CustomizedSwitches from "./CustomizedSwitches";
import { useLocation } from "react-router-dom";
import profieimg from "./images/avator.png";
import "./Header.css";

const Header = ({ isSeller, onRoleChange }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const searchPlaceholder = isSeller
    ? "Search for buyers"
    : "Search for services";

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  return (
    <header className="header">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", padding: { xs: "10px 20px", md: "15px 30px" } }} // Responsive padding
      >
        <Box className="logo">
          <img src={logoimg} alt="Logo" />
        </Box>
        {isLoggedIn && location.pathname === "/welcome" && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="flex-end"
            sx={{ flexGrow: 1 }}
          >
            {/* Search bar for all screen sizes */}
            <Box
              className="search-bar"
              sx={{
                display: { xs: "none", sm: "flex" }, // Show on small screens and up
                maxWidth: "300px", // Limit size on larger screens
                flexGrow: 1,
                marginLeft: "20px", // Space between switch and search bar
              }}
            >
              <InputBase
                placeholder={searchPlaceholder}
                fullWidth
                sx={{
                  padding: "8px 16px",
                  borderRadius: "30px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
            </Box>
            <CustomizedSwitches
              isSeller={isSeller}
              onRoleChange={onRoleChange}
            />
            {/* User info and icons */}
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <MailIcon />
            </IconButton>
            <Avatar alt="User" src={profieimg} />
          </Stack>
        )}
      </Stack>
    </header>
  );
};

export default Header;
