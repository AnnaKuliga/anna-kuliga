import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroDiv">
        <h1>
          I am <span className="heading-hero">Frontend</span> Developer
        </h1>
        <p>I am Anna Kuliga, React Developer, based in Europe.</p>
        <div className="buttons">
          <a href="#projects" class="btn" title="Explore">
            Explore my work
          </a>
          <a href="tel:+4792535197" class="btn" title="Call me">
            Call +47 925 35 197
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
