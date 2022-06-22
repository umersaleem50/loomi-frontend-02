import React from "react";
import { useRef } from "react";
import { FiHeart } from "react-icons/fi";
import Search from "../../Search/Search";
import FavItemsButton from "./actionBtn/favItemsButton";
import "./actions.scss";

const Actions = (props) => {
  const searchRef = useRef();

  const searchToggled = (e) => {
    searchRef.current.classList.add("search__toggle");
  };

  const closeSearch = (e) => {
    searchRef.current.classList.remove("search__toggle");
  };

  return (
    <div ref={searchRef} className="actions">
      <Search
        searchToggled={searchToggled}
        closeSearch={closeSearch}
        url="api/v1/products/search"
      />
      {/* <FiHeart></FiHeart> */}
      {FavItemsButton(FiHeart, { heading: "favroite items" })}
    </div>
  );
};

export default Actions;
