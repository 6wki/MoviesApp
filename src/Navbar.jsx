import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ search, getPage }) => {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <nav>
      <input
        onChange={(e) => onSearch(e.target.value)}
        type="search"
        id="sh"
        placeholder="Search for anything"
      />
      <Link to="/">
        <div onClick={getPage(0)} className="right">
          <img src={logo} className="logo" />
          <h1>FindMovie</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
