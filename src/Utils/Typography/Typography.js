import classes from "./Typography.module.scss";

const generateStyle = ({ upperCase, bold, italic, ...props }) => ({
  textTransform: upperCase ? "uppercase" : "capitalize",
  fontWeight: bold ? "600" : "500",
  fontStyle: italic ? "italic" : "",
  ...props.style,
});

export const Paragraphy = (props) => {
  return (
    <p className={classes.paragraph} style={generateStyle(props)}>
      {props.children || props.text}
    </p>
  );
};

export const Heading5 = (props) => {
  return (
    <h5 className={classes.heading5} style={generateStyle(props)}>
      {props.children || props.text}
    </h5>
  );
};

export const Heading6 = (props) => {
  return (
    <h6 className={classes.heading6} style={generateStyle(props)}>
      {props.children || props.text}
    </h6>
  );
};

export const Heading3 = (props) => {
  return (
    <h3 className={classes.heading3} style={generateStyle(props)}>
      {props.children || props.text}
    </h3>
  );
};

export const HEADING_HERO = (props) => {
  return (
    <h2 className={classes.Heading_Hero} style={generateStyle(props)}>
      {props.children || props.text}
    </h2>
  );
};

export const Heading7 = (props) => {
  return (
    <h6 className={classes.heading7} style={generateStyle(props)}>
      {props.children || props.text}
    </h6>
  );
};
