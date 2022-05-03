import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./Toggle.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <BsFillMoonFill />
      <BsFillSunFill />
      <div
        className="toggle-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
