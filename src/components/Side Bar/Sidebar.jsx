import React from "react";
import "./Sidebar.css";

//imported icons ====>
import { FaReact } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <FaReact className="logoIcon" />
        <h2>Anna Kuliga </h2> <span className="logoName">Web Development</span> 
      </div>

      <div className="menuDiv">
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineHome className="icon" />
              <span className="smallText">Home</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsPerson className="icon" />
              <span className="smallText">About</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <HiOutlineLightBulb className="icon" />
              <span className="smallText">Skills</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdWorkOutline className="icon" />
              <span className="smallText">Projects</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineStar className="icon" />
              <span className="smallText">Reviews</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePhone className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <div className="social">
          <a
            href="https://github.com/AnnaKuliga"
            title="Anna Kuliga GitHub "
            target="_blank"
          >
            <AiOutlineGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/annakuliga/"
            title="Anna Kuliga LinkedIn"
            target="_blank"
          >
            <BiLogoLinkedin className="icon" />
          </a>
          <a
            href="https://www.shecodes.io/graduates/57519-anna-kuliga"
            title="Anna Kuliga LinkedIn"
            target="_blank"
          >
            <IoSchool className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
