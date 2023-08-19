import React from "react";
import "./Top.css";
import Navbar from "./Navbar/Navbar";

//imported icons ====>

import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";

const Top = () => {
  return (
    <div className="top">
      <div className="left-top">
        <Navbar />
      </div>
      <div className="right-top">
        <div className="social">
          <a
            href="https://github.com/AnnaKuliga"
            title="Anna Kuliga GitHub "
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/annakuliga/"
            title="Anna Kuliga LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoLinkedin className="icon" />
          </a>
          <a
            href="https://www.shecodes.io/graduates/57519-anna-kuliga"
            title="Anna Kuliga SheCodes"
            target="_blank"
            rel="noreferrer"
          >
            <IoSchool className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Top;
