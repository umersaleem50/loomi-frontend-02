import classes from "./Button.module.scss";

export const BtnCTA = (props) => {
  return (
    <button className={classes.BtnCTA}>
      <span>{props.text || props.children}</span>
    </button>
  );
};
