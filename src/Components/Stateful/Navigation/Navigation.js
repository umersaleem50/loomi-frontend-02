import { Component } from "react";
import Logo from "../../Stateless/Logo/Logo";
import Navlinks from "./navLinks/Navlinks";
import Actions from "./actions/actions";
import NavlinksContainer from "./NavlinksContainer";
// import testBanner from '../../../Assets/gi'
import "./_Navigation.scss";

class Navigation extends Component {
  state = {
    cart: [],
    favouriteItems: [],
  };

  links = [
    "sales",
    "new in",
    "clothing",
    "shoes",
    "accessories",
    "gifts",
    "collections",
  ];

  render() {
    return (
      <nav className="nav">
        <Logo className="nav__logo" />
        <nav className="nav__links">
          <Navlinks links={this.links} />
          <NavlinksContainer
            className="nav__container"
            banner="banner.jpg"
            category={[{ heading: "Shop By Sex" }, { heading: "Categories" }]}
          />
        </nav>
        <Actions className="nav__actions" />
      </nav>
    );
  }
}

export default Navigation;
