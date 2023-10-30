import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import axios from "axios";

const MovieDetails = () => {
  const para = useParams();
  const [movie, setMovie] = useState([]);
  const getMovieDetail = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${para.id}}?api_key=22006fdc6740588ec8f99ce0772f459e&language=en-US`
      );
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div className="movieDetails container1">
      <Fade bottom cascade>
        <div className="tpl">
          <div className="top">
            <div className="info">
              <h3>Movie Name : {movie.title}</h3>
              <h3>Release Date : {movie.release_date}</h3>
              <h3>Number of voters : {movie.vote_count}</h3>
              <h3>Rating : {movie.vote_average}</h3>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt=""
            />
          </div>
        </div>
        <div className="bottom">
          <h3>Summary</h3>
          <p>{movie.overview}</p>
        </div>
      </Fade>
      <footer>
        <Link to="/">
          <button>Go back</button>
        </Link>
      </footer>
    </div>
  );
};

export default MovieDetails;
