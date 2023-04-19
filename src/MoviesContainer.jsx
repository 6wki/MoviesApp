import React from "react";
import CardMovie from "./CardMovie";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const MoviesContainer = ({ movies }) => {
  const handlePageClick = (data) => {};

  const pageCount = 500;
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
        pageCount={pageCount}
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
      {/* <Stack spacing={2}>
        <Pagination className="pagination" count={10} color="primary" />
      </Stack> */}
    </div>
  );
};

export default MoviesContainer;
