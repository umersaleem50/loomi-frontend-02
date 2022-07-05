import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./ImageBox.module.scss";
import Loading from "../../../Utils/Loading/Loading";
const ImageBox = (props) => {
  const navigate = useNavigate();

  const [isLoad, setIsLoad] = useState(false);
  const imageSrc =
    (props.imageUrl && `/assets/${props.imageUrl}`) ||
    `/images/products${props.size === "small" ? "/small" : ""}/${props.image}`;
  return (
    <div
      className={
        props.size === "small"
          ? classes.ImageBox__img
          : classes.ImageBox__img__big
      }
      onClick={() =>
        navigate((props.url && props.url) || `/product/${props.productId}`)
      }
    >
      {/* //TODO: Fix Loading spinner */}

      {!isLoad && <Loading />}
      <img src={imageSrc} alt="Product Image" onLoad={() => setIsLoad(true)} />
    </div>
  );
};

export default ImageBox;
