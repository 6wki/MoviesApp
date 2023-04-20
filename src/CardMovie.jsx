import React from "react";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Link to={`/movie/${mov.id}`}>
      <div className="card">
        <div className="overlay">
          <p>اسم الفيلم</p>
          <p>{mov.original_title}</p>
          <p>تاريخ الاصدار : {mov.release_date}</p>
          <p>النوع : خيال علمي</p>
          <p>عدد المقيمين : {mov.vote_count}</p>
          <p>التقييم : {mov.vote_average}</p>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500` + mov.poster_path} alt="" />
      </div>
    </Link>
  );
};

export default CardMovie;
