import React from "react";

import { IoCloseOutline as BtnClose } from "react-icons/io5";
import { Heading5 } from "../../../../../Utils/Typography/Typography";
import "./favItemsButton.scss";

const FavItemsButton = (IconComponent, props) => {
  const ActionComponent = (props) => {
    const generateResults = () => {};

    return (
      // <IconComponent />
      <React.Fragment>
        <div className="actionBtn">
          <IconComponent
            className="actionBtn__icon"
            size={"2rem"}
            color={"var(--color-primary)"}
            onClick={(e) => {
              // dispatch(toggle());
            }}
          />
          {false && (
            <div className="actionBtn__box">
              <div className="actionBtn__box__top">
                <Heading5 text={props.heading} />
                <BtnClose
                  size={"2rem"}
                  color={"var(--color-primary)"}
                  onClick={(e) => {
                    // dispatch(toggle());
                  }}
                />
              </div>
              <div className="actionBtn__box__items">{generateResults()}</div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  };
  return <ActionComponent {...props}></ActionComponent>;
};

export default FavItemsButton;
