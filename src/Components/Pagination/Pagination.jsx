import React from "react";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div>
      <button onClick={goToPrevPage}>Prev</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
