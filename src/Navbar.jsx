import React from "react";
import logo from "./assets/logo.png";

const Navbar = ({ search }) => {
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
      <div className="right">
        <img src={logo} className="logo" />
        <h1>FindMovie</h1>
      </div>
    </nav>
  );
};

export default Navbar;
