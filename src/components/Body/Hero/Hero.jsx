import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <Header />
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Hero;
