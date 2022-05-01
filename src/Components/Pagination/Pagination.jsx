import React from "react";
import "./Pagination.css";
const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className="prevnext">
      <button onClick={goToPrevPage} className="prevnextbuttons">
        Prev
      </button>
      <button onClick={goToNextPage} className="prevnextbuttons">
        Next
      </button>
    </div>
  );
};

export default Pagination;
