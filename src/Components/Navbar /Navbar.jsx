import React from "react";
import "./Navbar.css";
import poketom from "../../images/poketomlogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={poketom}></img>
      </div>
      <div className="navbar-mid"></div>
      <div className="navbar-right">Favourites</div>
    </div>
  );
};

export default Navbar;
