import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomGoogleIcon from "./CustomGoogleIcon";
import CustomFacebookIcon from "./CustomFacebookIcon";
import axios from "axios";

const SignupSystem = ({ toggleView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    // Password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await axios.post(
        "https://designforyoubackend-1.onrender.com/api/auth/signup",
        {
          email,
          password,
          username,
          phoneNumber,
        }
      );
      console.log("Signup successful:", response.data);
      setError("");
      setOpenSnackbar(true); // Show success Snackbar

      // Clear form fields
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error
      );
      setError("Signup failed. Please try again.");
    }
  };

  const handleGoogleSignup = () => {
    window.location.href =
      "https://designforyoubackend-1.onrender.com/api/auth/google";
  };

  const handleFacebookSignup = () => {
    window.location.href =
      "https://designforyoubackend-1.onrender.com/api/auth/facebook";
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        px: 2,
      }}
    >
      <Typography variant="h3" component="h1">
        Sign up
      </Typography>
      <Typography variant="subtitle1">Create a new account</Typography>

      {error && (
        <Typography color="error" variant="body2" mt={1}>
          {error}
        </Typography>
      )}

      <form onSubmit={handleSignup}>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          type="submit" // Ensure the button is of type submit
        >
          Sign up
        </Button>
      </form>

      <Typography variant="body2" mt={2}>
        Already have an account?{" "}
        <Link href="#" onClick={toggleView}>
          Login
        </Link>
      </Typography>

      <Typography variant="body2" mt={2}>
        Or
      </Typography>

      <Button
        variant="outlined"
        startIcon={<CustomGoogleIcon />}
        onClick={handleGoogleSignup}
        sx={{ mb: 2, width: "100%" }}
      >
        Sign up with Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<CustomFacebookIcon />}
        onClick={handleFacebookSignup}
        sx={{ width: "100%" }}
      >
        Sign up with Facebook
      </Button>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registered successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupSystem;
