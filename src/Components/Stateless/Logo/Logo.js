import { Link } from "react-router-dom";
import "./Logo.scss";

const logolink = (props) => {};

const Logo = (props) => {
  return (
    <Link to="/" className="logo">
      <h6 className="logo__text">
        <span>l</span>oomi
      </h6>
    </Link>
  );
};

export default Logo;
