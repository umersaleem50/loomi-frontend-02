import { Component } from "react";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline as BtnClose } from "react-icons/io5";
import "./Search.scss";
class Search extends Component {
  state = {
    isToggle: false,
  };

  //   classes = ["search"].push(() => (this.state.isToggle ? "toggle" : ""));

  render() {
    return (
      <div className={`search ${this.state.isToggle ? "toggle" : ""}`}>
        <BiSearch
          size={"2rem"}
          color={"var(--color-primary)"}
          onClick={(e) => {
            this.setState({ isToggle: true });
          }}
          className="search__btn"
        />
        {this.state.isToggle && (
          <input type="text" className="search__input" placeholder="Search" />
        )}
        {this.state.isToggle && (
          <BtnClose
            size={"2rem"}
            style={{ opacity: 0.5 }}
            onClick={(e) => this.setState({ isToggle: false })}
          />
        )}
      </div>
    );
  }
}

export default Search;
