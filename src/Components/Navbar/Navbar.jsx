import React from "react";
import "./Navbar.css";
import poketom from "../../images/poketomlogo.png";
import { FaHeart } from "react-icons/fa";
import { RiSwordLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={poketom} className="logo"></img>
      </div>
      <div className="navbar-mid">
        {" "}
        <RiSwordLine />{" "}
      </div>
      <div className="navbar-right">
        <FaHeart />
      </div>
    </div>
  );
};

export default Navbar;
