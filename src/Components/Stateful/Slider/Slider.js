import { Component } from "react";
import React from "react";
import { BtnRound } from "../../Stateless/Button/Button";

class Slider extends Component {
  state = {
    currentParam: "",
  };

  btnList = [
    { text: "All", param: "" },
    { text: "Dresses", param: "dress" },
    { text: "Skirts", param: "skirt" },
    { text: "Shoes", param: "shoe" },
    { text: "Accessories", param: "accessories" },
  ];

  updateList(param) {
    this.setState({ currentParam: param });
    // return false;
  }

  generateButtons(btnList) {
    return btnList.map((btn, i) => {
      return (
        <BtnRound
          text={btn.text}
          active={this.state.currentParam === btn.param}
          customStyle={{ marginRight: "1.5rem" }}
          btnClicked={() => this.updateList(btn.param)}
          key={i}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>{this.generateButtons(this.btnList)}</React.Fragment>
    );
  }
}

export default Slider;
