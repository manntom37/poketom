import React from "react";
import "./Navbar.css";
import poketom from "../../images/poketomlogo.png";
import pokeheart from "../../images/pokeheart.png";
import { Link } from "react-router-dom";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to={"/"}>
            {" "}
            <img
              src={poketom}
              className="logo"
              alt="A logo showing the word 'PokeTom' in the Pokemon font."
            ></img>
          </Link>
        </div>

        <div className="navbar-mid">
          <Toggle />
        </div>
        <div className="navbar-right">
          <Link to={"/favourites"}>
            {" "}
            <img
              src={pokeheart}
              className="pokeheart"
              alt="A heart with a pokeball in it, linking to our favourites page."
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
