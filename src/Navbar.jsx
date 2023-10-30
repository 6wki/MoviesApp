import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };

  const location = useLocation();

  const [isHome, setIsHome] = useState(false);
  const pathname = location.pathname;

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  return (
    <nav>
      {isHome && (
        <input
          onChange={(e) => onSearch(e.target.value)}
          type="search"
          id="sh"
          placeholder="Search for anything"
        />
      )}

      <Link to="/">
        <div className="right">
          <img src={logo} className="logo" />
          <h1>FindMovie</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
