import { NavLink } from "react-router-dom";

const navlinks = (props) => {
  return (
    <ul>
      {props.links.map((el, i) => (
        <li key={i}>
          <NavLink to={`/${el.split(" ").join("-")}`} className="nav__link">
            {el}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default navlinks;
