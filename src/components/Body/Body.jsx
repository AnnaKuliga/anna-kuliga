import React from "react";
import "./Body.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Reviews from "./Reviews/Reviews";
import Contact from "./Contact/Contact";

const Body = () => {
  return (
    <div className="mainContent">
      <Hero />
      <div className="bottom flex">
        {/*About Skills Projects Reviews Contact*/}
      </div>
    </div>
  );
};

export default Body;
