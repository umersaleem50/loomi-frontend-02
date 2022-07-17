import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../../Components/Stateless/ImageGallery/ImageGallery";
import NavigateLinks from "../../Components/Stateless/NavigateLinks/NavigateLinks";
import axios from "axios";
import Ratings from "../../Components/Stateless/Ratings/Ratings";
import classes from "./Product.module.scss";
import { Heading3, Paragraphy } from "../../Utils/Typography/Typography";
import OnscreenError from "../../Utils/Error/OnscreenError";
import SetSizesOptions from "../../Components/Stateless/SetSizesOptions/SetSizesOptions";
import { BtnRectangleAccent } from "../../Components/Stateless/Button/Button";
import ProductDetailContainer from "./ProductDetailContainer/ProductDetailContainer";
const Product = (props) => {
  let links = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Dresses",
      to: "/products?category=dress",
    },
  ];
  let [product, setProduct] = useState([]);
  let [isError, setIsError] = useState({ is: false, message: "" });

  const params = useParams();

  useEffect(() => {
    const request = async () => {
      const productId = params.id;
      try {
        const productData = await axios({
          url: `/api/v1/products/${productId}`,
        });
        setProduct(productData.data.data);
      } catch (err) {
        setIsError({
          is: true,
          message:
            "Something went wrong. Failed to connect to server. Please try again later!",
        });
      }
    };

    request();
  }, [params.id]);

  return (
    <div className="ProductSection">
      {isError.is && (
        <OnscreenError message={isError.message} toggle={isError.is} />
      )}
      <NavigateLinks links={links} productName={product.name} />
      <div className={classes.ProductContainer}>
        {product.images && <ImageGallery images={product.images} />}
        <div className={classes.ProductDetails}>
          <div className={classes.ProductDetails__container}>
            {product.rating && (
              <Ratings
                ratings={product.rating}
                ratingsQuntity={product.ratingsQuntity}
              />
            )}
            <Heading3 text={product.name} />
            <Paragraphy
              text={`Product Code: ${product.productCode}`}
              color="var(--color-secondary)"
            />
            <Heading3
              text={`${product.price} $`}
              color="var(--color-accent)"
              bold
            />
          </div>

          <div className={classes.ProductDetails__container}>
            {product.sizes && <SetSizesOptions options={product.sizes} />}
          </div>

          <div className={classes.ProductDetails__container}>
            <BtnRectangleAccent
              text="Add to bag"
              customStyle={{ width: "30rem", textTransform: "uppercase" }}
              upperCase
            />
          </div>

          <div className={classes.ProductDetails__container}>
            {product.productDetail &&
              ProductDetailContainer(
                () => (
                  <Paragraphy color="var(--color-secondary)">
                    {product.productDetail}
                  </Paragraphy>
                ),
                {
                  heading: "Product Details",
                }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
