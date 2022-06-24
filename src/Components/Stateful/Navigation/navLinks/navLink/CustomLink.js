import { Link } from "react-router-dom";
import { Heading6 } from "../../../../../Utils/Typography/Typography";
import classes from "./CustomLink.module.scss";
// import testImage from "../../../../../Assets/girl.jpg";

const CustomLink = (props) => {
  return (
    <Link to={props.to || "/products"} className={classes[props.type]}>
      {props.type && props.type.includes("picture") && (
        <img src={`/assets/${props.picture}`} alt={props.text}></img>
        // <img src={`./public/assets/${props.picture}`}></img>
      )}
      {props.type && props.type.includes("text") && (
        <Heading6 text={props.text} bold />
      )}
    </Link>
  );
};

export default CustomLink;
