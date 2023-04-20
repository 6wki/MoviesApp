import React from "react";
import CardMovie from "./CardMovie";
import ReactPaginate from "react-paginate";

const MoviesContainer = ({ movies, getPage, count }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="moviesContainer">
      <div className="container1">
        {movies.length >= 1 ? (
          movies.map((mov) => {
            return <CardMovie key={mov.id} mov={mov} />;
          })
        ) : (
          <h2>لا يوجد أفلام</h2>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={count}
        previousLabel="< السابق"
        containerClassName="pagination justify-content-center p-3"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default MoviesContainer;
