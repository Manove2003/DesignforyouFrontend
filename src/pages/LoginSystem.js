import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomGoogleIcon from "./CustomGoogleIcon";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginSystem = ({ toggleView, onRoleChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://designforyoubackend-1.onrender.com/api/auth/login",
        { email, password }
      );
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      toast.success(`Logged in as ${user.email} (${user.username})`);
      setError("");

      onRoleChange(user.role); // Update role based on user info
      navigate("/welcome");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error
      );
      setError(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    }
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "https://designforyoubackend-1.onrender.com/api/auth/google";
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      toast.success("Logged in with Google");

      updateRoleOnLogin();

      navigate("/welcome", { replace: true });
    }
  }, [navigate]);

  const updateRoleOnLogin = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "https://designforyoubackend-1.onrender.com/api/auth/update-role",
        { role: "buyer" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(`Role set to ${response.data.user.role}`);
      onRoleChange(response.data.user.role); // Update role based on Google login
    } catch (error) {
      console.error("Failed to set role:", error);
      toast.error("Failed to set role.");
    }
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
        py: 4,
        mx: "auto",
      }}
    >
      <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
        Login
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Welcome back!
      </Typography>

      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <form onSubmit={handleEmailLogin} style={{ width: "100%" }}>
        <TextField
          label="Enter Your Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextField
          label="Enter Your Password"
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
          required
        />

        <Link
          href="#"
          variant="body2"
          sx={{ display: "block", textAlign: "right", mt: 1 }}
        >
          Forgot Password?
        </Link>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          type="submit"
        >
          Login
        </Button>
      </form>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Link href="#" onClick={toggleView}>
          Signup
        </Link>
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Or
      </Typography>
      <Button
        variant="outlined"
        startIcon={<CustomGoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{ mb: 2, width: "100%" }}
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default LoginSystem;
