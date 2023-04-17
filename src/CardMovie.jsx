import React from "react";

const CardMovie = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="overlay">
          <p>اسم الفيلم : Moonlight</p>
          <p>تاريخ الاصدار : 2023-02-10</p>
          <p>النوع : خيال علمي</p>
          <p>التقييم : 9.7</p>
        </div>
        <img
          src="https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5"
          alt=""
        />
      </div>
    </div>
  );
};

export default CardMovie;
