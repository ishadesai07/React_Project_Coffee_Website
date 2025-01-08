import React from "react";
import "./MainContent.css"; 

const MainContent = () => {
  const containerStyle = {
    backgroundImage: `url("/images/background.jpg")`,
  };

  return (
    <div className="main-content-container" style={containerStyle}>
      <div className="main-content">
        <h1>Welcome to Our Coffee Shop</h1>
        <p>
          <strong>Your Cozy Corner for the Perfect Brew.</strong>
        </p>
        <p>
          At our Coffee Shop, we believe in the magic of a good cup of coffee. Whether you're starting your day, taking a break, or catching up with friends, our inviting atmosphere is the perfect place to unwind. We serve freshly brewed coffee made from the finest beans, along with a variety of teas, pastries, and snacks to complement your experience.
        </p>
        <p>
          Our baristas are passionate about crafting the perfect cup, and we take pride in offering a menu that caters to all tastes. From classic espresso drinks to seasonal specials, there's something for everyone.
        </p>
        <p>
          Come in, relax, and enjoy a moment of comfort with us. Your perfect cup of coffee is waiting!
        </p>
      </div>
      <div className="main-content-image" style={containerStyle}></div>
    </div>
  );
};

export default MainContent;
