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

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <FaReact className="logo-icon" />
        <h2>
          Anna Kuliga <br /> <span className="logoName">Web Dev</span> 
        </h2>
      </div>
      <div className="menuDiv">
        <ul className="menuLists grid">
          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <AiOutlineHome className="icon" />
              <span className="smallText">Home</span>
            </a>
          </li>

          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <BsPerson className="icon" />
              <span className="smallText">About</span>
            </a>
          </li>

          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <HiOutlineLightBulb className="icon" />
              <span className="smallText">Skills</span>
            </a>
          </li>

          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <MdWorkOutline className="icon" />
              <span className="smallText">Projects</span>
            </a>
          </li>

          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <AiOutlineStar className="icon" />
              <span className="smallText">Reviews</span>
            </a>
          </li>

          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePhone className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
