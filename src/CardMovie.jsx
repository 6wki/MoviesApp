import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const CardMovie = ({ mov }) => {
  return (
    <Link to={`/movie/${mov.id}`}>
      <Fade bottom>
        <div className="card">
          <div className="overlay">
            <p>اسم الفيلم</p>
            <p>{mov.original_title}</p>
            <p>تاريخ الاصدار : {mov.release_date}</p>
            <p>النوع : خيال علمي</p>
            <p>عدد المقيمين : {mov.vote_count}</p>
            <p>التقييم : {mov.vote_average}</p>
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
