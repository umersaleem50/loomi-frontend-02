import classes from "./GridBox.module.scss";

const GridBox = (WrapperComponent, ...props) => {
  const renderElements = (data) => {
    return data.map((el, i) => {
      return <WrapperComponent key={i} image={el.images[0]} />;
    });
  };

  return <div className={classes.GridBox}>{renderElements(props.data)}</div>;
};

export default GridBox;
