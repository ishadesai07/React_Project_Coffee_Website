import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel";
import MainContent from "./components/MainContent";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal"; 
import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(""); 

  // Handle login and set username
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username); 
  };

  // Handle logout and clear username
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(""); 
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
        
        <Routes>
          {/* Route for Login */}
          <Route
            path="/LoginForm"
            element={!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <Carousel />}
          />

          {/* Route for Sign Up */}
          <Route
            path="/SignUp"
            element={!isLoggedIn ? <SignUp /> : <Carousel />}
          />

          {/* Routes for logged-in users */}
          <Route
            path="/"
            element={isLoggedIn ? (
              <>
                <Carousel />
                <MainContent />
                <ProductTable />
              </>
            ) : (
              <LoginForm onLogin={handleLogin} />
            )}
          />
        </Routes>

        {/* Product Modal */}
        {isLoggedIn && <ProductModal />} {/* Display modal only when logged in */}

        {/* Footer */}
        {isLoggedIn && <Footer />} {/* Display footer only after login */}
      </div>
    </Router>
  );
}

export default App;
