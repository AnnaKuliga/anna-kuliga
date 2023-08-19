import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className="hero full-height">
      <div className="left">
        <Header />

        <div className="hero-text">
          <h1>
            I am <span class="text-brand">Frontend Developer</span>
          </h1>
          <p>My name is Anna and I am React Developer, based in Europe.</p>
          <div className="contact">
            <p>Let's make your website perfect together</p>
            <button className="btn-hero">
              <a href="tel:+47 925 35 197">Call +47 925 35 197</a>
            </button>
          </div>
        </div>
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Hero;
