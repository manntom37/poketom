import React from "react";
import Navbar from "../Navbar/Navbar";
import loading from "../../images/loading.gif";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <>
      <div className="loadingscreen">
        <img src={loading}></img>
      </div>
    </>
  );
};

export default LoadingScreen;
