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
import Review from "../../Components/Stateless/Review/Review";
import StoreMap from "../../Components/Stateless/StoreMap/StoreMap";
import Slider from "../../Components/Stateful/Slider/Slider";
import GridBox from "../../Components/Stateless/GridBox/GridBox";

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
  const params = useParams();
  let [product, setProduct] = useState([]);
  let [recommendProducts, setRecommendProduct] = useState([]);
  let [isError, setIsError] = useState({ is: false, message: "" });
  let storeLocations = [];

  const generateReviews = (reviews) => {
    return reviews.map((review, i) => {
      return (
        <Review
          key={i}
          username={review.user.name}
          ratings={review.rating}
          profilePicture={review.user.profilePicture}
          review={review.description}
        />
      );
    });
  };

  useEffect(() => {
    const request = async () => {
      const productId = params.id;
      try {
        const productData = await axios({
          url: `/api/v1/products/${productId}`,
        });

        const recommendProducts = await axios({
          url: `/api/v1/products?category=${productData.data.data.category[0]}`,
        });

        setRecommendProduct(recommendProducts.data.data.slice(0, 4));

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
  }, []);

  return (
    <div className="ProductSection">
      {/* //* If there is an error */}
      {isError.is && (
        <OnscreenError message={isError.message} toggle={isError.is} />
      )}
      {/* //* otherwise run this */}
      <NavigateLinks links={links} productName={product.name} />
      <div className={classes.ProductContainer}>
        {/* //* Product Images */}

        {product.images && <ImageGallery images={product.images} />}

        {/* //* Product details */}

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
                  show: true,
                }
              )}
          </div>
          <div className={classes.ProductDetails__container}>
            {product.modelHeight &&
              ProductDetailContainer(
                () => (
                  <>
                    <Paragraphy color="var(--color-secondary)">
                      <span>Model's height:</span> {product.modelHeight}cm /
                      {(product.modelHeight / 30.48).toFixed(1)}"
                    </Paragraphy>
                    <Paragraphy color="var(--color-secondary)">
                      <span>Model wears:</span> {product.modelWear}
                    </Paragraphy>
                  </>
                ),
                {
                  heading: "Size & Fit",
                  show: true,
                }
              )}
          </div>

          <div className={classes.ProductDetails__container}>
            {product.reviews &&
              ProductDetailContainer(
                () => <>{generateReviews(product.reviews)}</>,
                { heading: `Reviews (${product.ratingsQuntity || 0})` }
              )}
          </div>

          <div className={classes.ProductDetails__container}>
            {product.locations &&
              product.locations.length !== 0 &&
              ProductDetailContainer(
                () => <StoreMap locations={product.locations} />,
                {
                  heading: `Availabiltiy in stores`,
                  show: true,
                }
              )}
          </div>
        </div>

        {/* //* Render recommended slider */}
      </div>
    </div>
  );
};

export default Product;
