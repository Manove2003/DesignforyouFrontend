import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Container from "./pages/Container";
import WelcomePage from "./pages/WelcomePage";
import { ToastContainer } from "react-toastify";

function App() {
  const [isSeller, setIsSeller] = useState(false);

  const handleRoleChange = (role) => {
    setIsSeller(role === "seller");
  };

  return (
    <Router>
      <Header isSeller={isSeller} onRoleChange={handleRoleChange} />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/welcome" element={<WelcomePage isSeller={isSeller} />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
