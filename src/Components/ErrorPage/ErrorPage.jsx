import React from "react";
import error from "../../images/error.png";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <img src={error} className="error-img"></img>
        <span className="error-msg">Oh No! There's nothing here...</span>
      </div>{" "}
      <Link to={"/"}>
        <button>To the homepage!</button>
      </Link>
    </>
  );
};

export default ErrorPage;
