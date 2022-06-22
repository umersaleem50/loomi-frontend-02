import { Component } from "react";
import { Heading6 } from "../../../Utils/Typography/Typography";
import CustomLink from "./navLinks/navLink/CustomLink";

class Navlinks_Container extends Component {
  state = {
    isToggle: false,
  };

  generateLinks(links) {
    // return links.map((link,i))
    return (
      <>
        <CustomLink type="picture_text_big" text="For Her" picture="girl.jpg" />
        <CustomLink type="picture_text_big" text="For Her" picture="girl.jpg" />
      </>
    );
  }

  render() {
    return (
      <div className="nav__container">
        <div className="nav__container__banner">
          {this.props.banner && (
            <img src={`/assets/${this.props.banner}`} alt="New Discount" />
          )}
        </div>
        <div className="nav__container__category">
          {this.props.category.length && (
            <Heading6 text={this.props.category[0].heading} upperCase bold />
          )}
          <div className="nav__container__category__box">
            {this.generateLinks()}
          </div>
        </div>
        <div className="nav__container__category">
          {this.props.category.length && (
            <Heading6 text={this.props.category[1].heading} upperCase bold />
          )}
          <div className="nav__container__category__box">
            {this.generateLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default Navlinks_Container;
