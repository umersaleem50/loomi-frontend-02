import { Component } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline as BtnClose } from "react-icons/io5";

import "./Search.scss";
class Search extends Component {
  state = {
    isToggle: false,
    products: "",
    results: [],
  };

  componentDidUpdate() {
    this.state.results = axios
      .get("/api/v1/products", {
        params: { category: this.state.products },
      })
      .then((results) => {
        this.setState({ results });
        console.log(results);
      });

    console.log(this.state.results);
  }

  //   classes = ["search"].push(() => (this.state.isToggle ? "toggle" : ""));

  render() {
    return (
      <div className={`search`}>
        <BiSearch
          size={"2rem"}
          color={"var(--color-primary)"}
          onClick={(e) => {
            this.setState({ isToggle: true });
            this.props.searchToggled(e);
          }}
          className="search__btn"
        />
        {this.state.isToggle && (
          <input
            type="text"
            className="search__input"
            placeholder="SEARCH"
            value={this.state.products}
            onChange={(e) => this.setState({ products: e.value })}
          />
        )}
        {this.state.isToggle && (
          <BtnClose
            size={"2rem"}
            style={{ opacity: 0.5 }}
            onClick={(e) => {
              this.setState({ isToggle: false });
              this.props.closeSearch(e);
            }}
          />
        )}
        {this.state.isToggle && <div className="search__results">results</div>}
      </div>
    );
  }
}

export default Search;
