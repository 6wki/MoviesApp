import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const CardMovie = ({ mov }) => {
  return (
    <Link to={`/movie/${mov.id}`}>
      <Fade bottom>
        <div className="card">
          <div className="overlay">
            <p>{mov.original_title}</p>
            <p>Release Date : {mov.release_date}</p>
            <p>Number of voters : {mov.vote_count}</p>
            <p>Rating : {mov.vote_average}</p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
            alt=""
          />
        </div>
      </Fade>
    </Link>
  );
};

export default CardMovie;
