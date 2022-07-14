import { Component } from "react";

import Logo from "../../Stateless/Logo/Logo";
import Navlinks from "./navLinks/Navlinks";
import Actions from "./actions/actions";
import NavlinksContainer from "./NavlinksContainer";
// import testBanner from '../../../Assets/gi'
import "./_Navigation.scss";
import navlink_data from "../../../Assets/navlinks-data.json";

class Navigation extends Component {
  state = {
    cart: [],
    favouriteItems: [],
    currentNavLink: navlink_data["sales"],
    containerToggle: false,
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
          {this.state.containerToggle && (
            <NavlinksContainer
              className="nav__container"
              banner={this.state.currentNavLink.banner}
              categories={this.state.currentNavLink.categories}
            />
          )}
        </nav>
        <Actions className="nav__actions" />
      </nav>
    );
  }
}

export default Navigation;
