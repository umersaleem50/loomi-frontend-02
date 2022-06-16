import React from "react";
import { useRef } from "react";
import Search from "../../Search/Search";

const Actions = (props) => {
  const searchRef = useRef();

  const searchToggled = (e) => {
    searchRef.current.classList.add("search__toggle");
  };

  const closeSearch = (e) => {
    searchRef.current.classList.remove("search__toggle");
  };

  return (
    <div ref={searchRef} className="nav__actions">
      <Search searchToggled={searchToggled} closeSearch={closeSearch} />
    </div>
  );
};

export default Actions;
