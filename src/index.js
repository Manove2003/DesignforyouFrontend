import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
