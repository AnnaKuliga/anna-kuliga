import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero full-height">
      <div className="left">
        <Header />

        <div className="hero-text">
          <span className="intro">
            Let's make your website perfect together
          </span>
          <h1>
            I am <span class="text-brand">Frontend Developer</span>
          </h1>
          <p>My name is Anna and I am React Developer, based in Europe.</p>
          <div className="contact">
            <a href="tel:+47 925 35 197" className="tel custom-link">
              Call +47 925 35 197
            </a>
          </div>
        </div>
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Hero;
