import { Link } from "react-router-dom";
import linkData from "../../../Assets/footerLinks.json";
import { Heading5, Paragraphy } from "../../../Utils/Typography/Typography";
import classes from "./Footer.module.scss";
const Footer = (props) => {
  const generateLinks = (data) => {
    return data.map((el, i) => {
      return (
        <div className={classes.Box} key={i}>
          <Heading5
            text={el.heading}
            upperCase
            bold
            style={{ marginBottom: "4rem" }}
          />

          <ul className={classes.Links}>
            {el.links.map((link, i) => {
              return (
                <Link className={classes.Link} to={link.url}>
                  <Paragraphy text={link.text} />
                </Link>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <footer>
      <div className={classes.Container}>{generateLinks(linkData)}</div>
    </footer>
  );
};

export default Footer;
