import React from "react";
import "./Navbar.css";
import poketom from "../../images/poketomlogo.png";
import pokeheart from "../../images/pokeheart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to={"/"}>
            {" "}
            <img src={poketom} className="logo"></img>
          </Link>
        </div>

        <div className="navbar-mid"> </div>
        <div className="navbar-right">
          <Link to={"/"}>
            {" "}
            <img src={pokeheart} className="pokeheart"></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
