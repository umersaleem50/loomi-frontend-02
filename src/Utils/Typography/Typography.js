import classes from "./Typography.module.scss";

const generateStyle = (props) => ({
  textTransform: props.upperCase ? "uppercase" : "",
  fontWeight: props.bold ? "600" : "500",
});

export const Paragraphy = (props) => {
  return <p className={classes.paragraph}>{props.children || props.text}</p>;
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
