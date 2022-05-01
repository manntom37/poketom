import React from "react";
import "./Pagination.css";
const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className="prevnextbuttons">
      <button onClick={goToPrevPage}>Prev</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
