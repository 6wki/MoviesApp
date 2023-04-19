import React from "react";
import CardMovie from "./CardMovie";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MoviesContainer = ({ movies }) => {
  return (
    <div className="moviesContainer">
      <div className="container">
        {movies.length >= 1 ? (
          movies.map((mov) => {
            return <CardMovie key={mov.id} mov={mov} />;
          })
        ) : (
          <h2>لا يوجد أفلام</h2>
        )}
      </div>
      <Stack spacing={2}>
        <Pagination className="pagination" count={10} color="primary" />
      </Stack>
    </div>
  );
};

export default MoviesContainer;
