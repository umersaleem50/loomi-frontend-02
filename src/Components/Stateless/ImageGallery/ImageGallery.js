import { Component } from "react";
import classes from "./ImageGallery.module.scss";
import {
  BsChevronLeft as ArrowLeft,
  BsChevronRight as ArrowRight,
} from "react-icons/bs";

class ImageGallery extends Component {
  state = {
    currentImageNum: 0,
  };

  slideSlideLeft(e) {
    if (this.state.currentImageNum === 0) {
      return this.setState({ currentImageNum: this.props.images.length - 1 });
    }
    return this.setState((prevState) => {
      return { currentImageNum: prevState.currentImageNum - 1 };
    });
  }

  slideSlideRight(e) {
    if (this.state.currentImageNum === this.props.images.length - 1) {
      return this.setState({ currentImageNum: 0 });
    }
    return this.setState((prevState) => {
      return { currentImageNum: prevState.currentImageNum + 1 };
    });
  }

  generateOtherImages(images) {
    return (
      <div className={classes.ImageList}>
        {images.map((image, i) => {
          return (
            <div
              className={classes.SmallImage}
              key={i}
              onClick={(e) => this.setState({ currentImageNum: i })}
            >
              <img src={`/images/products/small/${image}`} />
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className={classes.ImageGallery}>
        {this.generateOtherImages(this.props.images)}
        <div className={classes.CurrentImage}>
          <img
            src={`/images/products/${
              this.props.images[this.state.currentImageNum]
            }`}
          />
          <ArrowLeft
            className={classes.Arrow}
            onClick={this.slideSlideLeft.bind(this)}
          />
          <ArrowRight
            className={classes.Arrow}
            onClick={this.slideSlideRight.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ImageGallery;
