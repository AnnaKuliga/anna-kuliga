import React from "react";
import "./Header.css";

//imported icons ====>
import { FaReact } from "react-icons/fa";

//imported img ====>

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <FaReact className="logo-icon" />
        <p>Anna Kuliga</p>
      </div>
    </div>
  );
};

export default Header;
