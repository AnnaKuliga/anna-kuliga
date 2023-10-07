import React from "react";
import "./Skills.css";

//imported icons ------->
import { VscDeviceCamera } from "react-icons/vsc";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

import { BsCodeSquare } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Skills = () => {
  return (
    <div className="Skills full-height" id="skills">
      <div className="skills-categories">
        <div className="skills-card">
          <div className="skill-icon">
            <VscDeviceCamera className="skill-icon" />
          </div>
          <div className="skill-title">
            <h3>Photography</h3>
          </div>
          <div className="skill-description">
            <p>
              My passion for photography started in high school. I love taking
              photos of nature. When I travel, I always take my camera with me.
              You can see some of my photos on my professional Instagram
              account. I encourage you to follow it and if you like what you
              see, let us talk about cooperation.
            </p>
          </div>
        </div>
        <div className="skills-card">
          <div className="skill-icon">
            <BsCodeSquare className="skill-icon" />
          </div>
          <div className="skill-title">
            <h3>Web Development</h3>
          </div>
          <div className="skill-description">
            <p>
              Do you need help with writing blogs, post, and publications? Give
              me the topic and you will find aa well-written and captivating
              text. If you need a professional resume, we can work on it, too.
            </p>
          </div>
        </div>
        <div className="skills-card">
          <div className="skill-icon">
            <FiEdit className="skill-icon" />
          </div>
          <div className="skill-title">
            <h3>Editing & Tech writing</h3>
          </div>
          <div className="skill-description">
            <p>
              My passion for photography started in high school. I love taking
              photos of nature. When I travel, I always take my camera with me.
              You can see some of my photos on my professional Instagram
              account. I encourage you to follow it and if you like what you
              see, let us talk about cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
