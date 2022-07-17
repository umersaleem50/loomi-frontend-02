import { Link } from "react-router-dom";
import classes from "./NavigateLinks.module.scss";

const NavigateLinks = (props) => {
  return (
    <div className={classes.Links}>
      {props.links.map((link, i) => {
        return (
          <Link className={classes.Link} to={link.to} key={i}>
            {link.text} /
          </Link>
        );
      })}
      <div className={classes.productName}>{props.productName}</div>
    </div>
  );
};

export default NavigateLinks;
