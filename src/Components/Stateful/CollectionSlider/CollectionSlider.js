import { Component } from "react";
import classes from "./CollectionSlider.module.scss";
class CollectionSlider extends Component {
  collectionsList = [
    {
      name: "Gender",
      options: [
        {
          name: "Female",
          value: "female",
        },
        {
          name: "Male",
          value: "male",
        },
      ],
    },
    {
      name: "Style",
      options: [
        {
          name: "Partywear",
          value: "partywear",
        },
        {
          name: "Casual",
          value: "casual",
        },
        {
          name: "Classic",
          value: "classic",
        },
      ],
    },
    {
      name: "Price Range",
      options: [
        {
          name: "All",
          value: undefined,
        },
        {
          name: "Lowest",
          value: "-1",
        },
        {
          name: "Highest",
          value: "1",
        },
      ],
    },
    {
      name: "Category",
      options: [
        { name: "Dresses", value: "dress" },
        { name: "Accessories", value: "accessories" },
      ],
    },
  ];
  generateCollections(list) {
    return list.map((item, i) => {
      return (
        <>
          <label key={(i + 1) * 6} htmlFor={item.name}>
            {item.name}:
          </label>
          <select key={i} name={item.name} onChange={(e) => console.log(e)}>
            {item.options.map((option, i) => (
              <option key={(i + 1) * 12} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </>
      );
    });
  }
  render() {
    return (
      <div className={classes.CollectionSlider}>
        <div className={classes.CollectionSlider__categories}>
          {this.generateCollections(this.collectionsList)}
        </div>
      </div>
    );
  }
}

export default CollectionSlider;
