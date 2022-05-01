import React from "react";
import "./Navbar.css";
import poketom from "../../images/poketomlogo.png";
import favourites from "../../images/pokefave.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={poketom}></img>
      </div>
      <div className="navbar-mid"></div>
      <div className="navbar-right">
        <img src={favourites}></img>
      </div>
    </div>
  );
};

export default Navbar;
