import { Paragraphy } from "../../../Utils/Typography/Typography";
import { useState } from "react";
import classes from "./SetSizesOptions.module.scss";
import { data } from "browserslist";
const SetSizesOptions = (props) => {
  const [currentSize, setSize] = useState(props.options[0]);

  const allOptions = ["xs", "s", "m", "l", "xl"];

  const isClicked = (size) => {
    // alert(size);
    if (!props.options.includes(size)) return;
    setSize(size);
  };

  const generateOptions = (data) => {
    return data.map((option, i) => {
      const customClasses = [classes.Option];

      option === currentSize && customClasses.push(classes.Active);
      !props.options.includes(option) && customClasses.push(classes.Disabled);

      return (
        <p
          className={customClasses.join(" ")}
          onClick={() => isClicked(option)}
          key={i}
        >
          {option}
        </p>
      );
    });
  };

  return (
    <div className={classes.Sizes}>
      <p className={classes.CurrentSize}>
        <span>Size: </span>
        {currentSize}
      </p>
      <div className={classes.Options}>{generateOptions(allOptions)}</div>
    </div>
  );
};

export default SetSizesOptions;
