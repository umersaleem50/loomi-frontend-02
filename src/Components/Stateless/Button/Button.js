import classes from "./Button.module.scss";

export const BtnCTA = (props) => {
  return (
    <button className={classes.BtnCTA}>
      <span>{props.text || props.children}</span>
    </button>
  );
};

export const BtnRound = (props) => {
  let conditionClasses = [classes.BtnRound];
  conditionClasses.push(props.active ? classes.BtnRoundActive : "");
  conditionClasses = conditionClasses.join(" ");
  return (
    <button
      className={conditionClasses}
      onClick={props.btnClicked}
      style={props.customStyle}
    >
      {props.text || props.children}
    </button>
  );
};
