import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css"; 

function Navbar({ isLoggedIn, username, onLogout }) {
  return (
    <nav className="navbar">
      <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/Logo`} //
            alt="Logo"
            className="navbar-logo"
          />
        </div>

      <div className="nav-links">
        {!isLoggedIn ? (
          <>
            <Link to="/LoginForm">
              <button>Login</button>
            </Link>
            <Link to="/SignUp">
              <button>Sign Up</button>
            </Link>
          </>
        ) : (
          <>
            <span>Welcome, {username}!</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
