import {
  Heading3,
  Heading5,
  Heading6,
  Heading_Hero,
} from "../../../Utils/Typography/Typography";
import { BtnCTA } from "../Button/Button";
import classes from "./Header.module.scss";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="./assets/hero.jpg" alt="Hero" />
      <video
        className={classes.video}
        src="/assets/hero-video.mp4"
        autoPlay
        muted
        loop
      />
      <Heading_Hero text="Season" />
      <Heading_Hero text="Sale" italic style={{ top: "50%" }} />
      <Heading5 text="UP TO" bold />
      <Heading3 text="-60%" />

      <BtnCTA text="shop now" />

      <svg width="0" height="0">
        <defs>
          <clipPath id="heroSvg">
            <path
              d="M0 314.5C0 140.806 140.806 0 314.5 0H629V818H0V314.5Z"
              fill="#ffffff"
            />
          </clipPath>
        </defs>
      </svg>
    </header>
  );
};

export default Header;
