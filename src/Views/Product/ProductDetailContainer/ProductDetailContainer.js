import { Heading5, Paragraphy } from "../../../Utils/Typography/Typography";
import classes from "./ProductDetailContainer.module.scss";
const ProductDetailContainer = (WrapperComponent, { ...props }) => {
  return (
    <div className={classes.ProductDetailContainer}>
      <Heading5
        text={props.heading}
        upperCase
        bold
        color="var(--color-secondary)"
        style={{ marginBottom: "1rem" }}
      />
      <WrapperComponent />
    </div>
  );
};

export default ProductDetailContainer;
