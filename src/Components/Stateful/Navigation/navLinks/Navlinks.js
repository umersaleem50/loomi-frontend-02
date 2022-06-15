import { NavLink } from "react-router-dom";

const navlinks = (props) => {
  return (
    <ul className="nav__links">
      {props.links.map((el, i) => (
        <li>
          <NavLink to={`/${el.split(" ").join("-")}`} className="nav__link">
            {el}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default navlinks;
