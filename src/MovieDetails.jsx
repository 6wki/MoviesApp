import React from "react";
import Poster from "./assets/poster.jpg";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const MovieDetails = () => {
  return (
    <div className="movieDetails container1">
      <Fade bottom cascade>
        <div className="tpl">
          <div className="top">
            <div className="info">
              <h3>اسم الفيلم: فيلم</h3>
              <h3>تاريخ الفيلم: تاريخ</h3>
              <h3>عدد المقيمين: عدد</h3>
              <h3>التقييم: 8.5</h3>
            </div>
            <img src={Poster} alt="" />
          </div>
        </div>
        <div className="bottom">
          <h3>القصة</h3>
          <p>تبسمشن مسني شمك ط شكطيمكش يكش ممن</p>
        </div>
      </Fade>
      <footer>
        <Link to="/">
          <button>الرجوع الى الرئيسية</button>
        </Link>
        <button>مشاهدة الفيلم</button>
      </footer>
    </div>
  );
};

export default MovieDetails;
